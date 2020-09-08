import React from 'react'
import MainCards from './MainCards'
import ClientList from './ClientList'
import SideCards from './SideCards'

export default function MainContainer() {
    return (
        <div className="mainContainer">
            <span className="titleText">Dashboard</span>
            <div className="container">
                <div className="row">
                    <div className="col"><MainCards title="New Client" value={342} color="blue" /></div>
                    <div className="col"><MainCards title="Pending Request" value={2700} color="lightGreen" /></div>
                    <div className="col"><MainCards title="Total Client" value={2343} color="pink" /></div>
                </div>
            </div>

            <div className="row mainContainer__bottom">
                <div className=" col-7 mainContainer__bottomLeft">
                    <ClientList />
                </div>
                <div className=" col mainContainer__bottomRight">
                    <SideCards value={2343} title="Overall Performance" increaseValue={20} color="pink" />
                    <SideCards value={2343} title="Active Installation" increaseValue={20} color="lightGreen" />
                    <SideCards value={2343} title="Total Download" increaseValue={20} color="blue" />
                    <SideCards value={2343} title="Review/Ratings" increaseValue={20} color="purple" />
                </div>
            </div>
        </div>

    )
}
