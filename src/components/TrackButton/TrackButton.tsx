import { MyButton,MySelect,DivItem } from "./style";
const TrackButton = () => {
    const handleClick = () => {
        console.log('Tracked!');
    }
    return(
        <DivItem>
            <MyButton onClick={()=>handleClick()}>
                <img src="/icons/track.png"/>
                Track
            </MyButton>
            <MySelect></MySelect>
        </DivItem>
    )
}
export default TrackButton;