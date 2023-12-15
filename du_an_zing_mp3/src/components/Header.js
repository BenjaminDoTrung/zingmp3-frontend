import icons from "../untis/icons";
import Search from "./Search";
import {Link, useNavigate} from "react-router-dom";
import user from '../accsets/user.png'
import {CiSettings} from "react-icons/ci";
import MenuLogin from "./MenuLogin";
import "../css_component/menuSetting.css"
import MenuSetting from "./MenuSetting";
import {IoSettings} from "react-icons/io5";
import React, {useEffect, useState} from "react";
import findById from "../service/FindById";
import axios from "axios";
import MenuLogOut from "./MenuLogOut";
import MenuAdmin from "./MenuAdmin";

const {IoIosArrowRoundBack, IoIosArrowRoundForward, AiOutlineSearch} = icons
const Header = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem("idUser")
    let [user, setUser] = useState({})

        useEffect(() => {
            if (id !== null){
            axios.get('http://localhost:8080/users/' + id).then((res) => {
                setUser(res.data.id)
            })}
        }, [])


    const [check, setCheck] = useState(false)
    const [checkSetting, setChecksetting] = useState(false)

    const handleCheck = (isCheck) => {
        setCheck(isCheck);
    }

    if (localStorage.getItem("idUser") !== null) {
        if (localStorage.getItem("user") === "admin") {
            return (
                <div className={' flex justify-between w-full items-center border border-none'}
                     style={{zIndex: 100}}>
                    <div className={'flex gap-6 w-full items-center'}>
                        <div className={'flex text-gray-400 gap-4'}>
                            <span><IoIosArrowRoundBack size={24}/></span>
                            <span><IoIosArrowRoundForward size={24}/></span>
                        </div>
                        <div className={'w-1/2'}>
                            <Search/>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="dev_setting">
                            <button onClick={() => {
                                setChecksetting(!checkSetting)

                                setCheck(false)

                            }}>
                                <CiSettings style={{width: 40, height: 40, marginTop: 5}}/>
                            </button>
                        </div>
                        <div className="dev_logout">
                            <button onClick={() =>{
                                setCheck(!check)
                                setChecksetting(false);
                            }

                            }>
                                <img src={user.url_img} style={{
                                    width: 40,
                                    height: 40,
                                    marginTop: 5,
                                    marginLeft: 2,
                                    marginRight: 30,
                                    borderRadius: 20
                                }}/>
                            </button>
                        </div>
                    </div>
                    <div className="form_menu" >
                        <div style={{marginTop: "-91px" , position : 'absolute' , marginLeft: '-23.5%' ,height :'0px'}}>  {checkSetting ? <MenuSetting></MenuSetting> : ""}</div>
                        <div style={{marginTop: "149px" , position : 'absolute' , marginLeft: '-14%' ,height :'0px'}}> {check ? <MenuAdmin></MenuAdmin> : <></>}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <div className={' flex justify-between w-full items-center'}
                         style={{zIndex: 100}}>
                        <div className={'flex gap-6 w-full items-center'}>
                            <div className={'flex text-gray-400 gap-4'}>
                                <span><IoIosArrowRoundBack size={24}/></span>
                                <span><IoIosArrowRoundForward size={24}/></span>
                            </div>
                            <div className={'w-1/2'}>
                                <Search/>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div className="dev_setting">
                                <button onClick={() => {
                                    setChecksetting(!checkSetting)

                                        setCheck(false)

                                }}>
                                    <CiSettings style={{width: 40, height: 40, marginTop: 5}}/>
                                </button>
                            </div>
                            <div className="dev_logout">
                                <button onClick={() =>{
                                    setCheck(!check)
                                    setChecksetting(false);
                                }

                                }>
                                    <img src={user.url_img} style={{
                                        width: 40,
                                        height: 40,
                                        marginTop: 5,
                                        marginLeft: 2,
                                        marginRight: 30,
                                        borderRadius: 20
                                    }}/>
                                </button>
                            </div>
                        </div>
                        <div className="form_menu" >
                            <div style={{marginTop: "-91px" , position : 'absolute' , marginLeft: '-23.5%' ,height :'0px'}}>  {checkSetting ? <MenuSetting></MenuSetting> : ""}</div>
                            <div style={{marginTop: "149px" , position : 'absolute' , marginLeft: '-14%' ,height :'0px'}}> {check ? <MenuLogOut></MenuLogOut> : <></>}</div>
                        </div>
                    </div>
                </>
            )
        }
    } else {
        return (
            <div className={' flex justify-between w-full items-center border-none'} style={{zIndex: 100}}>
                <div className={'flex gap-6 w-full items-center'}>
                    <div className={'flex text-gray-400 gap-4'}>
                        <span><IoIosArrowRoundBack size={24}/></span>
                        <span><IoIosArrowRoundForward size={24}/></span>
                    </div>
                    <div className={'w-1/2'}>
                        <Search/>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="dev_setting">
                        <button onClick={() => {
                            setChecksetting(!checkSetting)
                            setCheck(false)

                        }}>
                            <CiSettings style={{width: 40, height: 40, marginTop: 5}}/>
                        </button>
                    </div>
                    <div className="dev_logout">
                        <button onClick={() =>{
                            setCheck(!check)
                            setChecksetting(false);
                        }

                        }>
                            <img src={user.url_img} style={{
                                width: 40,
                                height: 40,
                                marginTop: 5,
                                marginLeft: 2,
                                marginRight: 30,
                                borderRadius: 20
                            }}/>
                        </button>
                    </div>
                </div>
                <div className="form_menu" >
                    <div style={{marginTop: "-91px" , position : 'absolute' , marginLeft: '-23.5%' ,height :'0px'}}>  {checkSetting ? <MenuSetting></MenuSetting> : ""}</div>
                    <div style={{marginTop: "19px" , position : 'absolute' , marginLeft: '-17%' ,height :'0px'}}> {check ? <MenuLogin handler={handleCheck}></MenuLogin> : <></>}</div>
                </div>
            </div>
        )
    }
}

export default Header
