import Header from "../../components/Header";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";


export default function UpdateUser() {
    const id = localStorage.getItem("idUser")
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8080/users/' + id).then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    }, [])
    return (
          <>
                <Formik
                    initialValues={user}
                    onSubmit={(user1) => {
                        updateProfile(user1)

                    }}
                    enableReinitialize={true}>
                    <Form>
                        <div className="container-fluid px-1 py-5 mx-auto">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                                    <h1>Chỉnh sửa</h1>
                                    <div className="card">
                                            <div className="row justify-content-between text-left">
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <label className="form-control-label px-3">Tên hiện thị<span className="text-danger"> *</span></label>
                                                    <Field type="text" name={'userName'} placeholder="Name"/>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <label className="form-control-label px-3">Số điện thoại<span className="text-danger"> *</span></label>
                                                    <Field type="number" name={'phone'} placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="row justify-content-between text-left">
                                            <div className="form-group col-sm-6 flex-column d-flex">
                                                <label className="form-control-label px-3">Ngày sinh<span className="text-danger"> *</span></label>
                                                <Field type="date" name={'dayOfBirth'} placeholder="DOB"/>
                                            </div>
                                    </div>

                                            <div className="row justify-content-between text-left">
                                                <div className="form-group col-12 flex-column d-flex">
                                                    <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label>
                                                    <Field type="email" name={'email'} placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between text-left">
                                                <div className="form-group col-12 flex-column d-flex">
                                                    <label className="form-control-label px-3">Ảnh hiện thị<span className="text-danger"> *</span></label>
                                                    <Field type="text" name="ans" placeholder="IMG" />
                                                </div>
                                            </div>
                                            <div className="row justify-content-end">
                                                <div className="form-group col-sm-6">
                                                    <button className="mb-4" type={"submit"}>Update</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="p-3 my-5 d-flex flex-column w-50">*/}
                        {/*    <div>Name</div>*/}
                        {/*    <div className="form-outline mb-4">*/}
                        {/*        <Field className="form-control" name={'userName'} type='text'/>*/}
                        {/*    </div>*/}
                        {/*    <div>Email</div>*/}
                        {/*    <div className="form-outline mb-4">*/}
                        {/*        <Field className="form-control" name={'email'} type='email'/>*/}
                        {/*    </div>*/}
                        {/*    <div>Phone</div>*/}
                        {/*    <div className="form-outline mb-4">*/}
                        {/*        <Field className="form-control" name={'phone'} type='number'/>*/}
                        {/*    </div>*/}
                        {/*    <div>DOB</div>*/}
                        {/*    <div className="form-outline mb-4">*/}
                        {/*        <Field className="form-control" name={'dayOfBirth'} type='date'/>*/}
                        {/*    </div>*/}
                        {/*    <div>IMG</div>*/}
                        {/*    <div className="form-outline mb-4">*/}
                        {/*        <input id='form2' type='file'/>*/}
                        {/*    </div>*/}
                        {/*    <button className="mb-4" type={"submit"}>Update</button>*/}
                        {/*</div>*/}
                    </Form>
                </Formik>

        </>
    )

    function updateProfile(user1) {
        let userAcc = {
            id : user.id ,
            name : user1.name ,
            email : user1.email ,
            phone : user1.phone ,
            dayOfBirth : user1.dayOfBirth ,
        }
        axios.put('http://localhost:8080/users/' + userAcc.id ,userAcc).then((res) => {
            console.log("user", res.data.username)
            localStorage.setItem("user", res.data.username)
            alert("Cập nhật thành công")
        }).catch(() => {
            alert("cekkon")
        })    }

}
