import React, { useState } from 'react';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import recovery from './recovery.png';
import './PasswordRevocery.scss';
import axios from 'axios';

const PasswordRevovery = () => {

    // create state
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState({
        type: '',
        msg: '',
        status: false
    });

    // submit
    const handleRecoveryPassword = async (e) => {
        e.preventDefault();
        
        if(!email){
            
            setMsg({
                type: 'danger',
                msg: 'Please enter your email',
                status: true
            });

        }else {

            await axios.post(`http://localhost:5050/api/user/recovery-password`, { email })
            .then( res => {

                setMsg({
                    type: 'success',
                    msg: 'A recovery email link send.',
                    status: true
                });

            } )
            .catch( error => {
                
                setMsg({
                    type: 'danger',
                    msg: 'Email is not exists!',
                    status: true
                });

            } );

        }

    }

  return (
    <>
        <header className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <img className='header__logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </div>
            </div>
        </header>

        <div className="login__container">
            <div className="login__wrapper">
                <a href="#" className="login__logo--link">
                <img src={ recovery } alt="" className="login__logo" />
                </a>
                <h5 className='trouble__logging'>Trouble Logging In?</h5>
                <p className='recover__text'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                { msg.status && <p className={`alert alert-${msg.type}`} role="alert">{ msg.msg }</p> }
                <form onSubmit={ handleRecoveryPassword } className="login__form">

                    <input type="text" name='email' className="login__input" placeholder='Email, Phone, or Username' value={ email } onChange={ e => setEmail(e.target.value) } />
                    <button type='submit' className="login__button">Send Login Link</button>
                </form>
                <div className="divider">
                OR
                </div>
                <Link to="/register" className="login__with-facebook">Create New Account</Link>

                <Link to="/login" className="backto__login">Back To Login?</Link>
            </div>

            <FooterAuth />
        </div>
    </>
  )
};

export default PasswordRevovery;