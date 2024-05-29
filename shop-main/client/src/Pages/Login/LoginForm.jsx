import React, { useState } from 'react';
import { loginReq } from '../../serverFunction/userRequests';
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/reducers/userReducer';
import '../Pages.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const LoginForm = () => {
  const dispatch=useDispatch();
  const router = useHistory();
  const isAuth=useSelector(state=>state.user.isAuth)
  const [newUser, setNewUser] = useState({ 
    firstname:"",
    lastname:"",
    email:"",
    password:""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Email :', newUser.email, '\nPassword :', newUser.password, "\n user tried logined", '\n user login : '+ isAuth);
        const loginResponse = await dispatch(loginReq(newUser));
        if (loginResponse.successfulLogin) {
            router.push('/');
        } else {
            alert("Incorrect email or password");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again later.");
    }
};

  return (
      <div>
      <div className='login-container'>
        <h2>Увійти до свого облікового запису</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Електронна пошта:</label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e)=>setNewUser({...newUser,email:e.target.value})}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e)=>setNewUser({...newUser,password:e.target.value})}
              required
            />
          </div>
          <button type="submit">Увійти</button>
        </form>
      </div>
  </div>
)
};

export default LoginForm;
