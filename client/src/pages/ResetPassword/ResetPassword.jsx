import React from 'react';
import { VscHome } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import Logo from './reset_logo.png';
import './ResetPassword.scss';

const ResetPassword = () => {
  return (
    <>
      <div className="reset__password-contianer">
        <header className='reset__header'>
          <div className="header__wrapper">
            <a href="#" className='header__left-icon'><VscHome className="header__icon" /></a>
            <a href="#" className="header__middle-link">
              <img src={ Logo } alt="" className='header__logo' />
            </a>
            <a href="#" className="header__right-link">
                <FaRegUser className="header__user-icon" />
                <strong className='header__user-text'>Log in</strong>
              </a>
          </div>
        </header>
        <section className="boody__section">
          <div className="body__wrapper">
            <div className="body__left"></div>
            <div className="body__right">
              <h1 className='body__logo'>Instagram</h1>
              <div id="alerts" className="alerts">
                <p className="alert__red">Create a password at least 6 characters long.</p>
              </div>
              <div className="divider"></div>
              <form action="#" className="reset__form">
                <div className="my-3">
                  <label htmlFor="">New password:</label>
                  <input type="password" name='new_password' />
                </div>
                <div className="my-3">
                  <label htmlFor="">New password confirmation:</label>
                  <input type="password" name='new_password_confirmation' />
                </div>
                <div className="my-3">
                 <button type='submit' className="reset__button">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className='reset__footer'>
          <div className="footer__wrapper">
            <a href="#" className="footer__about-us">ABOUT US</a>
            <a href="#" className="footer__support">SUPPORT</a>
            <a href="#" className="footer__press">PRESS</a>
            <a href="#" className="footer__api">API</a>
            <a href="#" className="footer__jobs">JOBS</a>
            <a href="#" className="footer__privacy">PRIVACY</a>
            <a href="#" className="footer__terms">TERMS</a>
            <p className="copyright__text">© 2022 INSTAGRAM</p>
          </div>
        </footer>
      </div>
    </>
  )
};

export default ResetPassword;