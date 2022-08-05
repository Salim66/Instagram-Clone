import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import './Login.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import swal from 'sweetalert';
import cookie from 'js-cookie';
import AuthContext from '../../context/AuthContext.js';

const Login = () => {

  // navigate
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  // Get start login form fields
  const [input, setInput] = useState({
    auth: '',
    password: ''
  });

   // Create toast
   const createToast = (msg) => {
    toast.error(msg);
  }

  // handle input
  const handleInput = (e) => {
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }

  // handle user login form
  const handleUserLoginForm = async (e) => {
    e.preventDefault();

    try {
      
      if( !input.auth || !input.password ){
        createToast('All fields are required!');
      }else {

        await axios.post('http://localhost:5050/api/user/login', { email: input.auth, password: input.password })
        .then( res => {
          
          cookie.set('token', res.data.token);
          cookie.set('user', JSON.stringify(res.data.user));
          dispatch({ type: "LOGIN_USER", payload: res.data })
          navigate('/');

        });

      }

    } catch (error) {
      createToast('Wrong email and password!')
    }

  }


  return (
    <div className="login__container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="login__wrapper">
        <a href="#" className="login__logo--link">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login__logo" />
        </a>
        <form onSubmit={ handleUserLoginForm } className="login__form">

            <input type="text" name='auth' className="login__input" onChange={ handleInput } placeholder='Phone number, username, or email' value={ input.auth } />
            <input type="password" name='password' className="login__input" onChange={ handleInput } placeholder='Password' value={ input.password } />
     
            <button type='submit' className="login__button">Log In</button>
        </form>
        <div className="divider">
          OR
        </div>
        <a href="#" className="login__with-facebook"><AiFillFacebook className='fb-icon' /> Log in with facebook</a>
        <a href="#" className="forgot__password">Forgot password?</a>
      </div>
      <div className="login__wrapper login__wrapper--signup">
        <p className="signup__text">Don't have an account? <Link to="/register" className="signup__link">Sign up</Link></p>
      </div>
      <div className="login__wrapper--appstore">
        <p className="app__text">Get the app.</p>
        <div className="app__alllink">
          <a href="#" className="app__link"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" className="app__image" /></a>
          <a href="#" className="app__link"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" className="app__image" /></a>
        </div>
      </div>
      <FooterAuth />
    </div>
  )
};

export default Login;