import moment from "moment";
import 'moment/locale/vi'
import {useNavigate} from "react-router-dom";
const SongItem = ({thumbnail, title, artists, sid, releaseDate, order, percent, style, sm}) => {
    const navigate = useNavigate();
    return (
        <div

            className={'w-[30%] flex-auto flex  p-[10px] gap-10 hover:bg-main-200 rounded-md cursor-pointer'}>
            <img
                onClick={()=>{
                    navigate("/detailSong/"+ sid)
                }}
                src={thumbnail} alt='' className={`${sm ? 'w-[40px] h-[40px]' : 'w-[60px] h-[60px]'}object-cover rounded-md`}/>
            <div className={'flex flex-col'}>
                <span className={'text-sm font-semibold'}>{title}</span>
                <span className={'text-xs text-gray-400'}>{artists}</span>
                <span className={'text-xs text-gray-700'}>{moment(releaseDate * 1000).fromNow()}</span>
            </div>
        </div>
    )
}
export default SongItem