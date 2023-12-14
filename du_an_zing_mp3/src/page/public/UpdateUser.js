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
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>
            </div>
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
                    <div className="p-3 my-5 d-flex flex-column w-50">
                        <div>Name</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'userName'} type='text'/>
                        </div>
                        <div>Email</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'email'} type='email'/>
                        </div>
                        <div>Phone</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'phone'} type='number'/>
                        </div>
                        <div>DOB</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'dayOfBirth'} type='date'/>
                        </div>
                        <div>IMG</div>
                        <div className="form-outline mb-4">
                            <input id='form2' name="url_img" type='file' onChange={(event)=>{
                                uploadFile(event.target.files[0], id)
                            }}/>
                        </div>
                        <button className="mb-4" type="submit" >Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}