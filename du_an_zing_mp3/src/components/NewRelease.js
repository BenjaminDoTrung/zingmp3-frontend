import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SongItem} from "./index";

const NewRelease = () => {
    const {latest} = useSelector(state => state.app)
    const [isActive, setisActive] = useState(0)
    const [songs, setSongs] = useState([])

    useEffect(() => {
        console.log('latest', latest);
        setSongs(latest);
    }, [isActive, latest]);
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold'>Mới phát hành</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div className='flex items-center gap-5 text-xs' >
                <button
                    onClick={() =>{
                        setisActive(0)
                    }}
                    type={'button'}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 0 && 'bg-[#0E8080] text-white'}`}
                >
                    VIỆT NAM


                </button>
                <button
                    onClick={() =>{
                        setisActive(1)
                    }}
                    type={'button'}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 1 && 'bg-main-500 text-white'}`}
                >
                    QUỐC TẾ

                </button>
            </div>
            <div className={'flex flex-wrap w-full '}>
                {songs?.map(item => (
                    <SongItem key = {item.id}
                    key = {item.id}
                    thumbnail={item.url_img}
                    title={item.nameSong}
                    artists={item.singer}
                    releaseDate={new Date()}
                    />
                ))}
            </div>
        </div>
    )
}
export default NewRelease
