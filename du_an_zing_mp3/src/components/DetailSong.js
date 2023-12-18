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
            <h1>Song Detail</h1>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>{detailSong.nameSong}</td>
                </tr>
                <tr>
                    <th>Singer</th>
                    <td>{detailSong.singer}</td>
                </tr>
                <tr>
                    <th>artists</th>
                    <td>{detailSong.author}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{detailSong.description}</td>
                </tr>
                </thead>
            </table>
            <Link className='btn btn-outline-primary'  to={'/'}>Back Home</Link>
        </>
    )
}
