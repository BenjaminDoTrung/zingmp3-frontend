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
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>
            </div>
                <Formik
                    initialValues={user}
                    onSubmit={(user1) => {
                        updateProfile(user1)

                    }}
                    enableReinitialize={true}>
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
                                <input id='form2' type='file'/>
                            </div>
                            <button className="mb-4" type={"submit"}>Update</button>
                        </div>
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
