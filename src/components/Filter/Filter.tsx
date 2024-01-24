import { useDispatch } from "react-redux";
import { Div, MyInput } from "./style";
import { ChangeEvent, useState } from "react";
import { searchSongAction } from "../../redux/slices/SongSlice/SongSlice";

const Filter = () => {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch();

    const searchSong = (e: ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;
        setText(searchText);
        dispatch(searchSongAction(searchText));
    }

    return (
        <Div>
            <img src="/icons/search.png" alt="Search icon" />
            <MyInput
                type="text"
                placeholder="Filter"
                value={text}
                onChange={searchSong}
            />
        </Div>
    );
}

export default Filter;
