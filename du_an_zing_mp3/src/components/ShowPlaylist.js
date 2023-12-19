import React, {useEffect, useState} from 'react';
import {MdDeleteOutline, MdOutlineBrowserUpdated} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const ShowPlaylist = () => {
    let [list, setList] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8080/playLists").then((res) => {
            setList(res.data);
        })
    }, [list]);

    function deletePlaylist(id) {
        axios.delete("http://localhost:8080/playLists/" + id).then((res) => {
            toast.success("Xóa thành công", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            navigate("/showPlaylist")
        })
    }

    return (
        <>
            <div style={{color: "white", marginTop: 30}}>
                <div className="name_playlist" style={{paddingBottom: 20, fontSize: 30, paddingLeft: 10}}>
                    Danh sách Playlist
                </div>
                <table className="table" style={{color: "white"}}>
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên Playlist</th>
                        <th scope="col" colSpan={2}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((i, key) => {
                        return (
                            <tr>
                                <th scope="row">{i.id}</th>
                                <td onClick={() => {
                                    navigate("/viewPlaylist/" + i.id)
                                }}>{i.namePlayList}</td>
                                <td><MdOutlineBrowserUpdated onClick={()=>{
                                    navigate("/updatePlayList/" + i.id)
                                }} style={{width: 30, height: 30}}/></td>
                                <td><MdDeleteOutline onClick={() => {
                                    deletePlaylist(i.id);
                                }} style={{width: 30, height: 30}}/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ShowPlaylist;