import React from 'react'
import './Results.css'

export default function Results() {
    return (
        <>
            <h1>Do This!</h1>
            <div className="results">
                <div>Activity:<span className="label" id="activitySpan"></span> </div>
                <div><span className="results" id="typeSpan">Type:</span> </div>
                <div><span className="results" id="participantsSpan">Participants:</span> </div>
                <div><span className="results" id="accessibilitySpan">Accessibility:</span> </div>
                <div><span className="results" id="priceSpan">Price:</span> </div>
            </div>
        </>
    )
}
