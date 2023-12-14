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
                      <Route path={path.REGISTER} element={<Register/>}></Route>
                      <Route path={path.LISTUSER} element={<UserList/>}></Route>
                      <Route path={path.UPDATEUSER} element={<UpdateUser/>}></Route>
                      <Route path={path.AlBUM_TITLE_PID} element={<Album/>}></Route>
                      <Route path={path.UPDATEPASS} element={<UpdatePass/>}></Route>
                  </Route>

              </Routes>
              <ToastContainer />
          </div>

      </>

  );
}

export default App;
