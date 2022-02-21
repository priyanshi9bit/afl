import React from "react";
import Afl from '../Images/AFL.svg';
// import { Avatar } from 'antd';
import Avatar from '@mui/material/Avatar';
import './MainComponents.css';
import homePage from '../Images/homePage.svg';
import machineDetails from '../Images/machineDetails.svg';
import schedule from '../Images/schedule.svg';
import contacts from '../Images/contacts.svg';
import settings from '../Images/settings.svg';


function SideBar() {
  return (
    <div>
    <div className="left_sider">
      <div className="left_sider_info">
      <Avatar sx={{width:'50%',height:'50%',marginLeft:'16px',marginTop:'54px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <p>Alexa Smith</p>
      <span>alexasmith032@gmail.com </span>
      </div>
        <div className="sider_menu">            
          {/* <Link to="/"> */}
            <div tabIndex={1} className='homePage'>
              <img src={homePage} style={{ marginRight: "8px" }}></img>
              Home Page
            </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div tabIndex={1} className='machineDetails'>
              <img src={machineDetails} style={{ marginRight: "8px" }}></img>
              Machine Details
            </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div tabIndex={1} className='schedule'>
              <img src={schedule} style={{ marginRight: "8px" }}></img>
              Schedule
            </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div tabIndex={1} className='contacts'>
              <img src={contacts} style={{ marginRight: "8px" }}></img>
              Connections
            </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div tabIndex={1} className='settings'>
              <img src={settings} style={{ marginRight: "8px" }}></img>
              Settings
            </div>
          {/* </Link> */}
          
          
        </div>
      </div>    
  </div>
);
}

export default SideBar;