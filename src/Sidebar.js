import { EmojiFlags, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatroomIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpendMoreOutlined from "@material-ui/icons/ExpandMore"







function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/105004551_881222059049481_367761390988446037_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEDvPT_r92vjlvv_MP3YhG7sImn1S6Sq5ywiafVLpKrnLPeT2ZXXusbTmfs91eUXNkDHwqB2vKREBel5PfOOPW-&_nc_ohc=nGO7Bg8p150AX99IyhB&_nc_ht=scontent.fkhi6-1.fna&oh=a02db3940409732c49cb91a52ba350da&oe=5FF9A2DF" 
            title="Salman Ghouri"/>
            <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatroomIcon} title="Messanger"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpendMoreOutlined} title="MarketPlace"/>
            
        </div>
    )
}

export default Sidebar
