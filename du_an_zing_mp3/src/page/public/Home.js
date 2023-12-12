import Header from "../../components/Header";
import {useEffect, useState} from "react";
import * as apis from '../../apis'
import {GetHome, getHome} from "../../apis";
import axios from "../../axios";
import Slider from "../../components/Slider";
import {Sections} from "../../components";
import {useSelector} from "react-redux";
import {NewRelease} from "../../components";


const Home = () =>{
    const {friday,newEveryday, top100, xone, newMusic} = useSelector(state => state.app)

    return (
        <div className={'overflow-y-auto w-full'}>

            <Slider/>
            {/*<Sections data={friday}/>*/}
            {/*<Sections data={newEveryday}/>*/}
            <NewRelease/>
            <Sections data={top100}/>
            <Sections data={xone}/>
            <Sections data={newMusic}/>




        </div>
    )
}
export default Home