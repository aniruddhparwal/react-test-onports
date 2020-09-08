import React from 'react'

function ClientTableEntry({ name, serviceStatus, billing, paid }) {
    return (
        <div className="clientTableEntry">
            <img src="https://picsum.photos/100/100" alt="" />
            <div className="clientTableEntry__name">{name}</div>
            <div className={`clientTableEntry__seviceStatus ${serviceStatus === "Done" ? "green" : "red"}`}>{serviceStatus}</div>
            <div className="clientTableEntry__billing">{billing}/-</div>
            <div className={`clientTableEntry__paid ${paid === "Pay" ? "green" : "red"}`}>{paid}</div>
        </div>
    )
}
export default ClientTableEntry

