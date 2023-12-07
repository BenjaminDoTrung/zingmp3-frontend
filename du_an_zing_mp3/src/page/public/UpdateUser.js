import {Link} from "react-router-dom";
import Header from "../../components/Header";
import {Field, Form, Formik} from "formik";
import {registerService} from "./Register";
import axios from "axios";
import {value} from "lodash/seq";


export default function UpdateUser() {
    return (
        <>
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>
            </div>
            <Formik initialValues={{
                userName: "",
                email: "",
                phone: "",
                dayOfBirth: "",
                url_img: "",
            }}
                    onSubmit={(id) => {
                        updateProfile(id)
                    }
            }>
                <Form>
                    <div className="p-3 my-5 d-flex flex-column w-50">
                        <div>Name</div>
                        <div className="form-outline mb-4">
                            <Field class="form-control" name={'userName'} label='Email address' id='form1' type='text'/>
                        </div>
                        <div>Email</div>
                        <div className="form-outline mb-4">
                            <Field class="form-control" name={'email'} label='email' id='form2' type='email'/>
                        </div>
                        <div>Phone</div>
                        <div className="form-outline mb-4">
                            <Field class="form-control" name={'phone'} label='phone' id='form2' type='number'/>
                        </div>
                        <div>DOB</div>
                        <div className="form-outline mb-4">
                            <Field class="form-control" name={'dayOfBirth'} label='dayOfBirth' id='form2' type='date'/>
                        </div>
                        <div>IMG</div>
                        <div className="form-outline mb-4">
                            <Field class="form-control" name={'url_img'} label='url_img' id='form2' type='file'/>
                        </div>
                        <button className="mb-4">Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    )

    function updateProfile(id) {
        updateUser(id).then((res) => {
            localStorage.setItem("user", res.username)
            alert("Cập nhật thành công")
        })
    }
}
export const updateUser =(id) =>{
    return new Promise(resolve => {
        resolve(
            axios.put('http://localhost:8080/users/'+ id).then((res) => {
                return res.data
            })
        )
    })
}