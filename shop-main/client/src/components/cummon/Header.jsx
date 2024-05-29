// src/components/common/Header.jsx
import React from 'react';
import classes from '../UI/component.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/userReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer, toast } from 'react-toastify';


const Header = ( {IsAuth} ) => {
  const router=useHistory();
  const dispatch=useDispatch();
  const notify=()=>{
    toast.error('Logout!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
    const logOUT = (notifY) => {
    router.push('/')
    notifY();
  }
  function isAut(){
    console.log("is auth = " + IsAuth , "\nuser ID : " , localStorage.getItem('userID'))
  }

  return (
    <header className='myHeader'>
      <div>
      <Link to="/">Trade Trove</Link>
      <nav>
        <button onClick={() => {isAut();}}>cheak</button>
          <ul>
            <li>
              <Link to="/registration">registration</Link>
            </li>
            {IsAuth?
            <>           
             <li>
              <Link to="/BasketPage">basket</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
             <li>
              <button className='headerButtonLogout' onClick={()=> {dispatch(logout()); logOUT(notify)}} type='submit'>logout</button>
            </li>
            </>
            :
            <li>
              <Link to="/login">login</Link>
            </li>
            }
          </ul>
        </nav>
      </div>
      {/* Додайте додатковий код, якщо потрібно */}
    </header>
  );
};

export default Header;
