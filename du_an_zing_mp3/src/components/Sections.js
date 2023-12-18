import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Sections = ({data}) => {
    const navigate = useNavigate()



    return (
        <div className={'mt-12 px-[59px] flex flex-col gap-5'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-[20px] font-bold'}>{data?.title}</h3>
                <span className={'text-xs'}>TẤT CẢ</span>
            </div>
            <div className={'flex items-start justify-between gap-[28px]'}>
                {data && data?.items?.length > 0 && data.items.filter((item, index) => index <= 4).map(item =>(
                    <div
                        key={item.encodeId}
                        onClick={() =>{

                            navigate(item?.link?.split('.')[0])
                        }}
                        className={'flex flex-col gap-3 flex-auto justify-start w-1/5 text-sm'}
                    >
                        <img src={item.thumbnailM} alt='' className={'w-full h-auto   object-contain rounded-lg'}/>
                        <span className={'flex flex-col'}>
                            <span className={'font-semibold'}>{item.title}</span>
                            <span>{`${item.sortDescription?.slice(0, 40)}...`}</span>
                        </span>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sections
