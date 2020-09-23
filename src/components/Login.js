import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginUser} from '../redux/authReducer';
import axios from 'axios';

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
        <div>
            <div></div>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            <input 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>LOGIN</button>
            <h2>Forgot password?</h2>
        </div>
    )
}

export default Login;