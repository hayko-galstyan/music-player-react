import SongSlice from "./slices/SongSlice/SongSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        songsSlice:SongSlice
    }
})

export type RootState = ReturnType<typeof store.getState>