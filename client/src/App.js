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

function App() {

  // call context api
  const { dispatch } = useContext(AuthContext);

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
          dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data })
      } )
      .catch( error => {
          dispatch({ type: "LOGOUT_USER" });
      } )

    } catch (error) {
     
    }

  }, [token] );


  return (
    <Routes>
      <Route path="/login" element={ <AuthRedirectUser><Login /></AuthRedirectUser> } />
      <Route path="/register" element={ <AuthRedirectUser><Register /></AuthRedirectUser> } />
      <Route path="/profile/:id" element={ <AuthenticateUser><Profile /></AuthenticateUser> } />
      <Route path="/" element={ <AuthenticateUser><Home /></AuthenticateUser> } />
    </Routes>
  );
}

export default App;
