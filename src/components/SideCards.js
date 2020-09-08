import React from 'react'

function SideCards({ value, title, increaseValue, color }) {
    return (
        <div className="sideCards">
            <div className="sideCards__info">
                <div className="sideCards__details">
                    <span className="sideCards__title">{value}</span>
                    <span className="sideCards__value">{title}</span>
                </div>
                <div className="sideCards__progressBar">
                    <div className={`sideCards__progressBarActive ${color}`} />
                </div>
                <span className="sideCards__comment">{increaseValue}% Higher than Last Month</span>
            </div>

        </div >
    )
}

export default SideCards
