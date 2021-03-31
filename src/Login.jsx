import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {auth,provider} from './Firebase.js'
import { login } from './features/appSlice';

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid
            }))
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.freepnglogos.com/uploads/snapchat-icon-logo-png-15.png" alt=""/>
                <Button variant='outlined' onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
