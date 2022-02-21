import React from 'react';
import './Form.css';
import Afl from '../Images/AFL.svg';
import Tractor from '../Images/tractor.png';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import warranty from "../Images/warranty.svg";
import loyalty from "../Images/loyalty.svg";
import offers from "../Images/offers.svg";


function Form() {
    return (
        <div className="form">
            <div className="left">
                <div className="heading">
                    <p>Form</p>
                </div>
                <div className="btns">
                    <button className='btn-active'>
                        Machine Name
                    </button>
                    <button className='btn'>
                        Location
                    </button>
                    <button className='btn'>
                        Insurance
                    </button>
                    <button className='btn'>
                        Invoice of the vehicle
                    </button>
                </div>
                <div className="details">
                    <div className="col-1">
                        <img src={Tractor} />
                        <br />
                        <button className='upload'>
                            Upload Machine Photos <CloudUploadOutlinedIcon />
                        </button>
                        <div className="textbox">
                            <textarea class="textbox" rows="5" id="textbox" placeholder='    Description' ></textarea>
                        </div>
                        <div className="submit">
                            Submit
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="offerTag">
                            <div className="offers">
                               <p><img src={offers} /> Offers 40% Available</p>
                            </div>
                            <button className="viewOffers">View</button>
                        </div>
                        <div className="warrantyTag">
                            <div className="offers">
                               <p><img src={warranty} /> 3 Year Warranty</p>
                            </div>
                            <button className="viewOffers">View</button>
                        </div>
                        <div className="loyaltyTag">
                            <div className="loyalty">
                               <p><img src={loyalty} /> + Loyalty Card</p>
                            </div>
                            <button className="viewOffersLoyalty">View</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="right">
                <center><img src={Afl} /> </center>
            </div>
        </div>
    )
}

export default Form;