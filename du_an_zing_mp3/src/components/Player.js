import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CiHeart, CiShuffle} from "react-icons/ci";
import {IoMdSkipBackward} from "react-icons/io";
import {MdSkipNext} from "react-icons/md";
import {IoRepeatOutline} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";
import {FaPause, FaPlay} from "react-icons/fa";
import {RiPlayListLine} from "react-icons/ri";
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";
import axios from "../axios";
import {reverseNextSong, transferNextSong} from "../service/SongService";




const Player = (prop) => {
    let [isPlaying, setIsPlaying] = useState(false);
    const [indexSong, setIndexSong] = useState(3)
    const currentSong = useSelector((store) => {
        return store.songStore.song;
    })
    const [listSong, setListSong] = useState([])
    let [state, setState] = useState({
        url: currentSong?.file_song,
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
        url_img: currentSong?.url_img,
        seeking: false
    })
    useEffect(() => {
        axios.get("http://localhost:8080/songs").then((res)=>{
            setListSong(res.data);
        })
    }, []);

    useEffect(() => {
        console.log("crrent: ",currentSong)
        console.log("img:", state.url_img)
        setState({...state, url: currentSong.file_song, url_img: currentSong.url_img})
    }, [currentSong])
    const transferNextSong = () => {
        if (indexSong < listSong.length){
            setIndexSong(indexSong + 1)
            state.url = listSong[indexSong].file_song;
            state.url_img = listSong[indexSong].url_img
            setState({...state})
        }
    }
    const reverseNextSong = () => {
        if (indexSong < listSong.length){
            setIndexSong(indexSong - 1)
            state.url = listSong[indexSong].file_song;
            state.url_img = listSong[indexSong].url_img
            setState({...state})
        }
    }
    const handlePlay = () => {
        console.log('onPlay')
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
        setState({...state, seeking: true})
    }

    const handleSeekChange = e => {
        setState({...state, played: parseFloat(e.target.value)})
        console.log(state.played)
    }

    const handleSeekMouseUp = e => {
        setState({...state, seeking: false})
        setState({...state, played: parseFloat(e.target.value)})
        console.log(state.volume)
    }
    const ref = player => {
        this.player = player
    }

    return (
        <>
            <div className={'bg-main-400 px-5 h-full flex py-2'} id="playing">
                <div className={'w-[30%] flex-auto  flex items-center'}
                     style={{display: "flex", width: 446, height: 65, paddingTop: 7}}>
                    <img style={{width: 65, height: 65}}
                         src={state?.url_img == null ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                             : state?.url_img
                         }
                         className='w-16 h-16 object-cover rounded-md'/>
                    <div className={'flex flex-col pl-2'} style={{paddingLeft: 10}}>
                        <div className={'font-semibold text-gray-700 text-sm'}>songInfo</div>
                        <div className={'text-xs text-gray-500'}>artistName</div>
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
                <div style={{width: 595, height: 65, textAlign: "center"}}
                     className={'w-[40%] flex-auto flex items-center justify-center flex-col gap-4  py-2'}>
                    <div style={{paddingTop: 20}}
                         className={'gap-8 flex items-center justify-center'}>
                        <span className={'cursor-pointer'}><CiShuffle size={20}/></span>
                        <span className={'cursor-pointer'}><IoMdSkipBackward size={18} onClick={reverseNextSong}/></span>
                        <span onClick={() => {
                            setIsPlaying(!isPlaying)
                            {
                                isPlaying ? handlePause() : handlePlay()
                            }
                        }}
                              className={'p-2 border border-gray-700 rounded-full hover:text-main-500 cursor-pointer'}
                        >
                                    {isPlaying ? <FaPause size={25}/> : <FaPlay size={25}/>}
                                 </span>
                        <span className={'cursor-pointer'}><MdSkipNext size={24} onClick={transferNextSong} /></span>
                        <span className={'cursor-pointer'}><IoRepeatOutline size={24}/></span>
                    </div>
                    <ReactPlayer
                                 id="songt"
                                 className='react-player'
                                 width='100%'
                                 height='100%'
                                 url= {state?.url}
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
                </div>
                <div style={{width: 446, height: 65, paddingTop: 30}}
                     className={'w-[30%] flex-auto flex items-center justify-end gap-4'}>
                    <div style={{float: "right"}}>
                        <input type='range' min={0} max={2} step='any'
                               value={state.played}
                               onMouseDown={handleSeekMouseDown}
                               onChange={handleSeekChange}
                               onMouseUp={handleSeekMouseUp}/>
                        <span
                            className={'p-1 rounded-sm cursor-pointer bg-main-500 opacity-90 hover:opacity-100'}><RiPlayListLine
                            size={20}/></span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Player

