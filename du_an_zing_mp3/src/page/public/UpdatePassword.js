import Header from "../../components/Header";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import React, {useEffect, useState} from "react";


export default function UpdatePass() {
    const id = useState(localStorage.getItem("idUser"));
    const [check , setCheck] = useState(false)
    useEffect(() => {

    },[check])
    return (
        <>
            <Formik
                initialValues={{}}
                validationSchema={
                    require("yup").object().shape({
                        newpassword: require("yup")
                            .string()
                            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm số, chữ thường và chữ hoa")
                            .required("Vui lòng nhập mật khẩu mới."),

                    })
                }
                onSubmit={(user1) => {
                    updatePassword(user1)

                }
            }
                enableReinitialize={true}>
                <Form>
                    <div className="p-3 my-5 d-flex flex-column w-50">
                        <div>Password old</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'oldpassword'} type='password' required/>

                        </div>
                        <div>Password new</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'newpassword'} type='password'/>
                            <ErrorMessage  className={'formik-error-message'} name="newpassword" component="div"/>

                        </div>
                        <div>ConfirmedPassword new</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'confirmedPassword'} type='password'/>
                        </div>
                        {/*<div  style={check ? {color: "red"} : {display : 'none'}}> <p>mật khẩu nhập lại không đúng</p></div>*/}
                        <button className="mb-4" type={"submit"}>Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    )

    function updatePassword(user1) {

        console.log(id[0])
        if (user1.newpassword === user1.confirmedPassword  ) {
            let userPass = {
                id: id[0],
                password: user1.oldpassword,
                confirmedPassword : user1.newpassword ,
            }
            axios.put('http://localhost:8080/users/changePassword/' + id[0], userPass).then((res) => {
                alert("Cập nhật thành công")
            }).catch(() => {
                alert("cekkon")
            })
        }else {
            alert("Mật khẩu nhâp lại không chính xác")
        }
    }




}