import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {loginUser} from '../redux/authReducer';
import axios from 'axios';
import ZeppiCloud from '../assets/ZeppiLogo/ZeppiCloud/ZeppiCloud';
import CloudSpan from '../assets/Clouds/CloudSpan/CloudSpan';
import PaperPlanes from '../assets/Planes/PaperPlanes/PaperPlanes';
import ArrowLeftIcon from '../assets/icons/systemIcons/ArrowLeftIcon';

function Signup() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleRegister = () => {
        if(password === confirm){
            axios.post('/auth/register', {username, firstName, lastName, phone, email, password}).then(res => {
                dispatch(loginUser(res.data))
                history.push('/dash')
            }).catch(err => {
                console.log(err)
                alert('Could not register with provided information.')
            })
        } else {
            alert('Passwords do not match.')
        }
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
                            <h1 className="AuthTitle">ACCOUNT SIGNUP</h1>
                            <div className="container__row justify-center">
                                <input 
                                    className="AuthInput"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="container__row justify-center">
                                <input 
                                    className="AuthInput"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}></input>
                            </div>
                            <div className="container__row justify-center">
                                <input 
                                    className="AuthInput"
                                    placeholder="Phone" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
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
                                    placeholder="Username" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)}></input>
                            </div>
                            <div className="container__row justify-center">
                                <input 
                                    className="AuthInput"
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className="container__row justify-center">
                                <input 
                                    className="AuthInput"
                                    placeholder="Confirm Password" 
                                    value={confirm} 
                                    onChange={(e) => setConfirm(e.target.value)}></input>
                            </div>
                            <div className="container__row justify-center">
                                <button className="AuthSubmit" onClick={handleRegister}>SIGN UP</button>
                            </div>
                            <div className="container__row justify-center align-center">
                                <h2 className="auth-form-link">Forgot password?</h2>
                            </div>
                            <div className="container__row justify-center align-center">
                                <div className="flex"> 
                                    <ArrowLeftIcon className="auth-form-link" height=".8rem"/>
                                    <h2 className="auth-form-link">Back to Login</h2>
                                </div>
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

export default Signup;