import React from 'react';

import PlusIcon from '../../assets/icons/systemIcons/PlusIcon';

const ConsoleButton = (props) => {
    return (
        <div className={props.isOpen === true ? "ConsoleButton-active" : "ConsoleButton"}>
            <PlusIcon width="2.5rem" height="2.5rem" className="SettingIcon" onClick={e => props.handleClick(e)}/>
        </div>
    );
};
  
export default ConsoleButton;