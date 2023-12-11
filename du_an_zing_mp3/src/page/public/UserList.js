import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function UserList() {
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/users').then(res => {
            setList(listNew(res.data))
        }).catch(()=>{setList([])})
    }, [check])

    function listNew(list) {
        let listNe = [] ;
        for (let i = 0; i < list.length; i++) {
            if(list[i].userName !== "admin"){
                listNe.push(list[i])
            }
        }
        return listNe ;
    }

    function changeStatus(email) {
        axios.put('http://localhost:8080/users/account_lockout/'+email).then(()=>{})
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

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">url_img</th>
                        <th scope="col">DayOfBirth</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">User Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((i, key) => (
                            <tr>
                                <th scope="row">{key + 1}</th>
                                <td>{i.email}</td>
                                <td>{i.url_img}</td>
                                <td>{i.dayOfBirth}</td>
                                <td>{i.phone}</td>
                                <td>
                                    <select onChange={(event) =>{changeStatus(i.email)}}>
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

        }

    }
