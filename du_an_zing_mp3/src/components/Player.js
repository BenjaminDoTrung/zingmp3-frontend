
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import *as apis from '../apis'
import {CiHeart, CiShuffle} from "react-icons/ci";
import {IoMdSkipBackward} from "react-icons/io";
import {MdSkipNext} from "react-icons/md";
import {IoRepeatOutline} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";
import {FaPause, FaPlay} from "react-icons/fa";
import {RiPlayListLine} from "react-icons/ri";




const Player = ({setIsShowRightSidebar}) => {
    const audio = new Audio()
    const {curSongId, isPlaying} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    // const [isPlaying , setPlaying] = useState(false)
    const [source, setSource] = useState(null)

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
            }
            if (res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }
        fetchDetailSong()

    }, [curSongId]);

    useEffect(() => {

    }, [curSongId]);
    const handlePlayMusic = () => {

    }


    return (
        <div className={'bg-main-400 px-5 h-full flex py-2' }>
            <div className={'w-[30%] flex-auto  flex items-center'}>
                <img src={songInfo?.thumbnail} alt="" className='w-16 h-16 object-cover rounded-md' />
                <div className={'flex flex-col pl-2'}>
                    <span className={'font-semibold text-gray-700 text-sm'}>songInfo</span>
                    <span className={'text-xs text-gray-500'}>artistName</span>
                </div>
                <div className={'flex gap-4 pl-4'}>
                    <span>
                        <CiHeart size={16}/>
                    </span>
                    <span>
                        <BsThreeDots size={16}/>
                    </span>

                </div>
            </div>
            <div className={'w-[40%] flex-auto flex items-center justify-center flex-col gap-4  py-2'}>
                <div className={'gap-8 flex items-center justify-center'}>
                    <span className={'cursor-pointer'}><CiShuffle size={20}/></span>
                    <span className={'cursor-pointer'}><IoMdSkipBackward size={18}/></span>
                    <span className={'p-2 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'}
                          onClick={handlePlayMusic}
                    >
                        {isPlaying ? <FaPause size={25}/> :<FaPlay size={25}/>}
                    </span>
                    <span className={'cursor-pointer'}><MdSkipNext size={24}/></span>
                    <span className={'cursor-pointer'}><IoRepeatOutline size={24}/></span>
                </div>
                <div>
                    progress barr
                </div>
            </div>

                <div className={'w-[30%] flex-auto flex items-center justify-end gap-4'}>
                    <input type={"range"} step={1} min={0} max={100}/>
                    <span onClick={() => setIsShowRightSidebar(prev => !prev)} className={'p-1 rounded-sm cursor-pointer bg-main-500 opacity-90 hover:opacity-100'}><RiPlayListLine size={20}/></span>
                </div>
            </div>

            )

 }
 export default Player

