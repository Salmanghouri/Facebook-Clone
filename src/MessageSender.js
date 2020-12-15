import { Avatar } from '@material-ui/core';
import React from 'react'
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function messageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="messangeSender">
            <div className="messageSender_top">
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
            <div className="messageSender_bottom">
               <div className="messageSender__Option">
                   <VideocamIcon style={{color: "red"}}/>
                   <h3>Live Video</h3>
                    </div>

            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
            


            </div>
            
        </div>
    )
}

export default messageSender
