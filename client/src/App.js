import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.scss';
import AuthenticateUser from './middlewares/AuthenticateUser';
import AuthRedirectUser from './middlewares/AuthRedirectUser';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import LoadingBar from 'react-top-loading-bar';
import LoaderContext from './context/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createToast } from './utility/toast';
import Verify from './components/Verify/Verify';
import PasswordRevovery from './pages/PasswordRecovery/PasswordRevovery';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {

  // get atuhContext api
  const { dispatch } = useContext(AuthContext);

  // get loaderContext
  const { loaderState, loaderDispatch } = useContext(LoaderContext);

  // get tokeh
  const token = Cookies.get('token');


  useEffect( () => {

    try {
      
      axios.get('http://localhost:5050/api/user/me', {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then( res => {

        if(res.data.isVerified){
          dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data })
        }else {
          createToast("Please verify your account.");
          Cookies.remove('token');
        }

      } )
      .catch( error => {
          dispatch({ type: "LOGOUT_USER" });
      } )

    } catch (error) {
     
    }

  }, [token] );



  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={ loaderState }
        onLoaderFinished={() => loaderDispatch({ type: "LOADER_END" }) }
      />

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

      <Routes>
        <Route path="/login" element={ <AuthRedirectUser><Login /></AuthRedirectUser> } />
        <Route path="/register" element={ <AuthRedirectUser><Register /></AuthRedirectUser> } />
        <Route path="/profile/:id" element={ <Profile /> } />
        <Route path="/" element={ <AuthenticateUser><Home /></AuthenticateUser> } />
        <Route path="/user/:id/verify/:token" element={ <Verify /> } />
        {/* Send OTP Page */}
        {/* <Route path="/verify/:id" element={ <Verify /> } /> */}
        <Route path="/recovery-password" element={ <PasswordRevovery /> } />
        <Route path="/recovery-password/:token" element={ <ResetPassword /> } />
      </Routes>
    </>
    
  );
}

export default App;
