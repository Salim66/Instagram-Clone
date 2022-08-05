import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthenticateUser from './middlewares/AuthenticateUser';
import AuthRedirectUser from './middlewares/AuthRedirectUser';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

function App() {
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
