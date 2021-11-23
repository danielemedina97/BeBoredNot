import React from 'react'
import './ActivityForm.css'
export default function ActivityForm({handleSubmit}) {
    return (
        <div id="wrapper">
            <h1>Specify an Activity</h1>
            <form className="activity-query" onSubmit={handleSubmit} style={{display: ''}}>
                <div className="activity-options">
                    {/*
                   <div className="input-field">
                        <label htmlFor="accessibility">Accessibility: </label>
                        <input className="activity" id="accessibility" type="text"></input>
                    </div>
                    */}
                    <div className="input-field">
                        <label htmlFor="type">Type: </label>
                        <select className="activity" id="type" type="text">
                            <option value="education">Education</option>
                            <option value="recreational">Recreational</option>
                            <option value="social">Social</option>
                            <option value="diy">DIY</option>
                            <option value="charity">Charity</option>
                            <option value="cooking">Cooking</option>
                            <option value="relaxation">Relaxation</option>
                            <option value="music">Music</option>
                            <option value="busy">Busy</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="participants">Participants: </label>
                        <select className="activity" id="participants" type="text">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    {/*}
                    <div className="input-field">
                        <label htmlFor="price">Price: </label>
                        <input className="activity" id="price" type="text"></input>
                    </div>
                */}
                </div>
                    <div>
                        <input id ="submit" type="submit" value="Get Activity"/>
                    </div>
            </form> 
        </div>
    )
}
