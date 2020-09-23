import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {loginUser} from '../redux/authReducer';
import axios from 'axios';

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
        <div className="signup-container">
            <div></div>
            <h1>ACCOUNT SIGNUP</h1>
            <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}></input>
            <input 
                placeholder="Phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}></input>
            <input 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}></input>
            <input 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}></input>
            <input 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}></input>
            <input 
                placeholder="Confirm Password" 
                value={confirm} 
                onChange={(e) => setConfirm(e.target.value)}></input>
            <button onClick={handleRegister}>SIGN UP</button>
            <h2>Back to Login!</h2>
        </div>
    )
}

export default Signup;