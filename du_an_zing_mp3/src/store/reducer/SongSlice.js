import {createSlice} from "@reduxjs/toolkit";
import {findAllSong, findSongById} from "../../service/SongService"
const initialState = {
    song: {},
    songs: []
}
const songSlice = createSlice({
    name:'songs',
    initialState,
    reducers:{},
    extraReducers: builder =>{
        console.log("buidel: ",builder)
        builder.addCase(findSongById.fulfilled, (state, action) => {
            state.song = action.payload;
        })
        builder.addCase(findAllSong.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.songs = action.payload
        })
    }
})
export default songSlice.reducer;