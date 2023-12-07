import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function UserList() {
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        findAllUsers()
    }, [check])

    function changeStatus(id,email, event) {
        console.log(list)
        axios.post('http://localhost:8080/users/' + id + email).then(()=>{})
    }
        return (
            <>
                <div className={'h-[70px] px-[59px] flex items-center'}>
                    <Header/>
                </div>
                <div>
                    <button><Link to={'/Login'} type={"button"} className={"btn btn-default"}
                                  data-dismiss={"modal"} value={"Cancel"}> Logout</Link></button>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>url_img</th>
                        <th>DayOfBirth</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>User Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((i, key) => (
                            <tr>
                                <td>{key + 1}</td>
                                <td>{i.email}</td>
                                <td>{i.url_img}</td>
                                <td>{i.dayOfBirth}</td>
                                <td>{i.phone}</td>
                                <td>
                                    <select onChange={(event) =>{changeStatus(i.id,i.email, event)}}>
                                        {i.enabled === true ? <>
                                            <option>true</option>
                                            <option>false</option>
                                        </> : <>
                                            <option>false</option>
                                            <option>true</option>
                                        </>
                                        }
                                    </select>
                                </td>
                                <td>{i.userName}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </>
        )

        function findAllUsers() {
            axios.get('http://localhost:8080/users').then(res => {
                setList(res.data)
            }).catch(()=>{setList([])})
        }

    }
