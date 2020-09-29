import React from 'react';
import {Link} from 'react-router-dom';

import AddFriendIcon from '../assets/AddFriendIcon/AddFriendIcon';

const AddFriendButton = (props) => {
    return (
        <Link to="/addFriends" className="ConsoleButton">
            <AddFriendIcon className="SettingIcon"/>
        </Link>
    );
};
  
export default AddFriendButton;