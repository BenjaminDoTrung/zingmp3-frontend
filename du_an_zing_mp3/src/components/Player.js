
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import *as apis from '../apis'
import {IoMdSkipBackward} from "react-icons/io";
import {CiShuffle} from "react-icons/ci";
import {MdSkipNext} from "react-icons/md";
import {IoRepeatOutline} from "react-icons/io5";



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
            <div className={'w-[40%] flex-auto flex items-center justify-center flex-col gap-4 border border-red-500 py-2'}>
                <div className={'gap-8 flex items-center justify-center'}>
                    <span className={'cursor-pointer'}><CiShuffle size={20}/></span>
                    <span className={'cursor-pointer'}><IoMdSkipBackward size={18}/></span>
                    <span className={'p-2 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'}></span>
                    <span className={'cursor-pointer'}><MdSkipNext size={24}/></span>
                    <span className={'cursor-pointer'}><IoRepeatOutline size={24}/></span>
                </div>
                <div>
                    progress barr
                </div>
            <div className={'w-[40%] flex-auto'}>
                Main Player
            </div>
            <div className={'w-[30%] flex-auto'}>
                Volume
            </div>
        </div>
        </div>
    )
 }
 export default Player

