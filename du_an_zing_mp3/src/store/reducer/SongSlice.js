import {createSlice} from "@reduxjs/toolkit";
import {
    findAllByNameSinger,
    findAllSong,
    findSongById,
    // reverseNextSong,
    // transferNextSong
} from "../../service/SongService"
const initialState = {
    song: {},
    songs: [],
    songPlaying: []
}
const songSlice = createSlice({
    name:'songs',
    initialState,
    reducers:{},
    extraReducers: builder =>{

        builder.addCase(findSongById.fulfilled, (state, action) => {
            state.song = action.payload;
        })
        builder.addCase(findAllSong.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.songs = action.payload
        })
        builder.addCase(findAllByNameSinger.fulfilled, (state, action) =>{
            state.songs = action.payload
        })
        // builder.addCase(transferNextSong.fulfilled, (state, action) => {
        //     state.song = action.payload
        // });
        // builder.addCase(reverseNextSong.fulfilled, (state, action) => {
        //     state.song = action.payload
        // })
    }
})
export default songSlice.reducer;