import Header from "../../components/Header";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useState} from "react";


export default function UpdatePass() {
    const [user, setUser] = useState({})

    return(
        <>
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>
            </div>
            <Formik
                initialValues={user}
                onSubmit={(user1) => {
                    updatePassword(user1)

                }}
                enableReinitialize={true}>
                <Form>
                    <div className="p-3 my-5 d-flex flex-column w-50">
                        <div>Password old</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'password'} type='password'/>
                        </div>
                        <div>Password new</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'password'} type='password'/>
                        </div>
                        <div>ConfirmedPassword new</div>
                        <div className="form-outline mb-4">
                            <Field className="form-control" name={'confirmedPassword'} type='password'/>
                        </div>
                        <button className="mb-4" type={"submit"}>Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
    function updatePassword(user1) {

        let userPass = {
            id : user.id ,
            name : user1.name ,
            email : user1.email ,
            phone : user1.phone ,
            dayOfBirth : user1.dayOfBirth ,
        }
        axios.put('http://localhost:8080/users/' + userPass.id ,userPass).then((res) => {
            console.log("user", res.data.username)
            localStorage.setItem("user", res.data.username)
            alert("Cập nhật thành công")
        }).catch(() => {
            alert("cekkon")
        })    }

}