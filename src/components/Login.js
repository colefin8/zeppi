import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginUser} from '../redux/authReducer';
import axios from 'axios';
import ZeppiCloud from '../assets/ZeppiLogo/ZeppiCloud/ZeppiCloud';
import SingleCloud from '../assets/Clouds/SingleCloud/SingleCloud';
import CloudSpan from '../assets/Clouds/CloudSpan/CloudSpan';
import PaperPlanes from '../assets/Planes/PaperPlanes/PaperPlanes';

function Login() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        axios.post('/auth/login', {email, password}).then(res => {
            dispatch(loginUser(res.data))
            history.push('/map')
        }).catch(err => {
            console.log(err)
            alert('Could not log in.')
        })
    }

    return (
        <div className="Login">
                <div className="SignupRow">
                    <div className="SignupButton">
                
                    </div>
                </div>
                <div className="AuthForm">
                    <div className="container__row">
                        <div className="LoginForm">
                            <div className="container__row">
                                <div className="AuthLogo">
                                    <ZeppiCloud/>
                                </div>
                                <h1 className="AuthTitle">ACCOUNT LOGIN</h1>
                                <div className="container__row justify-center">
                                    <input 
                                        className="AuthInput"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="container__row justify-center">
                                    <input 
                                        className="AuthInput"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                                <div className="container__row justify-center">
                                    <button className="AuthSubmit" onClick={handleLogin}>LOGIN</button>
                                </div>
                                <div className="container__row justify-center">
                                    <h2 className="auth-form-link">Forgot password?</h2>
                                </div>
                                <div className="container__row justify-center">
                                    <h2 className="auth-form-link m-b-1">Dont have an account?</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="GraphicRow">
                    <div className="container__row size-h-3">
                        <PaperPlanes className="paper-planes"/>
                    </div>
                    <CloudSpan className="CloudSpan"/>
                </div>
        </div>
    )
}

export default Login;