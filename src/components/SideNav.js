import React from 'react'
import dashboard from "./../images/dashboard.png"
import shops from "./../images/shop.png"
import settings from "./../images/settings.png"
import user from "./../images/user.png"
import account from "./../images/account.png"
import history from "./../images/history.png"

function SideNav() {
    return (
        <div className="sideNav">
            <div className="sideNav__entry active">
                <img src={dashboard} alt="" />
                <span className="sideNav__title ">Dashboard</span>
            </div>
            <div className="sideNav__entry">
                <img src={shops} alt="" />
                <span className="sideNav__title">Shops</span>
            </div>
            <div className="sideNav__entry">
                <img src={user} alt="" />
                <span className="sideNav__title">Users</span>
            </div>
            <div className="sideNav__entry">
                <img src={account} alt="" />
                <span className="sideNav__title">Account</span>
            </div>
            <div className="sideNav__entry">
                <img src={settings} alt="" />
                <span className="sideNav__title">Settings</span>
            </div>
            <div className="sideNav__entry">
                <img src={history} alt="" />
                <span className="sideNav__title">History</span>
            </div>
        </div>
    )
}

export default SideNav
