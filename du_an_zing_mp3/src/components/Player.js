
import {useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import *as apis from '../apis'
import icons from '../untis/icons'

const {CiHeart,FaHeart,HiOutlineDotsHorizontal,MdSkipNext,IoMdSkipBackward,CiShuffle, IoIosPlay, MdPause,IoRepeatOutline} = icons

const Player = () => {

    const {curSongId} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    const [isPlaying, setPlaying] = useState(false)

    useEffect(() => {
        const fetchDetailSong = async () => {
            const response = await apis.apiGetDetailSong()

            if(response.data.err === 0){
                setSongInfo(response.data.data)
            }

        }
        fetchDetailSong()

    }, [curSongId]);

    return (

        <div className={'bg-main-400 px-5 h-full flex ' }>
            <div className={'w-[30%] flex-auto gap-4  flex items-center '}>
                <img src={songInfo?.thumbnail} alt="" className='w-16 h-16 object-cover rounded-md'/>
                <div className={'flex flex-col gap-2'}>
                    <span className={'font-semibold text-gray-700 text-sm'}>{songInfo?.title}</span>
                    <span className={'text-xs text-gray-500'}>{songInfo?.artistname}artistname</span>
                </div>
                <div className={'flex gap-4 pl-2'}>
                    <span >
                        <CiHeart size={16}/>
                    </span>
                    <span>
                        <HiOutlineDotsHorizontal size={16}/>
                    </span>
                </div>
            </div>
            <div className={'w-[40%] flex-auto flex items-center justify-center flex-col gap-4 border border-red-500 py-2'}>
                <div className={'gap-8 flex items-center justify-center'}>
                    <span className={'cursor-pointer'}><CiShuffle size={20}/></span>
                    <span className={'cursor-pointer'}><IoMdSkipBackward size={18}/></span>
                    <span className={'p-2 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'}></span>
                       {isPlaying }
                    <span className={'cursor-pointer'}><MdSkipNext size={24}/></span>
                    <span className={'cursor-pointer'}><IoRepeatOutline size={24}/></span>
                </div>
                <div>
                    progress barr
                </div>
            </div>
            <div className={'w-[30%] flex-auto border border-red-500'}>
                Volume
            </div>
        </div>
    )
 }
 export default Player;

