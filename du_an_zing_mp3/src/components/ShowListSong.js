import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AiOutlineMore} from "react-icons/ai";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const ShowListSong = () => {
    const [idUser, setIdUser] = useState(localStorage.getItem("idUser"))
    const [list, setList] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8080/songs/showByIdUser/" + idUser).then((res) => {
            setList(res.data);
        })
    }, []);
    return (
        <>
            <div style={{backgroundColor: "#3c2452", color:"white"}}>
                <div className="container mt-4" style={{paddingBlock:80}}>
                    <h1 className="font-weight-bold" style={{marginLeft: 30, fontSize:30}}>Danh sách bài hát</h1>
                    <div className="row" style={{paddingTop: 40}}>
                        {list.map((i, key) => {
                            console.log("đếm: ", {i});
                            console.log("id user", localStorage.getItem("idUser"))
                            console.log("idsong", i.user.id)

                                return (
                                    <div className="col-sm-3" style={{marginBottom: 30}}>
                                        <div className="top100_content" style={{paddingLeft: 30}}>
                                            <img
                                                onClick={()=>{
                                                    navigate("/update/" + i.id)
                                                }}
                                                style={{width:215, height: 200, borderRadius:10}}
                                                src={i.url_img == null ? "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/3/6/a/a36a7d1fecd4333c96def2d3f71a6b9b.jpg"
                                                    : i.url_img} />
                                            <div style={{display: "flex"}}>
                                                <div>
                                                    <h5 style={{width:200, marginTop:10}}>
                                                        Tên bài hát: {i.nameSong}
                                                    </h5>
                                                    <div style={{width:200, marginTop:5}}>Tên ca sĩ: {i.singer}</div>
                                                </div>
                                                <AiOutlineMore onClick={()=>{
                                                    axios.put("http://localhost:8080/songs/add_play_list/" + 2 + "/"+ i.id).then((res)=>{
                                                        toast.success("Thêm thành công vào Playlist", {
                                                            position: toast.POSITION.BOTTOM_RIGHT
                                                        })
                                                    })
                                                }} style={{width:20, height:20, marginTop: 40}}/>
                                            </div>

                                        </div>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowListSong;