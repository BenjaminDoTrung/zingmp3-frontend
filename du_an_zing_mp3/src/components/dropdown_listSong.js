import React, {useContext, useState} from 'react';
import {Button, Dropdown} from 'antd';
import {AiOutlineMore} from "react-icons/ai";
import axios from "axios";
import {toast} from "react-toastify";
import "./hover.css"
import swal from "sweetalert";
import {AppContext} from "../Context/AppContext";
import {useNavigate} from "react-router-dom";

const Dropdown_listSong = (prop) => {
    let [checkDelete, setCheckDelete] = useState(false)

    const navigate = useNavigate()
    const {toggleFlag} = useContext(AppContext);
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
                <a onClick={()=>{
                    edit(prop.id)
                }}>
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

    function edit(id) {
        navigate("/update/" + id)
    }

    function deleteSong(id) {
        swal({
            text: "Bạn có muốn xóa bài hát này không?",
            icon: "info",
            buttons: {
                cancel: true,
                confirm: true
            },
        }).then(r => {
            if (r) {
                axios.delete("http://localhost:8080/songs/" + id)
                    .then(() => {
                            setCheckDelete(!checkDelete)
                            toggleFlag()

                            toast.success("Xóa thành công!", {autoClose: 700})
                        }
                    )
            }
        })
    }


}

export default Dropdown_listSong;