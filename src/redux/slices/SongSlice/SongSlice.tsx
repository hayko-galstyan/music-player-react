import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { state } from "./state";
import { SongDataInterface } from "../../../types";

const initialState : SongDataInterface = state;

const SongSlice = createSlice({
    name: 'SongSlice',
    initialState: initialState,
    reducers: {
        addAllPlayAction: (state) => {
            state.songs.forEach((el) => {
                el.status = 'play';
            });
        },
        addNewSongAction:(state,action)=> {
            let data = [...state.songs];
            data.push(action.payload);
            return {
                songs:data
            }
        },
        searchSongAction:(state,action)=> {
            let data = [...state.songs];
            data = data.filter((a)=>a.songName.includes(action.payload));
            return {
                songs:data
            }
        },
        playMusicWithIdAction:(state,action) => {
            let data = [...state.songs]
            let index = data.findIndex(a=>a.id === action.payload);
            let status = data[index].status;
            status = status == 'pause' ?  'play' : 'pause'
            data[index].status = status;
        }
    }
});

export const getSongs = (state: RootState) => state.songsSlice.songs;
export const { addAllPlayAction , addNewSongAction , searchSongAction , playMusicWithIdAction } = SongSlice.actions;
export default SongSlice.reducer;
