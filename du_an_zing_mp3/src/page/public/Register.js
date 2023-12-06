import {Link, useNavigate} from "react-router-dom";
import {Field, Formik, Form} from "formik";
import {MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import axios from "axios";
import Header from "../../components/Header";


function Register() {
    const navigate = useNavigate();

    return (
        <>
        <div className={'h-[70px] px-[59px] flex items-center'}>
            <Header/>
        </div>
        <Formik initialValues={{
            userName: "",
            password: "",
            confirmedPassword: ""
        }}
                onSubmit={(values) => {
                    registerAcc(values)
                }}>
            <Form>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <div><h1>Register</h1></div>
                    <div className="form-outline mb-4">
                        <Field class="form-control" name={'userName'} label='Email address' id='form1' type='text'/>
                    </div>
                    <div className="form-outline mb-4">
                        <Field class="form-control" name={'password'} label='Password' id='form2' type='password'/>
                    </div>
                    <div className="form-outline mb-4">
                        <Field class="form-control" name={'confirmedPassword'} label='Password' id='form3' type='password'/>
                    </div>

                    <button className="mb-4">Register</button>
                    <div className="text-center">
                        <p>or sign up with:</p>
                        <button onClick={back}>back</button>
                        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{color: '#1266f1'}}>
                                <MDBIcon fab icon='facebook-f' size="sm"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{color: '#1266f1'}}>
                                <MDBIcon fab icon='twitter' size="sm"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{color: '#1266f1'}}>
                                <MDBIcon fab icon='google' size="sm"/>
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{color: '#1266f1'}}>
                                <MDBIcon fab icon='github' size="sm"/>
                            </MDBBtn>

                        </div>
                    </div>

                </MDBContainer>
            </Form>
        </Formik>
        </>
    )
    function registerAcc(value) {
        console.log(value)
        registerService(value).then((res) => {
            console.log(res)
            localStorage.setItem("user", res.username)
            alert("Đăng kí thành công")
            navigate("/login")
        })
    }
    function back() {
        navigate("/login")}
}
export const registerService =(value) =>{
    return new Promise(resolve => {
        resolve(
            axios.post('http://localhost:8080/users/register', value).then((res) => {
                return res.data
            })
        )
    })
}

export default Register;