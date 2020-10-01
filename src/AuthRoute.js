import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getUser} from './redux/authReducer';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'

const AuthRoute = (props) => {
    const {component: Component, 
        ...rest} = props;
        const dispatch = useDispatch()
        const {isAuthenticated} = useSelector((state) => state.authReducer);

        useEffect(() => {
            axios.get('/auth/user').then(res => {
              console.log(res.data)
              dispatch(getUser(res.data))
            }).catch(err => console.log(err))
          }, [dispatch, isAuthenticated])
          
    if(isAuthenticated) {
        return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
    } else {
        return (<Redirect push to={'/login'} />);
    }
}

export default AuthRoute;