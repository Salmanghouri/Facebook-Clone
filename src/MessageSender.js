import { Avatar } from '@material-ui/core';
import React from 'react'
import "./MessageSender.css";

function messageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="messangeSender">
            <div className="messageSender_top">


            </div>
            <div className="messageSender_bottom">
                <Avatar />
                <form>
                    <input className="MessageSender__input"
                    placeholder={'What is on your mind'}/>
                    
                    
                    <input placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="Submit" >
                        Hidden button
                    </button>
                </form>


            </div>
            
        </div>
    )
}

export default messageSender
