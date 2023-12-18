import {Outlet} from "react-router-dom";

import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import Player from "../../components/Player";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Header from "../../components/Header";
import {useState} from "react";


const Public = () => {
    const [isShowRightSidebar, setIsShowRightSidebar] = useState(true)
    return (
        <div className='w-full relative h-screen flex flex-col bg-main-300'>
            <div className='w-full h-full flex flex-auto'>
                <div className='w-[240px] h-full flex-none border border-blue-500'>
                    <SidebarLeft />
                </div>
                <div className='flex-auto flex flex-column border border-blue-500'>
                    <div className={'h-[70px] flex-none px-[59px] flex items-center '}>
                        <Header/>
                    </div >
                    <div className={'flex-auto w-full'}>
                        <Scrollbars autoHide style={{width:'100%', height:'100%'}}>
                            <Outlet />
                        </Scrollbars>
                    </div>

                </div>
                {isShowRightSidebar && <div className='w-[329px] hidden 1600:flex flex-none border border-green-500 animate-slide-left '>
                    <SidebarRight />
                </div>}
            </div>
            <div className='fixed bottom-0 left-0 right-0 h-[90px]'>
                <Player setIsShowRightSidebar={setIsShowRightSidebar}/>
            </div>
        </div>
    )
}
export default Public