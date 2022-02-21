import React from 'react';
import './Billed.css';
import payOpts from '../Images/payOpts.svg';
// import visa from '../Images/visa.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import warranty from "../Images/warranty.svg";
import loyalty from "../Images/loyalty.svg";
import offers from "../Images/offers.svg";
import Red_truck from "../Images/Red_truck.png";

function Billed() {
  return (
    <div className="billed">
      <div className="left">
        
        <ol class="progtrckr" data-progtrckr-steps="3">
          <li class="progtrckr-done">SHIPPING</li>
          <li class="progtrckr-done">BILLED</li>
          <li class="progtrckr-todo">PAYMENT</li>
        </ol>
        
        <br /><br /><br />
        <span className='headings'>Payment Method</span>
        <br /><br />
        <img src={payOpts} />
        <div className="headings">Payment Details</div>
        <div className="inputs">
          <input type="text" id="name" name="name" placeholder='Enter Name on Card' /><br />
          <input type="" id="cardNum" name="cardNum" placeholder='Card Number' /><br />
          <input type="date" id="date" name="date" placeholder='Expire Date ' />
          <input type="" id="cvv" name="cvv" placeholder='CVV' />
        </div>
        <br /><br />
        <div className="btns">
          <button className='back'>Back</button>
          <button className='cnfPay'>Confirm Payment ₹ 1,60000</button>
          <ArrowDropDownIcon fontSize='large' />
        </div>

        <p className='tndC'>
          Terms & Conditions <br />
          Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and Business Standard Private Limited.
        </p>
      </div>
      <div className="right">
        <p className="product_name">
          CARMAGEDDON
          <br />
          ₹ 1,60000
        </p>
        <img src={Red_truck} />
        <div className="buttons">
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
  );
}

export default Billed;
