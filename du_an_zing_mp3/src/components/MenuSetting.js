import React from 'react';
import {AiOutlinePlayCircle} from "react-icons/ai";
import {GrCircleInformation} from "react-icons/gr";
import {VscSymbolInterface} from "react-icons/vsc";
import {LiaAddressBook} from "react-icons/lia";
import {GoArrowUpRight} from "react-icons/go";
import {IoShieldCheckmarkOutline} from "react-icons/io5";
import {PiFlag} from "react-icons/pi";
import {CiStopSign1} from "react-icons/ci";
import {FiPhone} from "react-icons/fi";
import {SlArrowRight} from "react-icons/sl";


const MenuSetting = props => {
    return (
        <>
            <div className="menu_setting">
                <ul className="form_menu">
                    <li>
                        <div className="icon">
                            <AiOutlinePlayCircle />
                        </div>
                        <div className="content">
                            Trình phát nhạc
                        </div>
                        <div className="icon">
                            <SlArrowRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <VscSymbolInterface />
                        </div>
                        <div className="content">
                            Giao diện
                        </div>
                        <div className="icon">
                            <SlArrowRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <GrCircleInformation />
                        </div>
                        <div className="content">
                            Giới thiệu
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <LiaAddressBook />
                        </div>
                        <div className="content">
                            Tỏa thuận sử dụng
                        </div>
                        <div className="icon">
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <IoShieldCheckmarkOutline />
                        </div>
                        <div className="content">
                            Chính sách bảo mật
                        </div>
                        <div className="icon">
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <PiFlag />
                        </div>
                        <div className="content">
                            Báo cáo vi phạm bản quyền
                        </div>
                        <div className="icon">
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <CiStopSign1 />
                        </div>
                        <div className="content">
                            Quảng cáo
                        </div>
                        <div className="icon">
                            <GoArrowUpRight />
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <FiPhone />
                        </div>
                        <div className="content">
                            Liên hệ
                        </div>
                        <div className="icon">
                            <GoArrowUpRight />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MenuSetting;