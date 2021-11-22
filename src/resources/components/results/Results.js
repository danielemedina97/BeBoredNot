import React from 'react'
import './Results.css'

export default function Results({queryData}) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <>
            <h1>Do This!</h1>
            <div className="results">
                <div>Activity:<span className="label" id="activitySpan"> {queryData.activity}</span> </div>
                <div><span className="results" id="typeSpan">Type: {capitalizeFirstLetter(queryData.type)}</span> </div>
                <div><span className="results" id="participantsSpan">Participants: {queryData.participants}</span> </div>
                <div><span className="results" id="accessibilitySpan">Accessibility: {queryData.accessibility}</span> </div>
                <div><span className="results" id="priceSpan">Price: {queryData.price}</span> </div>
            </div>
        </>
    )
}
