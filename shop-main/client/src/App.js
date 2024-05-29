import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {authRoutes,publicRoutes} from './router/Routes'
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import { Footer, Header } from './components/cummon/index';
import { rehost } from './serverFunction/userRequests';
import { ToastContainer, toast } from 'react-toastify';
import classes from './App.css'

function App() {
 const isAuth=useSelector(state=>state.user.isAuth)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(rehost())
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div className='header'>
            <Header IsAuth={isAuth}/>
          </div>
          <div className='main'>
                 {isAuth?
                    <>
                      {authRoutes.map((p)=>
                        <Route path={p.path} component={p.Component} exact/>
                      )}
                    </>
                    :
                    <>
                      {publicRoutes.map((p)=>
                        <Route path={p.path} component={p.Component} exact/>
                      )}
                    </>
                  }
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
        <ToastContainer/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
