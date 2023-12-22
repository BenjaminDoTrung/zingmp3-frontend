import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useState} from "react";

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
export const findAllByNameSinger = createAsyncThunk(
    'songs/findAllByNameSinger',
    async (nameSinger) =>{
        const res = await axios.get('http://localhost:8080/songs/findAllByNameSinger/' + nameSinger);
        return res.data
    }
)

// export const transferNextSong = createAsyncThunk(
//     'songs/transferNextSong',
//     async (index) => {
//         const res = await function () {
//             const [listSong, setListSong] = useState([]);
//             axios.get("http://localhost:8080/songs").then((res) => {
//                 setListSong(res.data)
//             })
//             if (index < listSong.length){
//                 index++;
//                 return listSong[index]
//             }
//         }
//     }
// )
// export const reverseNextSong = createAsyncThunk(
//     'songs/reverseNextSong',
//     async (index) => {
//         console.log("iii", index)
//         const res = await function () {
//             const [listSong, setListSong] = useState([]);
//             const [songs, setSongs] = useState({})
//             console.log("idex", index)
//             axios.get("http://localhost:8080/songs").then((res) => {
//                 setListSong(res.data)
//             })
//             if (index < listSong.length && index > 0){
//                 index--;
//                 setSongs(listSong[index])
//             }
//             return res;
//         }
//     }
// )