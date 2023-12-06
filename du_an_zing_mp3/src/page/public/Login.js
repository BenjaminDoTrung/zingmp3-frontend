import {Field, Formik, Form} from "formik";
import {MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";


function Login() {
    const navigate = useNavigate()

    return (
        <>
            <div className={'h-[70px] px-[59px] flex items-center'}>
                <Header/>
            </div>
        <Formik initialValues={{
            userName: "",
            password: "",
        }}
                onSubmit={(values) => {
                    loginAcc(values)}
                }>
            <Form>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <div><h1>Login</h1></div>
                    <div className="form-outline mb-4">
                        <Field class="form-control" name={'userName'} label='Email address' id='form1' type='text'/>
                    </div>
                    <div className="form-outline mb-4">
                        <Field class="form-control" name={'password'} label='Password' id='form2' type='password'/>
                    </div>
                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                        <a href="/UpdatePass">Forgot password?</a>
                    </div>
                    <button className="mb-4">Sign in</button>
                    <div className="text-center">
                        <p>Not a member? <button><Link to={'/register'} type={"button"} className={"btn btn-default"}
                                                       data-dismiss={"modal"} value={"Cancel"}>Register</Link></button></p>
                        <p>or sign up with:</p>
                        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{color: '#1266f1'}}><a href="https://accounts.google.com/o/oauth2/auth?scope=email&redirect_uri=http://localhost:8080/login-google&response_type=code
    &client_id=80724656105-fg2ndheoujm7c7dd4ob1i9mq3ebdbjhb.apps.googleusercontent.com&approval_prompt=force">Login With Gmail</a>
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

    function loginAcc(value) {
        try {
            console.log(value)
            axios.post('http://localhost:8080/users/login',value).then((res) => {
                localStorage.setItem("idUser", res.data.id)
                localStorage.setItem("user", res.data.username)
                alert("Đăng nhập thành công")
                navigate("/")
            }).catch(()=> {
                    alert('Không thành công')
                    navigate("/login")
                }
            )
        }catch (e) {
        }
    }

    function check() {
        return (
            localStorage.getItem('user')
        );
    }
}

export default Login;

