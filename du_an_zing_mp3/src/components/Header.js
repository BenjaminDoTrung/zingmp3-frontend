
import icons from "../untis/icons";
import Search from "./Search";
import {Link, useNavigate} from "react-router-dom";
import user from '../accsets/user.png'
const {IoIosArrowRoundBack,IoIosArrowRoundForward,AiOutlineSearch} =icons
const Header = () => {
    const navigate = useNavigate()
    function logOut() {
        localStorage.clear()
        navigate("/login")
    }
        if (localStorage.getItem("idUser") !== null){
            if (localStorage.getItem("user") === "admin") {
                return (
                    <div className={' flex justify-between w-full items-center'}>
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
            }else {
                return (
                    <div className={' flex justify-between w-full items-center'}>
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
                    </div>)
            }
        }else {
    return(
       <div className={' flex justify-between w-full items-center'}>
           <div className={'flex gap-6 w-full items-center'}>
               <div className={'flex text-gray-400 gap-4'}>
                   <span><IoIosArrowRoundBack size={24}/></span>
                   <span><IoIosArrowRoundForward size={24}/></span>
               </div>
               <div className={'w-1/2'}>
                    <Search/>
               </div>
           </div>
           <div>
               <button
                   onClick={()=>{
                   navigate("/login")
               }}><img
                   src={user} alt=''
                   className={'w-[40px] h-[40px]'}
               /></button>
           </div>
       </div>

    )}
}

export default Header