import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SongDetail (){
    const {id} = useParams()
    const [detailSong,setdetailSong] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:8080/songs/"+id).then(res => {
            setdetailSong(res.data)
        }).catch(Error => console.log(Error))
    }, [])

    return(
        <>
            <h1 className={'font-bold flex items-center justify-center mb-5 mt-5'}>Song Detail</h1>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Name Song</th>
                    <th scope="col">Singer</th>
                    <th scope="col">Author</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{detailSong.nameSong}</th>
                    <td>{detailSong.singer}</td>
                    <td>{detailSong.author}</td>
                    <td>{detailSong.description}</td>
                </tr>

                </tbody>
            </table>
            <Link className='btn btn-outline-primary'  to={'/'}>Back Home</Link>
        </>
    )
}
