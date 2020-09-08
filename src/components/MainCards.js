import React from 'react'

function MainCards({ title, value, color }) {
    return (
        <div className="mainCards">
            <div className="mainCards__info">
                <div className="mainCards_details">
                    <span className="mainCards__title">{title}</span>
                    <span className={`mainCards__value text${color}`} >{value}</span>
                </div>
                <div className="mainCards__progressBar">
                    <div className={`mainCards__progressBarActive ${color}`} />
                </div>
            </div>
        </div>
    )
}

export default MainCards
