import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Story.css";

function Story({images, profileSrc, title }) {
    return (
        <div style={{backgroundImage: 'url(${image})'  }}
         className="Story">
            <Avatar src={profileSrc}/>
            <h4>{title}</h4>

        </div>
    )
}

export default Story
