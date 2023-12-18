import React, {useEffect, useState} from 'react';
import axios from "axios";

const ShowListSong = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/songs").then((res) => {
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
                            return (
                                <div className="col-sm-3" style={{marginBottom: 30}}>
                                    <div className="top100_content" style={{paddingLeft: 30}}>
                                        <img
                                            style={{width:215, height: 200, borderRadius:10}}
                                            src={i.url_img == null ? "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/3/6/a/a36a7d1fecd4333c96def2d3f71a6b9b.jpg"
                                                : i.url_img} />
                                        <h5 style={{width:200, marginTop:10}}>
                                            Tên bài hát: {i.nameSong}
                                        </h5>
                                        <div style={{width:200, marginTop:5}}>Tên ca sĩ: {i.singer}</div>
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