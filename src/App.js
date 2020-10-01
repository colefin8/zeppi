import React from 'react';
import routes from './routes';
import {useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.scss';

function App() {
  
  let location = useLocation()

  return (
    <div className="App">
      {(location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login') ? <Navbar/> : null}
      {routes}
    </div>
  );
}

export default App;
