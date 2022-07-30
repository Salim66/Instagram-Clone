import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import '../Login/Login.scss';
import './Register.scss';

const Register = () => {
  return (
    <div className="login__container auth__container--register">
      <div className="login__wrapper">
        <a href="#" className="login__logo--link">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login__logo" />
        </a>
        <p className="register__text">
          Sign up to see photos and videos from your friends.
        </p>
        <a href="#" className="register__with--facebook"><AiFillFacebook className='rfb__icon' /> Log in with facebook</a>
        <div className="divider">
          OR
        </div>
        <form action="#" className="login__form">
          <input type="text" className="login__input" placeholder='Mobile Number or Email' />
          <input type="text" className="login__input" placeholder='Full Name' />
          <input type="text" className="login__input" placeholder='Username' />
          <input type="password" className="login__input" placeholder='Password' />
        </form>
        <p className="register__top-text">
          People who use our service may have uploaded your contact information to Instagram. Learn More
        </p>
        <p className="register__bottom-text">
          By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
        </p>
        <button className="login__button">Sign up</button>
       
      </div>
      <div className="login__wrapper login__wrapper--signup">
        <p className="signup__text">Have an account? <Link to="/login" className="signup__link">Log in</Link></p>
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

export default Register;