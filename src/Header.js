import React from 'react'
import "./Header.css";
import Searchicon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscribtionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";




function Header() {
    return <div className="header">
    <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/124/124010.svg" 
        alt=""
        />
        <div className="header__input">
            <Searchicon />
            <input type="text"/>

        </div>
    </div>
    

    <div className="header__center">
    <div className="header__option
    header__option--active">
        <HomeIcon fontSize="Large"/>    
        </div> 
        <div className="header__option">
        <FlagIcon fontSize="Large"/>
        </div>   
        <div className="header__option">
        <SubscribtionsOutlinedIcon fontSize="Large"/>
        </div>
        <div className="header__option">
        <StorefrontOutlined fontSize="Large"/>
        </div>
        <div className="header__option">
        <SupervisedUserCircleIcon fontSize="Large"/>
        </div> 
        
    </div> 

    <div className="header__right">
        <div className="header__info">
            <Avatar />
            <h4>Salman Ghouri</h4>
        </div>
        <IconButton>
            <AddIcon />
        </IconButton>
        <IconButton>
            <ForumIcon />
        </IconButton>
        <IconButton>
            <NotificationActiveIcon />
        </IconButton>
        <IconButton>
            <ExpandMoreIcon />
        </IconButton>


        </div>    
    </div>
}

export default Header


