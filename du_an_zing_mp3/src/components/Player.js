
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import *as apis from '../apis'
import {CiHeart, CiShuffle} from "react-icons/ci";
import {IoMdSkipBackward} from "react-icons/io";
import {MdSkipNext} from "react-icons/md";
import {IoRepeatOutline} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";
import {FaPause, FaPlay} from "react-icons/fa";
import {RiPlayListLine} from "react-icons/ri";
import * as actions from "../store/actions";
import RightSidebar from "./RightSidebar";
import axios from "axios";
import ReactPlayer from "react-player";



const Player = ({setIsShowRightSidebar}) => {
    const audio = new Audio()
    const {curSongId, isPlaying} = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [check , setCheck] = useState(false)
    const [source, setSource] = useState(null)
    const dispatch = useDispatch
    const [isPlayer, setIsPlayer] = useState(false);
    let [img, setImg] = useState('')

    useEffect(() => {
        // dispatch(actions.play(true))
        // audio.src = source
        // audio.load()
        // audio.play()
    }, [curSongId]);

    useEffect(() => {
        try {
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
            fetchDetailSong();
        } catch (e) {
            console.log('Exception in Player', e);
        }

    }, [curSongId]);
    const handlePlayMusic = () => {
        if (isPlaying){
            audio.pause()
            dispatch(actions.play(false))
        }else {
            audio.play()
            dispatch(actions.play(true))

        }

    }
    let [state, setState] = useState({
        url: null,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    })
    useEffect(() => {
        axios.get("http://localhost:8080/songs/" + 15).then((res)=>{
            state.url = res.data.file_song;
            setImg(res.data.url_img);
        })
    }, []);
    const handlePlay = () => {
        console.log('onPlay')
        // this.setState({ playing: true })
        state.playing = true;
    }
    const handleEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({ pip: true })
    }
    const handleDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({ pip: false })
    }
    const handlePause = () => {
        console.log('onPause')
        // this.setState({ playing: false })
        state.playing = false;
    }
    const handleOnPlaybackRateChange = (speed) => {
        this.setState({ playbackRate: parseFloat(speed) })
        // state.playbackRate = parseFloat(speed);
    }
    const handleEnded = () => {
        console.log('onEnded')
        // this.setState({ playing: this.state.loop })
        state.playing = state.loop
    }
    const handleProgress = states => {
        console.log('onProgress', states)
        // We only want to update time slider if we are not currently seeking
        if (!states.seeking) {
            this.setState(states)
        }
    }
    const handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    const handleSeekMouseDown = e => {
        this.setState({ seeking: true })
    }

    const handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }

    const handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    return (
        <div className={'bg-main-400 px-5 h-full flex py-2' }>
            <div className={'w-[30%] flex-auto  flex items-center'}>
                <img src={img ==='' ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    : img
                } alt="" className='w-16 h-16 object-cover rounded-md' />
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
            <div className={'w-[40%] flex-auto flex items-center justify-center flex-col'}>
                <div className={'gap-8 flex items-center justify-center'}>
                    <span className={'cursor-pointer'}><CiShuffle size={20}/></span>
                    <span className={'cursor-pointer'}><IoMdSkipBackward size={18}/></span>
                    <span onClick={() => {
                        setCheck(!check)
                        {
                            check ? handlePause() : handlePlay()
                        }
                    }}
                          className={'p-2 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'}
                    >
                                    {check ? <FaPause size={25}/> : <FaPlay size={25}/>}
                                 </span>
                    <span className={'cursor-pointer'}><MdSkipNext size={24}/></span>
                    <span className={'cursor-pointer'}><IoRepeatOutline size={24}/></span>
                </div>
                <ReactPlayer id="songt"
                             className='react-player hidden'
                             width='100%'
                             height='100%'
                             url= {state.url}
                             pip={state.pip}
                             playing={state.playing}
                             controls={state.controls}
                             light={state.light}
                             loop={state.loop}
                             playbackRate={state.playbackRate}
                             volume={state.volume}
                             muted={state.muted}
                             onReady={() => console.log('onReady')}
                             onStart={() => console.log('onStart')}
                             onPlay={handlePlay}
                             onEnablePIP={handleEnablePIP}
                             onDisablePIP={handleDisablePIP}
                             onPause={handlePause}
                             onBuffer={() => console.log('onBuffer')}
                             onPlaybackRateChange={handleOnPlaybackRateChange}
                             onSeek={e => console.log('onSeek', e)}
                             onEnded={handleEnded}
                             onError={e => console.log('onError', e)}
                             // onProgress={handleProgress}
                             // onDuration={handleDuration}
                             onPlaybackQualityChange={e => console.log('onPlaybackQualityChange', e)}
                ></ReactPlayer>
                <div>
                    {/*progress barr*/}
                </div>
            </div>

                <div className={'w-[30%] flex-auto flex items-center justify-end gap-4'}>
                    <input type={"range"} step={1} min={0} max={100}/>
                    <RightSidebar/>
                </div>
            </div>

            )

 }
 export default Player

