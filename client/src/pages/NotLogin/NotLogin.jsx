import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import '../Login/Login.scss';
import './NotLogin.scss';


const NotLogin = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="login__container">
      <div className="not-login__wrapper">
        <div className="not-login__slider">
          <div className="no-login__image">
            <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
            <div className="no-login__slider-image">
              <Carousel fade indicators={false} controls={false}>
                <Carousel.Item>
                  <img
                    className=""
                    src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=""
                    src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=""
                    src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=""
                    src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
     
            </div>
          </div>
          
        </div>
        <div className="wrapper">
          <div className="login__wrapper">
            <a href="#" className="login__logo--link">
              <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login__logo" />
            </a>
            <form action="#" className="login__form">

                <input type="text" className="login__input" placeholder='Phone number, username, or email' />
                <input type="password" className="login__input" placeholder='Password' />
        
            </form>
            <button className="login__button">Log In</button>
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
        </div>
        
      </div>
      
      <FooterAuth />
    </div>
  )
};

export default NotLogin;