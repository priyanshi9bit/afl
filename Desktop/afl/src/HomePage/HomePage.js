import React from 'react';
import AFL from '../Images/AFL.svg';
import '../Homepage/Homepage.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PopMach from './PopMach';
import Footer from '../Footer/Footer';
import Gallery from './Gallery';

function Homepage() {
    return (
        <div className="body">
            <div className="first">
                <ul class="navbar">
                <li><img src={AFL} /></li>
                <li><a href="#"><ArrowDropDownIcon />Change Profile</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#"><ArrowDropDownIcon />Login As</a></li>
                <li><button className='signup'>Sign Up</button></li>                          
            </ul>
            <br /><br /><br />
            <center><div className="heading1">an initiative of UIET and meitY</div></center>
            <center><div className="heading2">buy and sell your vehicle<br /> with us </div></center>
            <br />
            <center><button className="explore">Explore Now</button></center>
            
            <div className="searchbar">
                <div className="col">
                    <p classname="head">Location</p>
                    <p className='info'>sector 25, chandigarh </p>
                </div>
                <div className="col">
                    <p classname="head">Type Of Vehicle</p>
                    <p className='info'>Swaraj Tractors</p>
                </div>
                <div className="col">
                    <p classname="head">Range</p>
                    <p className='info'>2 lakh - 10 lakh</p>
                </div>
                <div className="col">
                    <button className="explore">Search</button>
                </div>
            </div>
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <PopMach />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <Gallery />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default Homepage;