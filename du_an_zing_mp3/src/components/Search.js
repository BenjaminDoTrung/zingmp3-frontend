import icons from "../untis/icons";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const {AiOutlineSearch} = icons


const Search = () => {
    let navigate = useNavigate();

    function searchByName(value) {
        axios.get('http://localhost:8080/songs/search/'+ value.nameSong).then((res) => {
            console.log(res.data.nameSong);
            navigate("/searchBySongName")
        }).catch(() => {
            toast.error('Không có bài hát này')
        })
    }

        return (
            <>
                <Formik initialValues={{
                    nameSong: "",
                }}
                        enableReinitialize={true}
                        onSubmit={(value) => {
                            searchByName(value)
                            console.log(value)
                        }}>
                    <Form>
                        <div className='w-full flex items-center'>
                            <span className='h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500'>
                                <AiOutlineSearch size={24}/>
                            </span>
                            <Field
                                type="text"
                                className='outline-none px-4 bg-[#DDE4E4] py-2 w-full rounded-r-[20px] h-10 text-gray-500'
                                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
                                name="nameSong"
                            />
                            <button>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </>
        )
}

export default Search