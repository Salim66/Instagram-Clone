import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import './Login.scss';

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <a href="#" className="login__logo--link">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login__logo" />
        </a>
        <form action="#" className="login__form">

            <input type="text" className="login__input" placeholder='Phone number, username, or email' />
            <input type="password" className="login__input" placeholder='Password' />
     
            <button className="login__button">Log In</button>
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