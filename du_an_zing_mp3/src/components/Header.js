
import icons from "../untis/icons";
import Search from "./Search";
const {IoIosArrowRoundBack,IoIosArrowRoundForward,AiOutlineSearch} =icons
const Header = () => {
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
               Login
           </div>


       </div>
    )
}

export default Header