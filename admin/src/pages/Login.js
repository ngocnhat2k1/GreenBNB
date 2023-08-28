import React from 'react';
import '../App.css';
import CommonBanner from '../Components/CommonBanner';
import LoginArea from '../Components/LoginArea';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  if (Cookies.get('adminToken') !== undefined) {
    navigate('/')
  };
  return (
    < div className="App" style={{ padding: 0 }} >
      < CommonBanner namePage="Login" />
      <LoginArea />
    </div>
  )
}


export default Login;