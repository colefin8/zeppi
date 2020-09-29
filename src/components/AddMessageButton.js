import React from 'react';
import {Link} from 'react-router-dom';

import AddMessageIcon from '../assets/AddMessageIcon/AddMessageIcon';

const ConsoleButton = (props) => {
    return (
        <Link to="/newMessage" className="ConsoleButton">
            <AddMessageIcon className="SettingIcon"/>
        </Link>
    );
};
  
export default ConsoleButton;