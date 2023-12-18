
import actionTypes from "../actions/actionTypes";
import {find} from "lodash";


const initState = {
    banner: [],
    friday: {},
    newEveryDay: {},
    top100: {},
    xone: {},
    newMusic: [],
    newRelease: {},
    latest: [],
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null,
                friday: action.homeData?.find(item => item.sectionId === 'hAutoTheme1') || {},
                newEveryDay: action.homeData?.find(item => item.sectionId === 'hAutoTheme1') || {},
                top100: action.homeData?.find(item => item.sectionId === 'h100') || {},
                xone: action.homeData?.find(item => item.sectionId === 'hXone') || {},
                newMusic: {...action.homeData?.find(item => item.sectionId === 'hAlbum'), title: "Nhạc mới"} || {},
                newRelease: action.homeData || null,
                latest: action.homeData || [],
            }

        default:
            return state
    }
}

export default appReducer

