import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {SongItem} from "./index";

const NewRelease = () => {
    const {newRelease} = useSelector(state => state.app)
    const [isActive, setisActive] = useState(0)
    const [songs, setSongs] = useState([])

    useEffect(() => {
        isActive ? setSongs(newRelease.items?.others) : setSongs(newRelease?.items?.vPop)
    }, [isActive, newRelease]);
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold'>{newRelease?.title}</h3>
                <span className='text-xs'>TAT CA</span>
            </div>
            <div className='flex items-center gap-5 text-xs' >
                <button
                    onClick={() =>{
                        setisActive(0)
                    }}
                    type={'button'}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 0 && 'bg-[#0E8080] text-white'}`}
                >
                    VIET NAM


                </button>
                <button
                    onClick={() =>{
                        setisActive(1)
                    }}
                    type={'button'}
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${isActive === 1 && 'bg-main-500 text-white'}`}
                >
                    QUOC TE

                </button>
            </div>
            <div className={'flex flex-wrap w-full '}>
                {songs?.map(item => (
                    <SongItem key = {item.encodeId}
                    key = {item.encodeId}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    artists={item.artistsNames}
                    releaseDate={item.releaseDate}
                    />
                ))}


            </div>
        </div>
    )
}
export default NewRelease
