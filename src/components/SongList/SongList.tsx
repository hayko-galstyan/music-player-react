import { useSelector } from "react-redux";
import { getSongs } from "../../redux/slices/SongSlice/SongSlice";
import SongRow from "../SongRow/";
import styles from './style.module.css';

const SongList = () => {
    const songs = useSelector(getSongs);
    console.log(songs);
    return(
        <div className={styles.songList}>
            <div className={styles.header}>
                <div></div>
                <div>Song Name</div>
                <div>Artist Name</div>
                <div>Track</div>
                <div></div>
            </div>
            <div className="">
                {
                    songs.map((item,i)=>{
                        return(
                            <SongRow
                                key={i}
                                id = {item.id}
                                songName={item.songName}
                                trackNumber={item.trackNumber}
                                artistName={item.artistName}
                                status={item.status}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SongList;