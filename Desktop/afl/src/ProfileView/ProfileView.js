import React from "react";
import "./ProfileView.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Avatar } from 'antd';
import { EditOutlined, ShareAltOutlined, ArrowLeftOutlined } from "@ant-design/icons/lib/icons";
import Afl from './../Images/AFL.svg';

export default function ProfileView() {
  return (
    <>
      <div className="prof_wrapper">
      <div className="div" class='left' style={{paddingLeft:'1%',paddingTop:'1%', cursor: 'pointer'}}><h2><ArrowLeftOutlined /></h2></div>
      <center><h3 style={{fontFamily: 'Rubik', fontStyle: 'Regular', fontSize: '49px', lineHeight: '58px', color:'#0A1033'}}>Profile</h3></center>
          <Container className="profile_wrapper"  style={{ display: "flex", justifyContent: "space-evenly", paddingTop: '3%', columnGap: "10px", flexWrap: 'wrap' }}>            
           <div className="left">
             <div className="row">
             <Avatar src="https://joeschmoe.io/api/v1/random" size='large' shape="circle" style={{cursor: 'pointer' }}/>
             </div>
             <br />             
             <div className="row">
             <button className="outlined">Change <EditOutlined /></button>
             </div>          

           </div>

           <div className="right" >
             <div className="row">
             <form className="prof_edit_form" style={{width:"100%"}}>
                  <div className="m_form_item">
                    <h2>Username</h2>
                    <input         
                      className="outline_def"
                      type="username"
                      id="username"
                      placeholder="Mr. Vivek Kumar Mishra"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <br />
                  <div className="m_form_item">
                    <h2>Email</h2>
                    <input
                      className="outline_def"
                      type="email"
                      id="email"
                      placeholder="vivek260800@gmail.com"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <br />
                  <div className="m_form_item">
                    <h2>Phone.No</h2>
                    <input                      
                      className="outline_def"
                      type="phone_number"
                      id="phone_number"
                      placeholder="9988022333"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <br />
                  <div className="m_form_item">
                    <h2>sign-up as</h2>
                    <input
                      className="outline_def"
                      type="sign-up"
                      id="sign-up"
                      placeholder="farmer/industrialist"
                      style={{ width: "100%" }}
                    ></input>
                  </div>   
                  <div className="m_form_item">
                  <button className="outlined">                     
                      <span >Save Changes </span>                      
                    </button>
                  </div>             
                                    
                  <div className="button_opts " >
                    <button className="outlined">                     
                      <span style={{paddingRight:'5px'}}>Save Changes </span>                      
                    </button>
                    <button className="outlined">
                      <span >Edit <EditOutlined /></span>
                    </button>
                    <button className="outlined">
                      <span>Share <ShareAltOutlined /></span>
                    </button>
                  </div>
                </form>
                <div className="afl"  style={{float:'right'}}>
                <img src={Afl}></img>
              </div>
             </div>
           </div>
          </Container>       
      </div>
    </>
  );
}
