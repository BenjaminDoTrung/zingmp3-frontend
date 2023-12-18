import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as apis from '../../apis'
import moment from 'moment'
import Lists from "../../components/Lists";
import {useDispatch} from "react-redux";
import * as actions from '../../store/actions'

const Album = () => {

    const { pid} = useParams()
    const [playlistData, setPlaylistData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.setCurAlbumId(pid))
        const fetchDetailPlaylist = async () =>{

            const response = await apis.apiGetDetailPlaylist(pid)
            if(response?.data.err ===0) {
                setPlaylistData(response.data?.data)
            }

        }
        fetchDetailPlaylist()
    },[pid]);
    return (
        <div className={'flex gap-8 w-full px-[59px]'}>
            <div className={'flex-none w-1/4 border border-red-500 flex flex-col gap-1'}>
                <img src={playlistData?.thumbnailM} alt='' className={'w-full object-contain rounded-md shadow-md '}/>

                <div className={'flex flex-col items-center gap-1'}>
                    <h3 className={'text-[20px] font-bold text-gray-800'}>{playlistData?.title}Title</h3>
                    <span className={'flex gap-2 items-center text-gray-500 text-xs'}>
                    <span>Update</span>
                        {/*<span>(moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY"</span>*/}
                </span>
                    <span className={'flex gap-2 items-center text-gray-500 text-xs'}>{playlistData?.artistName}artist</span>
                    <span className={'flex gap-2 items-center text-gray-500 text-xs '}>{playlistData?.like}like</span>
                </div>
            </div>
            <div className={'flex-auto border border-green-500'}>
                <span className={'text-sm'}>
                    <span className={'text-gray-600'}>Loi tua </span>
                    <span>{playlistData?.sortDescripton} Des</span>
                </span>

                    <Lists songs ={playlistData?.song.items} totalDuration ={playlistData.song.totalDuration}/>

            </div>
        </div>
    )

}
export  default Album