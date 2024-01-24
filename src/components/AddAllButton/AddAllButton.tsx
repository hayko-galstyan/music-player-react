import {MyButton,DivItem,MySelect} from './style';
const AddAllButton = () => {
    const handleClick = () => {
        console.log('Add All!');
    }
    return(
       <DivItem>
            <MyButton onClick={()=>handleClick()}>
                <img src="/icons/add.png"/>
                Add All
            </MyButton>
            <MySelect></MySelect>
        </DivItem>
    )
}
export default AddAllButton;