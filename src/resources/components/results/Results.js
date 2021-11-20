import React from 'react'
import './Results.css'

export default function Results() {
    return (
        <>
            <h1>Do This!</h1>
            <div className="results">
                <div><span className="label">Activity:</span> </div>
                <div><span className="label">Type:</span> </div>
                <div><span className="label">Participants:</span> </div>
                <div><span className="label">Accessibility:</span> </div>
                <div><span className="label">Price:</span> </div>
            </div>
        </>
    )
}
