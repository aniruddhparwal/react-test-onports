import React from 'react'
import SideNav from './SideNav'
import MainContainer from './MainContainer'

function BodyContainer() {
    return (
        <div className="bodyContainer">
            <SideNav />
            <MainContainer />
        </div>
    )
}

export default BodyContainer
