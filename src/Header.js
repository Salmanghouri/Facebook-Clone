import React from 'react'
import "./Header.css";
import Searchicon from "@material-ui/icons/Search";

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

    <div className="header__middle"></div> 

    <div className="header__right"></div>    
    </div>;
}

export default Header


