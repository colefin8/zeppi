import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginUser} from '../redux/authReducer';
import axios from 'axios';
import ZeppiCloud from '../assets/ZeppiLogo/ZeppiCloud/ZeppiCloud';

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
            <div className="LoginForm">
            <div className="container__row">
   
                <div className="AuthLogo"><ZeppiCloud/></div>
                
                
                <h1 className="subtitle-white container__col-12">LOGIN TO YOUR ACCOUNT</h1>

                <input 
                    className="input container__col-12"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input 
                    className="input container__col-12"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <button className="container__col-12" onClick={handleLogin}>LOGIN</button>
                <h2 className="container__col-12">Forgot password?</h2>
            </div>
            </div>
        </div>
    )
}

export default Login;