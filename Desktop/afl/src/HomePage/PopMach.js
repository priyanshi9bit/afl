import React from 'react';
import './Homepage.css';
import Tharr from '../Images/Tharr.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import car from '../Images/car.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function PopMach() {
    return (
        <div className="popmach">
            <div className="info">
                <p className='title'>POPULAR MACHINES</p>
                <p className='subtitle'>from more powerfull to less, choose the best with us.</p>
                <br /><br /><br />
                <div className="arrows">
                    <button className="blackarrow"><ArrowBackIcon fontSize='large' style={{ color: 'white' }} /></button>
                    <button className="whitearrow"><ArrowForwardIcon fontSize='large' /></button>
                </div>
                <br /><br /><br />
                <div className="cards">
                    <div className="card">
                        <img src={Tharr} />
                        <p className='p1'>02 </p> <br />
                        <p className='p2'>Tharr</p>
                    </div>
                    <div className="card">
                        <img src={Tharr} />
                        <p className='p1'>02 </p> <br />
                        <p className='p2'>Tharr</p>
                    </div>
                    <div className="card">
                        <img src={Tharr} />
                        <p className='p1'>02 </p> <br />
                        <p className='p2'>Tharr</p>
                    </div>
                    <div className="card">
                        <img src={Tharr} />
                        <p className='p1'>02 </p> <br />
                        <p className='p2'>Tharr</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />
            <br /><br /><br /><br />


            <div className="specialOffers">
                <div className="info">
                    <p className='title' style={{textAlign: 'center'}}>Special Offers</p> <br />
                    <p className='subtitle' style={{textAlign:'center'}}>Cars in which your every moment will be memorable.Open your horizon with our manufactured car.We deliver what we promise.<br />Wonderful experience provider four-wheelers.</p>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div className="cards">
                        <div className="card">
                            <img src={car} />
                            <button className='offer'>30% off</button>
                            <p className='p2'>Rs 500,000</p>
                            <span className='details'>details xyz...  details xyz...
                                <br /> details xyz... details xyz...
                            </span>
                            <p className='location'><LocationOnOutlinedIcon font /> 23d/3j sector 25, chandigharh</p>
                            <button className='signup' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', float:'right', marginRight:'5px'}}>View Details</button>
                        </div>

                        <div className="card">
                            <img src={car} />
                            <button className='offer'>30% off</button>
                            <p className='p2'>Rs 500,000</p>
                            <span className='details'>details xyz...  details xyz...
                                <br /> details xyz... details xyz...
                            </span>
                            <p className='location'><LocationOnOutlinedIcon font /> 23d/3j sector 25, chandigharh</p>
                            <button className='signup' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', float:'right', marginRight:'5px'}}>View Details</button>
                        </div>

                        <div className="card">
                            <img src={car} />
                            <button className='offer'>30% off</button>
                            <p className='p2'>Rs 500,000</p>
                            <span className='details'>details xyz...  details xyz...
                                <br /> details xyz... details xyz...
                            </span>
                            <p className='location'><LocationOnOutlinedIcon font /> 23d/3j sector 25, chandigharh</p>
                            <button className='signup' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', float:'right', marginRight:'5px'}}>View Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopMach;