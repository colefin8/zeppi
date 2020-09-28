import React from 'react';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';
import PlusIcon from '../assets/icons/systemIcons/PlusIcon';

function AddFriend() {
    return (
        <div className="AddFriend dashboard-page">
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">Add Friend</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <div className="container__col-22 container__col-offset-1">
                                        <input 
                                        placeholder="Search Users..."
                                        type="text"
                                        className="page-input"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Filter:</p>
                        </div>
                        <div className="table-content">
                            <div className="table-row">  
                                <div className="snapshot">
                                    <div className="snapshot-content">
                                        <div className="snapshot-icon">
                                            {/* PUT USER ICON HERE */}
                                            <UserIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                                        </div>
                                        <div className="snapshot-info">
                                            <h1 className="body-blue">Username</h1>
                                            <h2 className="caption-blue m-t-50">@exampleUsername</h2>
                                        </div>
                                    </div>
                                    <div className="snapshot-action">
                                        <PlusIcon onClick={() => {}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default AddFriend;