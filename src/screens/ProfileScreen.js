import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selecUser } from '../features/user/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/user/userSlice'


const ProfileScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(selecUser);
    const navigate = useNavigate();
    const SignOut = () => {
        signOut(auth).then(() => {
            dispatch(logout);
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profile'>
                    <div className='profile_logo'>
                        <img className='profile' src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png' />
                    </div>
                    <div className='profile_details'>
                        <p>{user.email}</p>
                        <h2>Plans</h2>
                        <button onClick={SignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen