import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { VscHome } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import Logo from './reset_logo.png';
import './ResetPassword.scss';
import { useState } from 'react';
import { createToast } from '../../utility/toast';

const ResetPassword = () => {

  // get token
  const { token } = useParams();
  const navigate = useNavigate();

  // useState
  const [input, setInput] = useState({
    new_password: '',
    new_password_confirmation: ''
  })


  // hanlde input
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))
  }

  // handle form submit
  const handleResetForm = async (e) => {
    e.preventDefault();

    if( !input.new_password ){
      createToast("Please insert a password");
    }else if( input.new_password !== input.new_password_confirmation ){
      createToast("Password and confirm password doesn't match!");
    }else {

      await axios.post('http://localhost:5050/api/user/reset-password', {
        password: input.new_password,
        token
      })
      .then( res => {

        setInput({
          new_password: '',
          new_password_confirmation: ''
        });

        createToast('Password changed successfully');
        navigate('/login');

      })
      .catch( error => {
        createToast('Token expired, please try again');
      } );

    }

  }


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
              <form onSubmit={ handleResetForm } className="reset__form">
                <div className="my-3">
                  <label htmlFor="">New password:</label>
                  <input type="password" name='new_password' onChange={ handleInput } value={ input.new_password } />
                </div>
                <div className="my-3">
                  <label htmlFor="">New password confirmation:</label>
                  <input type="password" name='new_password_confirmation' onChange={ handleInput } value={ input.new_password_confirmation } />
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