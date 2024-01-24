import { useDispatch } from "react-redux";
import { MyButton , DivItem , MySelect } from "./style";
import { addAllPlayAction } from "../../redux/slices/SongSlice/SongSlice";
const PlayAllButton = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log('Play All!');
        dispatch(addAllPlayAction());
    }
    return(
       <DivItem>
            <MyButton onClick={()=>handleClick()}>
                <img src="/icons/play.png"/>
                Play All
            </MyButton>
            <MySelect></MySelect>
        </DivItem>
    )
}
export default PlayAllButton;