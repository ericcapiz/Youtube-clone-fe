import React from 'react';
import  YouTubeIcon  from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="navBarContainer">
            <div className="leftNav">
                <button id="sidebarToggle">
                    <MenuIcon id="icon"/>
                </button>
                <YouTubeIcon style={{color:'red'}} id="icon" />
                <h1>YouTube</h1>
            </div>
            <div className="centerNav">
                <input className="searchBar" placeholder="Search" type="text" />
                <button className="searchBarBtn">
                    <SearchIcon className="searchIcon" />
                </button>
            </div>
            <div className="rightNav">
            <button className="navIcon">
                <VideoCallIcon id="icon" />
            </button>
            <button className="navIcon">
                <AppsIcon id="icon" />
            </button>
            <button className="navIcon">
                <NotificationsIcon id="icon" />
            </button>
            <button className="profilePic">
                profile image
            </button>
            </div>
        </div>
    )
}

export default Navbar;