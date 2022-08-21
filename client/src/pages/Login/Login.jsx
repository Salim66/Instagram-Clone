import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import './Login.scss';
import axios from 'axios';
import swal from 'sweetalert';
import cookie from 'js-cookie';
import AuthContext from '../../context/AuthContext.js';
import LoaderContext from '../../context/LoaderContext';
import { createToast } from '../../utility/toast';

const Login = () => {

  // navigate
  const navigate = useNavigate();

  // get AuthContext
  const { dispatch } = useContext(AuthContext);

  // get LoaderContext
  const { loaderDispatch } = useContext(LoaderContext);

  // Get start login form fields
  const [input, setInput] = useState({
    auth: '',
    password: ''
  });

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
          
          if(res.data.user.isVerified){
            cookie.set('token', res.data.token);
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data.user })
            navigate('/');
            loaderDispatch({ type: "LOADER_START" });
          }else {
            createToast('Please verify your account.');
          }
          


        });

      }

    } catch (error) {
      createToast('Wrong email and password!')
    }

  }


  return (
    <div className="login__container">
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
        <Link to="/recovery-password" className="forgot__password">Forgot password?</Link>
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