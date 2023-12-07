import Header from "../../components/Header";
import {useEffect, useState} from "react";
import * as apis from '../../apis'
import {GetHome, getHome} from "../../apis";
import axios from "../../axios";
import Slider from "../../components/Slider";



const Home = () =>{


    return (
        <div className={'overflow-y-auto w-full'}>
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>

            </div>
            <Slider/>
        </div>
    )
}
export default Home