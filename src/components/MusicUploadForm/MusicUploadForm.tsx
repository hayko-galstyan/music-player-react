import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { SongInterface } from '../../types';
import { useDispatch } from 'react-redux';
import { addNewSongAction } from '../../redux/slices/SongSlice/SongSlice';
import {MusicForm,UploadMusic,ProgressBar, UploadDiv} from './style';

const MusicUploadForm = () => {
    const [file,setFile] = useState<File>();
    const [progessValue,setProgressValue] = useState<number>(0)
    const {register,handleSubmit,formState:{errors}} = useForm();
    const dispatch = useDispatch();
    const [data,setData] = useState<SongInterface>({
        id:0,
        songName:'',
        trackNumber:0,
        filePath:'',
        artistName:'',
        status:'pause'
    });
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setFile(file);
            // progressbar
            let step:number = progessValue;
            let interValpRrogressBar = setInterval(()=>{
                step +=  10 //Math.floor(Math.random() * 10);
                setProgressValue(step)
                if(step >= 100) {
                    clearInterval(interValpRrogressBar)
                }
            },500)    
        }
    };
    const handleUploadMusic = async () => {
        console.log(file?.name);
        if(file) {
            try {
                let formData=new FormData();
                formData.append('file',file);
                let folderPath = '/public/musics';
                let path = folderPath + '/' + file.name
                let urlImage = process.env.PUBLIC_URL + path;
                // set data
                let temp : SongInterface= {...data};
                temp.id = Date.now();
                temp.filePath = urlImage;
                dispatch(addNewSongAction(temp));
                setProgressValue(0);
                setFile(undefined);
                setData({
                    id:0,
                    songName:'',
                    trackNumber:0,
                    filePath:'',
                    artistName:'',
                    status:'pause'
                })
                const response = await fetch('http://localhost:3001/upload', {
                    method: 'POST',
                    body: formData,
                });
                if(response.ok) {
                    console.log('successfully upload!')
                }else {
                    console.log('you have a error!');
                }
            }
            catch(error) {
                console.error('is not upoload music!');
            }
            finally {
                console.log('finally')
            }
        }
    }
    return(
        <div>
            <MusicForm className='row' onSubmit={handleSubmit(handleUploadMusic)}>
                <div className='form-group col-md-6'>
                    <label htmlFor='songName'>Song Name *</label>
                    {}
                    <input
                        {...register('songName',{
                            required:true
                        })} 
                        className='form-control' 
                        type='text' 
                        placeholder='Song name'
                        value = {data.songName}
                        onChange={(e)=>setData({...data,songName:e.target.value})}
                        style = {{border : errors.songName ? '1px solid red' : ''}}
                    />
                </div>
                <div className='form-group col-md-6'>
                    <label htmlFor='Artist name'>Artist name *</label>
                    <input 
                        {...register('artistName',{
                            required:true
                        })}
                        className='form-control' 
                        type='text' 
                        placeholder='Artist name'
                        onChange={(e)=>setData({...data,artistName:e.target.value})}
                        style = {{border : errors.artistName ? '1px solid red' : ''}}
                    />
                </div>
                <div className='mt-3'>
                <div className="custom-file">
                    <UploadMusic
                        type="file"
                        className="custom-file-input"
                        id="uploadInput"
                        accept=".mp3, .wav"
                        {...register('file',{required:'File is required'})}
                        onChange={handleFileChange}
                    />
                    <p>File type .mp3, .wav</p>
                    <UploadDiv 
                        className="custom-file-label" 
                        htmlFor="uploadInput" 
                        style={{border: errors.file ? '1px solid red' : ''}}
                    >
                        {file ? <ProgressBar value={progessValue} max={100} /> : '' }
                        {file && progessValue==100 ? `${file.name} ${file.size ? `(${(file.size / 1000000).toFixed(2)} MB)` : ''}` : 'Choose Music'}
                    </UploadDiv>
                </div>

                </div>
                <button className='btn mt-3 btn-info'>Save</button>
            </MusicForm>
        </div>
    )
}
export default MusicUploadForm;