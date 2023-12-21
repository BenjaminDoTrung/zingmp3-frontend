import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const findSongById = createAsyncThunk(
    'songs/findSongById',
    async (id) => {
        const res = await axios.get('http://localhost:8080/songs/' + id);
        return res.data
    }
)
export const findAllSong = createAsyncThunk(
    'songs/findAllSong',
    async () => {
        const res = await axios.get('http://localhost:8080/songs');
        console.log("data 5: ", res.data)
        return res.data
    }
)