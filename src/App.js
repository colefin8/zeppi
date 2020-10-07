import React from 'react';
import routes from './routes';
import {useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.scss';

function App() {
  
  let location = useLocation()

  return (
    <div className="App">
    Cole wuz here
    </div>
  );
}

export default App;
