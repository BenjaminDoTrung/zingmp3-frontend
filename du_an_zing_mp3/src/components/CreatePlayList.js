import React from 'react';
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {IoAddOutline} from "react-icons/io5";

function CreatePlayList(props) {
    const navigate = useNavigate();

    return (
        <>
            <Formik initialValues={{
                namePlayList: "",
                id_user: {
                    id: localStorage.getItem("idUser")
                }
            }}
                    enableReinitialize={true}
                    onSubmit={(values)=>{


                axios.put("http://localhost:8080/playLists", values).then((res)=>{
                    toast.success("Tạo playlist thành công", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    navigate("/")
                }).catch(() => {
                    toast.error('Không thể tạo')
                })
            }}>
                <Form>
                    <div className="row g-3 align-items-center" style={{width:400, marginLeft: 20}}>
                        <div className="col-auto"  >
                            <label htmlFor="inputPassword6" className="col-form-label"><IoAddOutline/></label>
                        </div>
                        <div className="col-auto">
                            <Field name="namePlayList" type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Thêm</button>
                        </div>
                    </div>
                </Form>
            </Formik>

        </>
    );
}

export default CreatePlayList;