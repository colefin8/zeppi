import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/friendReducer'
import User from './User'
import axios from 'axios';



function AddFriend() {

    const {user} = useSelector((state) => state.authReducer)
    const {userId} = user
    const {users} = useSelector((state) => state.friendReducer)
    const dispatch = useDispatch()
    const [nameSearch, setName] = useState('')
    const [results, setResults] = useState([])
    const [searching, setSearch] = useState(false)

    useEffect(() => {
        axios.get(`/friends/find/${userId}`).then(res => {
            dispatch(getUsers(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])

    const addFriend = (userOne, userTwo) => {
        axios.post(`/friends/newFriend`, {userOne, userTwo}).then(res => {
            dispatch(getUsers(res.data))
        }).catch(err => console.log(err))
    }

    const search = () => {
        const regex = new RegExp (`${nameSearch}`, 'gmi')
        setResults(users.filter(item => item.username.match(regex)))
        setName('')
        setSearch(true)
    }

    const resultList = results.map((user, index) => <div className="table-row"> <User key={index} user={user} addFriend={addFriend}/></div>)

    const userList = users.map((user, index) => <div className="table-row"> <User key={index} user={user} addFriend={addFriend}/></div>)

    return (
        <div className="AddFriend dashboard-page">
            {console.log(users)}
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">Find Friends</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <div className="container__col-22 container__col-offset-1">
                                        <input 
                                        value={nameSearch}
                                        placeholder="Search Users..."
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        className="page-input"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">See a friend?</p>
                        </div>
                        {searching ? 
                        <div className="table-content">
                            {resultList}
                        </div> :
                        <div className="table-content">
                            {userList} 
                        </div>}
                    </div>
                </div>
            </div>
        </div>

)
}

export default AddFriend;