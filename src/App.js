import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import './App.css';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selecUser } from './features/user/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selecUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))

      } else {
        dispatch(logout())
        navigate("/login");
      }
    });
  }, [dispatch])
  return (
    <div className="app">
      <Routes>
        {
          user == null ?
            (<Route path="/login" element={<LoginScreen />}></Route>)
            :
            <React.Fragment>
              <Route path="/" element={<Homescreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
            </React.Fragment>
        }
      </Routes>
    </div>
  );
}

export default App;
