import {Field, Form, Formik} from "formik";
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import React, {useEffect, useState} from 'react';
import {storage} from "../FireBase/FireBaseConfig";
import axios from "axios";
import {toast} from "react-toastify";
export default function CreateSong() {
    const [uploadedImageUrl, setUploadedImageUrl] = useState(undefined);
    const [uploadedSong, setUploadedSong] = useState()
    const [songsUrl, setSongsUrl] = useState(null);
    const [image, setImage] = useState();
    const [songs,setSongs] = useState({})
    const [songType, setSongType] = useState([])
    const uploadFileImg = (image) => {
        if (image === null) return
        const imageRef = ref(storage, `IMG_ZingMP3/${image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUploadedImageUrl(url); // Lưu URL sau khi upload thành công vào state mới
                console.log("image uploaded successfully", url);
                console.log("image uploaded successfully", uploadedImageUrl);
                songs.url_img = url;
                localStorage.setItem("url_img", url);
            });
        });
    };
    useEffect(() => {
        axios.get("http://localhost:8080/songTypes").then((res)=>{
            setSongType(res.data);
        })
    }, []);

    const uploadFileSong = (url) => {
        if (url === null) return
        const urlRef = ref(storage, `ZingMusic/${url.name}`);
        uploadBytes(urlRef, url).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUploadedImageUrl(url); // Lưu URL sau khi upload thành công vào state mới
                console.log("image uploaded successfully", url);
                console.log("image uploaded successfully", uploadedImageUrl);
                songs.url_img = url;
                localStorage.setItem("url_song", url);
            });
        });
    };
    return (
        <>
            <Formik initialValues={{
                nameSong: "",
                singer: "",
                author: "",
                url_img: "",
                description: "",
                file_song: "",
                user: {
                    id: ""
                },
                id_SongTypes:{
                    id: 1
                }
            }} onSubmit={(value) => {
                value.url_img = localStorage.getItem("url_img");
                value.file_song = localStorage.getItem("url_song");
                console.log("url_img: ", value.url_img);
                console.log("url_song:",value.url_song);
                console.log("value = ", value);
                value.user.id = localStorage.getItem("idUser");

                axios.put("http://localhost:8080/songs", value).then((res)=>{
                    toast.success(" tạo bài hát thành công ", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                })
            }}>
                <Form>
                    <div className="form_create_song" style={{backgroundColor: "#451855", height:655}}>
                        <section className="vh-100">
                            <div className="container py-5 h-100">
                                <div className="row d-flex align-items-center justify-content-center h-100" style={{color: "white"}}>
                                    <div className="col-md-8 col-lg-7 col-xl-6">
                                        <h3 style={{marginLeft: 300, marginBottom:50}}>Create Song</h3>
                                        <img name="url_img"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                            className="img-fluid"/>
                                    </div>
                                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <Field name="nameSong" type="text" id="nameSong"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="nameSong">Tên Bài Hát</label>
                                        </div>
                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <Field name="singer" type="text" id="singer"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="singer">Tên ca sĩ</label>
                                        </div>

                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <Field name="author" type="text" id="author"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="author">Tên tác giả</label>
                                        </div>
                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <Field name="description" type="text" id="description"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="description">Mô tả</label>
                                        </div>

                                        <div>
                                            <Field className="form-control form-control-sm"
                                                   as="select" name="id_SongTypes.id" id="type">
                                                {songType.map((i, key) => {
                                                return (
                                                    <option value={i.id}>{i.name}</option>
                                                )
                                                })}
                                            </Field>
                                            <label className="form-label" htmlFor="type">Type Song</label>
                                        </div>
                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <input type="file" id="url_img" className="form-control form-control-lg" onChange={(event)=>{
                                                uploadFileImg(event.target.files[0])
                                            }}/>
                                            <label className="form-label" htmlFor="url_img">Ảnh</label>
                                        </div>
                                        <div className="form-outline mb-4" style={{height: 50}}>
                                            <input type="file" id="file_song" className="form-control form-control-lg" onChange={(event)=>{
                                                uploadFileSong(event.target.files[0])
                                                console.log("file nhạc ", event.target.files[0]);
                                            }}/>
                                            <label className="form-label" htmlFor="file_song">File nhạc</label>
                                        </div>

                                        <div className="button-create" style={{display:"flex", marginLeft: 100}}>
                                            <div style={{textAlign: "center"}}>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{width:150}}>Quay lại
                                                </button>
                                            </div>
                                            <div style={{textAlign: "center", paddingLeft:10}}>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" style={{width:150}}>Tạo bài
                                                    hát
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
