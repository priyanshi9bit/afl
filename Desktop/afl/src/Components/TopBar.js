import React from "react";
import Afl from '../Images/AFL.svg';
import Avatar from 'antd/lib/avatar/avatar';
import './MainComponents.css';
import homePage from '../Images/homePage.svg';
import machineDetails from '../Images/machineDetails.svg';
import schedule from '../Images/schedule.svg';
import contacts from '../Images/contacts.svg';
import settings from '../Images/settings.svg';

function TopBar() {
  return (
    //  style={{height: '18px', top: 'calc(50% - 18px/2)',fontFamily: 'Rubik',fontStyle: 'normal',fontWeight: 'normal',fontSize: '14px',lineHeight: '17px',color: '#0A1033', letterSpacing:'0.25px'}}>Jonas Ferdinand </h5>
    //     <Avatar src="https://joeschmoe.io/api/v1/random" />

    <div>
      <div className="left_sider">
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
      <div className="right_content_layout">
        <div className="right_header_layout">
          <div className="over_view_text">Overview</div>
          <div>
            <center><img src={Afl} /></center>
          </div>
          <div className="right_view_area">
            <div className="search_icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="5.75"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                />
                <path
                  d="M11 11L15 15"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="notifications">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z"
                  fill="#BDBDBD"
                />
                <circle
                  cx="13"
                  cy="5"
                  r="3.75"
                  fill="#172578"
                  stroke="#DCE1F9"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="stick"></div>
            <div className="profile_disp">
              <div>Jones Fardinand</div>
              <Avatar src="https://joeschmoe.io/api/v1/random">
                JF
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;