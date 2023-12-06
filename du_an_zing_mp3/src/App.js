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
                  </Route>
              </Routes>
          </div>
          <ToastContainer
              position={"bottom-right"}
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={"light"}
          />
      </>

  );
}

export default App;
