import { useDispatch } from "react-redux";
import { SongInterface } from "../../types";
import { Action, Icon,Row } from "./style";
import { playMusicWithIdAction } from "../../redux/slices/SongSlice/SongSlice";
const SongRow:React.FC<SongInterface> =({id,songName,artistName,trackNumber,status}) => {
    const dispatch = useDispatch();
    const imagePath = status == 'pause' ? 'pause.png' : 'play.png'
    const playMusic = (index:number) => {
        dispatch(playMusicWithIdAction(index));
    }
    return(
        <Row>
            <div>
                <Action onClick={(e)=>playMusic(id)}>
                    <img src={`/icons/${imagePath}`} alt={status} />
                </Action>
            </div>
            <div>{songName}</div>
            <div>{artistName}</div>
            <div>{trackNumber}</div>
            <div>
                <Icon>
                    <img src="/icons/heart.png"/>
                </Icon>
                <Icon>
                    <img src="/icons/ok.png"/>
                </Icon>
                <Icon>
                    <img src="/icons/share.png"/>
                </Icon>
                <Icon>
                    <img src="/icons/arrow-down.png"/>
                </Icon>
            </div>
        </Row>
    )
}
export default SongRow;