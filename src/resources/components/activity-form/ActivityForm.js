import React from 'react'
import './ActivityForm.css'
export default function ActivityForm({handleSubmit}) {
    return (
        <>
            <h1>Specify an Activity</h1>
            <form className="activity-query" onSubmit={handleSubmit} style={{display: ''}}>
                <div className="activity-options">
                    <div>  
                        <label htmlFor="activity">Activity: </label>
                        <input className = "activity" id="activity" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="accessibility">Accessibility: </label>
                        <input className="activity" id="accessibility" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="type">Type: </label>
                        <input className="activity" id="type" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="participants">Participants: </label>
                        <input className="activity" id="participants" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input className="activity" id="price" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="key">Key: </label>
                        <input className="activity" id="key" type="text"></input>
                    </div>
                </div>
                    <div>
                        <input id ="submit" type="submit" value="Get Activity"/>
                    </div>
            </form> 
        </>
    )
}
