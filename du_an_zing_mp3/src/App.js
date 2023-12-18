import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {ToastContainer} from "react-toastify";
import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Public from "./page/public/Public";
import path from "./untis/path";
import Home from "./page/public/Home";
import Login from "./page/public/Login";
import * as actions from './store/actions'
import UserList from "./page/public/UserList";
import UpdateUser from "./page/public/UpdateUser";
import Album from "./page/public/Album";
import UpdatePass from "./page/public/UpdatePassword";
import Register from "./page/public/Register";
import CreateSong from "./components/CreateSong";
<<<<<<< HEAD
import UpdateSong from "./components/UpdateSong";
import CreatePlayList from "./components/CreatePlayList";
import ShowListSong from "./components/ShowListSong";
=======
import {DetailSong} from "./components";
import ListSearchBySongName from "./page/public/ListSearchBySongName";
>>>>>>> 2f48608355f51e17e5503ff8d1827d78fdd0c9a2

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getHome())
    }, [])
  return (
      <>
          <div>
              <Routes>
                  <Route path={path.PUBLIC} element={<Public/>}>
                      <Route path={path.HOME} element={<Home/>}></Route>
                      <Route path={path.LOGIN} element={<Login/>}></Route>
                      <Route path={path.CREATESONG} element={<CreateSong></CreateSong>}></Route>
                      <Route path={path.REGISTER} element={<Register/>}></Route>
                      <Route path={path.LISTUSER} element={<UserList/>}></Route>
                      <Route path={path.UPDATEUSER} element={<UpdateUser/>}></Route>
                      <Route path={path.AlBUM_TITLE_PID} element={<Album/>}></Route>
                      <Route path={path.UPDATEPASS} element={<UpdatePass/>}></Route>
<<<<<<< HEAD
                      <Route path={"update/:id"} element={<UpdateSong></UpdateSong>}></Route>
                      <Route path={"createPlayList"} element={<CreatePlayList></CreatePlayList>}></Route>
                      <Route path={"showList"} element={<ShowListSong></ShowListSong>}></Route>

=======
                      <Route path={path.DETAILSONG} element={<DetailSong/>}></Route>
                      <Route path={path.SEARCHBYSONGNAME} element={<ListSearchBySongName/>}></Route>
>>>>>>> 2f48608355f51e17e5503ff8d1827d78fdd0c9a2
                  </Route>

              </Routes>
              <ToastContainer />
          </div>

      </>

  );
}

export default App;
