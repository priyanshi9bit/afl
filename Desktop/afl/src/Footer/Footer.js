import React from 'react';
import AFL from '../Images/AFL.svg';
import facebook from '../Images/facebook.svg';
import google from '../Images/google.svg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="left_side">
                <br /><br /><br />
                <img src={AFL} />
                <br /><br /><br />
                <div className="notif">
                    <img src={facebook} />
                    <img src={google} />
                    <SearchIcon fontSize='large' />
                    <NotificationsIcon fontSize='large' />
                </div>
            </div>
            <div className="right_side">
                <div className="column">
                        <p className="title">infomation</p>
                        <br/>
                        <p className='text'>
                        car can describe <br />
                        where you are <br />
                        going ,like <br/>
                        adfljioajdllojodll<br />
                        dasljadfljsdf <br />
                        dsflkjsdffjlf
                        </p>                    
                </div>
                <div className="column">
                        <p className="title">Helpful Links</p>
                        <br/>
                        <p className='text'>
                        car can describe <br />
                        where you are <br />
                        going ,like <br/>
                        adfljioajdllojodll<br />
                        dasljadfljsdf <br />
                        dsflkjsdffjlf
                        </p>                    
                </div>
                <div className="column">
                        <p className="title">Contact</p>
                        <br/>
                        <p className='text'>
                        car can describe <br />
                        where you are <br />
                        going ,like <br/>
                        adfljioajdllojodll<br />
                        dasljadfljsdf <br />
                        dsflkjsdffjlf
                        </p>                    
                </div>
            </div>
        </div>
    )
}

export default Footer;