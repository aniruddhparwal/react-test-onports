import React from 'react'
import ClientTableEntry from './ClientTableEntry'
import topList from './../data/top10details.json'

function ClientList() {
    console.log("aaa", topList)
    return (
        <div className="clientList">
            <div className="clientList__heading">Top 10 Clients</div>
            <hr />
            <div className="clientList__tableHead">
                <span>Shop Name</span>
                <span>Service Status</span>
                <span>Billing</span>
                <span>Paid</span>
            </div>
            {topList.map((item) => { return (<ClientTableEntry name={item.name} serviceStatus={item.serviceStatus} billing={item.billing} paid={item.Paid} />) })}

        </div>
    )
}

export default ClientList
