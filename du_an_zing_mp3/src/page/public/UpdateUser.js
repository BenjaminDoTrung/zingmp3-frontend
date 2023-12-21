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
import { Button, notification, Space } from 'antd';
import {useNavigate} from "react-router-dom";

export default function UpdateUser() {
    const id = localStorage.getItem("idUser")
    const [user, setUser] = useState({})
    const [uploadedImageUrl, setUploadedImageUrl] = useState(undefined);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate()

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

    const openNotificationWithIcon = (title, desc) => {
        console.log(title, desc);
        api.success({
            message: title,
            description: desc,
            placement: 'top'
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
                        alert("Cập nhật thành công")
                        navigate("/")
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
                                        <div className="card">
                                            <div className="card-header">
                                                Cập nhật thông tin cá nhân
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    {user.url_img == null ? <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                                                                 alt="login form" className="img-fluid" /> :
                                                        <img src= {user.url_img}
                                                             alt="login form" className="img-fluid" style={{width:400, height: 350, marginTop: 100,paddingLeft: 50}} />}
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <div className="form-group mb-2">
                                                            <label className="" htmlFor="form2Example17">Địa chỉ email</label>
                                                            <Field name="email" type="email" id="form2Example17" placeholder="Nhập địa chỉ email" class="form-control form-control-lg" />
                                                        </div>

                                                        <div className="form-group mb-2">
                                                            <label className="" htmlFor="form2Example27">Tài khoản</label>
                                                            <Field name="userName" type="text" id="form2Example27" placeholder="Nhập tài khoản" className="form-control form-control-lg" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label className="" htmlFor="form2Example27">Số điện thoại</label>
                                                            <Field name="phone" type="text" id="form2Example27" placeholder="Nhập số điện thoại" className="form-control form-control-lg" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label className="" htmlFor="form2Example27">Ngày sinh (dd/YY/yyyy)</label>
                                                            <Field name="dayOfBirth" type="text" id="form2Example27" placeholder="Định dạng dd/YY/yyyy" className="form-control form-control-lg" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label className="" htmlFor="form2Example27">Ảnh đại diện</label>
                                                            <input name="img" type="file" id="form2Example27" className="form-control form-control-lg" onChange={(event) => {
                                                                uploadFile(event.target.files[0], id)
                                                            }}/>
                                                        </div>
                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-primary btn-lg btn-block">Chỉnh sửa</button>
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
