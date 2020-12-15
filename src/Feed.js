import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';


function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessangeSender/>
              {/*Messange Sender */}

        </div>
    )
}

export default Feed
