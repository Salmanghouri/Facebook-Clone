import { EmojiFlags, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"







function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayname}/>
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
