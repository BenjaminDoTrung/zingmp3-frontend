import actionTypes from "./actionTypes";
import * as apis from '../../apis'
import {useEffect} from "react";
import axios from "axios";

export const getHome = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000/api/home")

        if (response?.data.err ===0){
            dispatch({
                type : actionTypes.GET_HOME,
                homeData: response.data.data.items
            })
        }else {
            dispatch({
                type : actionTypes.GET_HOME,
                homeData: null
            })
        }
    }catch (err){
        dispatch({
            type : actionTypes.GET_HOME,
            homeData: null
        })
    }
}