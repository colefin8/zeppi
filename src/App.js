import React, {useEffect} from 'react';
import routes from './routes';
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {getUser} from './redux/authReducer'
import Navbar from './components/Navbar'
import './App.scss';
import axios from 'axios';

function App() {
  
  let location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
      dispatch(getUser(res.data))
    }).catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="App">
      {(location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login') ? <Navbar/> : null}
      {routes}
    </div>
  );
}

export default App;
