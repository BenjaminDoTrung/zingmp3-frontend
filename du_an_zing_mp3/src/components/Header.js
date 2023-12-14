import icons from "../untis/icons";
import Search from "./Search";
import {Link, useNavigate} from "react-router-dom";
import user from '../accsets/user.png'
import {CiSettings} from "react-icons/ci";
import MenuLogin from "./MenuLogin";
import "../css_component/menuSetting.css"
import MenuSetting from "./MenuSetting";
import {IoSettings} from "react-icons/io5";
import React from "react";

const {IoIosArrowRoundBack, IoIosArrowRoundForward, AiOutlineSearch} = icons
const Header = () => {
    const navigate = useNavigate()

    function logOut() {
        localStorage.clear()
        navigate("/login")
    }

    if (localStorage.getItem("idUser") !== null) {
        if (localStorage.getItem("user") === "admin") {
            return (
                <div className={' flex justify-between w-full items-center border border-none'}>
                    <div className={'flex gap-6 w-full items-center'}>
                        <div className={'flex text-gray-400 gap-4'}>
                            <span><IoIosArrowRoundBack size={24}/></span>
                            <span><IoIosArrowRoundForward size={24}/></span>
                        </div>
                        <div className={'w-1/2'}>
                            <Search/>
                        </div>
                    </div>
                    <button onClick={logOut}>Logout</button>
                    <button><Link to={'/userList'} type={"button"} className={"btn btn-default"}
                                  data-dismiss={"modal"} value={"Cancel"}> List User</Link></button>

                </div>
            )
        } else {
            return (
                <div className={' flex justify-between w-full items-center border border-none'}>
                    <div className={'flex gap-6 w-full items-center'}>
                        <div className={'flex text-gray-400 gap-4'}>
                            <span><IoIosArrowRoundBack size={24}/></span>
                            <span><IoIosArrowRoundForward size={24}/></span>
                        </div>
                        <div className={'w-1/2'}>
                            <Search/>
                        </div>
                    </div>
                    <button onClick={logOut}>Logout</button>
                    <button><Link to={'/updateProfile'} type={"button"} className={"btn btn-default"}
                                  data-dismiss={"modal"} value={"Cancel"}> Update Profile</Link></button>
                    <button><Link to={'/updatePassword'} type={"button"} className={"btn btn-default"}
                                  data-dismiss={"modal"} value={"Cancel"}> Update Password</Link></button>
                </div>)
        }
    } else {
        return (
            <div className={' flex justify-between w-full items-center border-none'}>
                <div className={'flex gap-6 w-full items-center'}>
                    <div className={'flex text-gray-400 gap-4'}>
                        <span><IoIosArrowRoundBack size={24}/></span>
                        <span><IoIosArrowRoundForward size={24}/></span>
                    </div>
                    <div className={'w-1/2'}>
                        <Search/>
                    </div>
                </div>
                <button>
                    <IoSettings size={32}/>
                </button>
                {/*<button*/}
                {/*    onClick={()=>{navigate("/login")}}><img src={user} alt='' className={'w-[34px] h-[34px]'}/>*/}
                {/*</button>*/}
                <div>
                    <div class="btn-group">
                        <button type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <img src={user} alt='' className={'w-[34px] h-[34px]'}/>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Đăng nhập</a></li>
                            <li><div className="menuLogin_content">
                                Đăng ký gói
                            </div>
                                <div className="voucher1">
                                    <h2>
                                        ZingMP3
                                    </h2>
                                    <h3>
                                        Chỉ từ 11.000 đ/tháng
                                    </h3>
                                    <h3>
                                        Nghe nhạc với chất lượng cao nhất, không quảng cáo
                                    </h3>
                                    <a>Tìm hiểu thêm</a>
                                </div></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Header