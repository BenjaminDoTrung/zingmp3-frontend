import Header from "../../components/Header";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";
import {storage} from "../../FireBase/FireBaseConfig";
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import React from 'react';


export default function UpdateUser() {
    const id = localStorage.getItem("idUser")
    const [user, setUser] = useState({})
    const [uploadedImageUrl, setUploadedImageUrl] = useState(undefined);
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/users/' + id).then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    }, [])
    const uploadFile = (image, id_user) => {
        if (image === null) return
        const imageRef = ref(storage, `IMG-ZingMP3/${image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUploadedImageUrl(url); // Lưu URL sau khi upload thành công vào state mới
                console.log("image uploaded successfully", url);
                console.log("image uploaded successfully", uploadedImageUrl);
                user.url_img = url;
                axios.put("http://localhost:8080/users/" + id, user).then((res)=>{
                    console.log("huong")
                    alert("huong")
                })
            });
        });
    };


    return (
        <>
            <Formik
                initialValues={{
                    userName: user.userName,
                    email: user.email,
                    phone: user.phone,
                    url_img: user.url_img,
                    dayOfBirth: user.dayOfBirth
                }}
                enableReinitialize={true}
                onSubmit={(user1) => {
                    axios.put("http://localhost:8080/users/"+ id, user1).then((res)=>{
                        localStorage.setItem("user", res.data.username)
                        console.log("pheo")
                        alert("Cập nhật thành công")
                    }).catch(()=>{
                        alert("false")
                    })
                }}
            >
                    <Form>
                        <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
                            <div className="container py-5 h-100" >
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col col-xl-10">
                                        <div className="card" style={{borderRadius: 1}}>
                                            <div className="row g-0">
                                                <div className="col-md-6 col-lg-5 d-none d-md-block" style={{height:200}}>
                                                    {user.url_img == null ? <img onClick={()=>document.getElementById("form2Example27").click()} src="https://facebookninja.vn/wp-content/uploads/2023/06/anh-dai-dien-mac-dinh-zalo.jpg"
                                                                                 alt="login form" className="img-fluid" /> :
                                                        <img onClick={()=>document.getElementById("form2Example27").click()} src= {user.url_img}
                                                             alt="login form" className="img-fluid" style={{width:400, height: 350, marginTop: 100,paddingLeft: 50}}
                                                        />}
                                                    <div className="form-outline mb-4" style={{height: 50}}>
                                                        <input style={{display:'none'}} name = "img" type="file" id="form2Example27" className="form-control form-control-lg" onChange={(event) => {
                                                            uploadFile(event.target.files[0], id)
                                                        }}/>
                                                        <label className="form-label" htmlFor="form2Example27"></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                    <div className="card-body p-4 p-lg-5 text-black">
                                                        <div className="d-flex align-items-center mb-3 pb-1" style={{height: 50}}>
                                                            <span className="h1 fw-bold mb-0">Update User</span>
                                                        </div>

                                                        <div className="form-outline mb-4" style={{height: 50}}>
                                                            <Field name="email" type="email" id="form2Example17" class="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                        </div>

                                                        <div className="form-outline mb-4" style={{height: 50}}>
                                                            <Field name = "userName" type="text" id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example27">Username</label>
                                                        </div>
                                                        <div className="form-outline mb-4" style={{height: 50}}>
                                                            <Field name = "phone" type="text" id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example27">Phone</label>
                                                        </div>
                                                        <div className="form-outline mb-4" style={{height: 50}}>
                                                            <Field name = "dayOfBirth" type="text" id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="form2Example27">Day Off Birth</label>
                                                        </div>
                                                        <div className="pt-1 mb-4" style={{height: 50}}>
                                                            <button className="btn btn-dark btn-lg btn-block" type="button" style={{color: "violet"}}>Update</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                </Form>
            </Formik>
        </>
    )
}