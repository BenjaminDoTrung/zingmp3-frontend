import React from 'react';
import "../css_component/MenuLogoutCSS.css"
import {CiSettings} from "react-icons/ci";
import {TbPasswordUser} from "react-icons/tb";
import {HiOutlinePlus} from "react-icons/hi";
import {AiOutlineLogout} from "react-icons/ai";
const MenuLogOut = () => {
    return (
        <>
            <div className="menu-logout">
                <ul>
                    <li>
                        <div className="use-icon">
                            <CiSettings style={{width:20, height:20}} />
                        </div>
                        <div className="use-content">
                            Sửa thông tin
                        </div>
                    </li>
                    <li>
                        <div className="use-icon">
                            <TbPasswordUser style={{width:20, height:20}} />
                        </div>
                        <div className="use-content">
                            Lấy lại mật khẩu
                        </div>
                    </li>
                    <li>
                        <div className="use-icon">
                            <HiOutlinePlus style={{width:20, height:20}} />
                        </div>
                        <div className="use-content">
                            Thêm bài hát
                        </div>
                    </li>
                    <li>
                        <div className="use-icon">
                            <AiOutlineLogout style={{width:20, height:20}}/>
                        </div>
                        <div className="use-content">
                            LogOut
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MenuLogOut;