import banner1 from "../accsets/banner-1.jpg";
import banner2 from "../accsets/banner-2.jpg";
import banner3 from "../accsets/banner-3.jpg";
import {useNavigate} from "react-router-dom";
import ban1 from "../accsets/BannerAlbumHot/banner-album-hot-nhac-edm.jpg"
import ban2 from "../accsets/BannerAlbumHot/banner-album-hot-nhac-han.jpg"
import ban3 from "../accsets/BannerAlbumHot/banner-album-hot-nhac-pop-au-my.jpg"
import ban4 from "../accsets/BannerAlbumHot/banner-album-hot-nhac-tre.jpg"
import ban5 from "../accsets/BannerAlbumHot//banner-album-hot-rap-viet.jpg"

const Chill = () => {
    const navigate = useNavigate()
    return (
        <div className={'mt-12 px-[59px] flex flex-col gap-5'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-[20px] font-bold text-white'}>List nhạc chill cuối tuần</h3>
                <span className={'text-xs text-white'}>TẤT CẢ</span>
            </div>
            <div className={'flex items-start justify-between gap-[50px]'}>
                <div className={'flex gap-2 flex-auto text-sm justify-between'}>
                   <div
                       onClick={() => {
                           navigate('/album/'+1)
                       }}
                       className={'flex flex-col items-center'}>
                       <img src={ban1} alt="" className={'w-[250px] h-[250px] object-contain rounded-lg cursor-pointer'}/>
                       <span className={'font-bold text-white'}>Tittle</span>
                       <span className={' text-white'}>Description</span>
                   </div>
                    <div
                        onClick={() => {
                            navigate('/album/'+1)
                        }}
                        className={'flex flex-col items-center'}>
                        <img src={ban2} alt="" className={'w-[250px] h-[250px] object-contain rounded-lg cursor-pointer'}/>
                        <span className={'font-bold text-white '}>Tittle</span>
                        <span className={' text-white'}>Description</span>
                    </div>
                    <div
                        onClick={() => {
                            navigate('/album/'+1)
                        }}
                        className={'flex flex-col items-center'}>
                        <img src={ban3} alt="" className={'w-[250px] h-[250px] object-contain rounded-lg cursor-pointer'}/>
                        <span className={'font-bold text-white'}>Tittle</span>
                        <span className={' text-white'}>Description</span>
                    </div>
                    <div
                        onClick={() => {
                            navigate('/album/'+1)
                        }}
                        className={'flex flex-col items-center'}>
                        <img src={ban4} alt="" className={'w-[250px] h-[250px] object-contain rounded-lg cursor-pointer'}/>
                        <span className={'font-bold text-white'}>Tittle</span>
                        <span className={' text-white'}>Description</span>
                    </div>
                    <div
                        onClick={() => {
                            navigate('/album/'+1)
                        }}
                        className={'flex flex-col items-center'}>
                        <img src={ban5} alt="" className={'w-[250px] h-[250px] object-cover rounded-lg cursor-pointer'}/>
                        <span className={'font-bold text-white '}>Tittle</span>
                        <span className={' text-white'}>Description</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chill