import React from 'react'
import './Results.css'

export default function Results({queryData}) {
    //capitilizes first letter of word
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    //returns string of the accessibility 
    function accessibility(num) {
        if(num > .66){
            return "Not Very Accessible";
        } if(num > .29) {
            return "Moderately Accessible"
        } if(num < .3){
            return "Very Accessible"
        }
    }

    function price(num) {
        if(num > .66){
            return "High";
        } if(num > .29) {
            return "Moderate"
        } if(num < .3){
            return "Low"
        }
    }


    return (
        <div id="result-body">
            <div className="results-wrapper">
            <h1>Do This!</h1>
                <div className="result">Activity: {queryData.activity} </div>
                <div className="result">Type: {capitalizeFirstLetter(queryData.type)} </div>
                <div className="result">Participants: {queryData.participants} </div>
                <div className="result">Accessibility: {accessibility(queryData.accessibility)}</div>
                <div className="result">Price: {price(queryData.price)}</div>
            </div>
        </div>
    )
}
