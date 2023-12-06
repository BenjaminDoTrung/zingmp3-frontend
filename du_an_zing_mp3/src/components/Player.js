import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import *as apis from '../apis'



const Player = () => {

    const {curSongId} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)

    useEffect(() => {
        const fetchDetailSong = async () => {
            const response = await apis.apiGetSong(curSongId)
            console.log(response)
            if(response.data.err === 0){
                setSongInfo(response.data.data)
            }

        }
        fetchDetailSong()

    }, [curSongId]);

    return (
        <div className={'bg-main-400 px-5 h-full flex' }>
            <div className={'w-[30%] flex-auto border border-red-500 flex items-center'}>
                <img src={songInfo?.thumbnail} alt="thumbnail" className='w-16 h-16 object-cover rounded-md' />
            </div>
            <div className={'w-[40%] flex-auto'}>
                Main Player
            </div>
            <div className={'w-[30%] flex-auto'}>
                Volume
            </div>
        </div>
    )
 }
 export default Player