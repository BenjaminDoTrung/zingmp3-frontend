import React, {useContext, useState} from 'react';
import { Button, Dropdown } from 'antd';
import {AiOutlineMore} from "react-icons/ai";
import axios from "axios";
import {toast} from "react-toastify";
import "./hover.css"

import hoverList from "./Hover";
import {AppContext} from "../Context/AppContext";
import {useNavigate} from "react-router-dom";
const Dropdown_listSong = (prop) => {
    const navigate = useNavigate()
    const {toggleFlag } = useContext(AppContext);
    const items = [
        {
            key: '1',
            label: (
                <div onClick={addPlayList}>
                    Thêm vào PlayList
                </div>

            ),
        },
        {
            key: '2',
            label: (
                <a onClick={edit}>
                    Sửa bài hát
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => {
                    deleteSong(prop.id)
                }}>
                    Xóa bài hát
                </div>
            ),
        },
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                placement="topRight"
                arrow
            >
                <Button><AiOutlineMore/></Button>
            </Dropdown>
            <div className={"hien"} style={{display: 'block'}}>1123</div>
        </>
    )



    function addPlayList() {

    }

    function edit() {

    }

    function deleteSong(id) {
        axios.delete("http://localhost:8080/songs/" + id).then((res) => {
            toast.success("Xóa thành công", {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            toggleFlag() ;
        })
    }
}

export default Dropdown_listSong ;