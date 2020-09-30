import React from 'react';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';

function Account() {
    return (
        <div className="Account dashboard-page">
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">Account</h1>
                </div>
                <div className="page-content">
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Edit Info</p>
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
                                </div>
                            </div>
                            <div className="table-row">  
                                <div className="snapshot">
                                    <div className="snapshot-content m-l-3">
                                        <div className="snapshot-info">
                                            <h1 className="body-blue">Email</h1>
                                            <h2 className="caption-blue m-t-50">example@email.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-row">  
                                <div className="snapshot">
                                    <div className="snapshot-content m-l-3">
                                        <div className="snapshot-info">
                                            <h1 className="body-blue">Phone</h1>
                                            <h2 className="caption-blue m-t-50">(123) 456-7890</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-row">  
                                <div className="snapshot">
                                    <div className="snapshot-content m-l-3">
                                        <div className="snapshot-info">
                                            <h1 className="body-blue">First Name</h1>
                                            <h2 className="caption-blue m-t-50">Jane</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-row">  
                                <div className="snapshot">
                                    <div className="snapshot-content m-l-3">
                                        <div className="snapshot-info">
                                            <h1 className="body-blue">Last Name</h1>
                                            <h2 className="caption-blue m-t-50">Doe</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Password</p>
                        </div>
                        <div className="table-content m-t-1">
                            <button className="btn-lg-red  m-h-auto">Reset Password</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Account;