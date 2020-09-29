import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function AddressBook(props){

    const {user_a, id_a, user_b, id_b} = props.friend
    const [friendName, setFriend] = useState('')
    const [friendId, setId] = useState(0)
    const {user} = useSelector((state) => state.authReducer)
    const {username} = user

    const friend = (val1, val2) => {
        setFriend(val1)
        setId(val2)
    }
    
    useEffect(() => {
        if(user_a === username){
            return friend(user_b, id_b)
        } else if (user_b === username){
            return friend(user_a, id_a)
        }

    }, [user_a, id_a, user_b, id_b, username])


    return (
    <option value={friendId}>@{friendName}</option>
    )
}

export default AddressBook