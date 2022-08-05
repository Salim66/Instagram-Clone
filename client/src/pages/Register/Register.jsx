import React,  { useState }  from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import FooterAuth from '../../components/FooterAuth/FooterAuth';
import swal from 'sweetalert';
import '../Login/Login.scss';
import './Register.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  // Start for form fields
  const [input, setInput] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });

  // Create toast
  const createToast = (msg) => {
    toast.error(msg);
  }

  //handle Input
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))
  }

  // handle user register form
  const handleUserRegisterForm = (e) => {
    e.preventDefault();
    
    try {
      
      if( !input.email || !input.name || !input.username || !input.password ){
        createToast("All fields are required!");
        // swal ( "Oops" ,  "All fields are required!" ,  "error" )
      }else {
        alert('Done');
      }

    } catch (error) {
      
    }

  }

  return (
    <div className="login__container auth__container--register">
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
        <p className="register__text">
          Sign up to see photos and videos from your friends.
        </p>
        <a href="#" className="register__with--facebook"><AiFillFacebook className='rfb__icon' /> Log in with facebook</a>
        <div className="divider">
          OR
        </div>

        <form onSubmit={ handleUserRegisterForm } className="login__form">
          <input type="text" name='email' className="login__input" onChange={ handleInput }  placeholder='Mobile Number or Email' value={ input.email } />
          <input type="text" name='name' className="login__input" onChange={ handleInput } placeholder='Full Name' value={ input.name } />
          <input type="text" name='username' className="login__input" onChange={ handleInput } placeholder='Username' value={ input.username } />
          <input type="password" name='password' className="login__input" onChange={ handleInput } placeholder='Password' value={ input.password } />
          <p className="register__top-text">
            People who use our service may have uploaded your contact information to Instagram. Learn More
          </p>
          <p className="register__bottom-text">
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
          </p>
          <button type='submit' className="login__button">Sign up</button>
        </form>
        
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