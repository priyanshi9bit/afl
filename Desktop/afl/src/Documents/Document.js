import { React, Component } from 'react';
import '../Documents/Document.css';
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import profile from '../Images/profile.svg';
import avail_mach from '../Images/avail_mach.svg';
import mach_det from '../Images/mach_det.svg';
import documents from '../Images/documents.svg';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import tractor from '../Images/tractor.png';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

class Document extends Component {
  render() {
    return (
      <Container className="document">
        {/* <div className="left">
            <SideBar />
          </div>
          <TopBar /> */}

        <div className="row">
          <div className='container' style={{ marginBottom: "20px" }}>
            {/* <Link to="/profile"> */}
            <div
              //   onClick={() => {
              //     this.props.setActiveMenu(2);
              //   }}
              //   className={
              //     this.props.activeMenuItem == 2
              //       ? "m_card card_active"
              //       : "m_card"
              //   }
              className='m_card' >
              <div className="stat_name">Profile</div>
              <div className="stat_val">
                <img src={profile} style={{ width: '18px' }}></img>
              </div>
            </div>
            {/* </Link> */}
          </div>
          <div className='container' style={{ marginBottom: "20px" }}>
            <div className='m_card'>
              <div className="stat_name">Available Machines</div>
              <div className="stat_val">
                <img src={avail_mach}></img>
              </div>
            </div>
          </div>
          <div className='container' style={{ marginBottom: "20px" }}>
            <div className='m_card'>
              <div className="stat_name">Machine details</div>
              <div className="stat_val">
                <img src={mach_det}></img>
              </div>
            </div>
          </div>
          <div className='container' style={{ marginBottom: "20px" }}>
            <div className='m_card card_active'>
              <div className="stat_name">Documents</div>
              <div className="stat_val">
                <img src={documents}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="btns"><center>
          <button className='machine_details'>MACHINE DETAILS</button>
          <button className='chats'>CHATS</button>
        </center>
        </div>
        <div className="content">
          <div className="col-1">
            <img src={tractor} style={{ width: '487px', height: '383px' }} />
          </div>
          <div className="col-2">
            <p>MACHINE NAME</p>
            <span>DATE: 22 March, 2021</span>
            <br />
            <br />
            <br />
            <div className="info">
              <div className="info_col1">
                <p className='ques'>M-ID: <br />
                  DATE:  <br />
                  TIME: <br />
                  CATEGORY: <br />
                </p>
                <p className='ans'>
                  101B61 <br />
                  22 MARCH, 21 <br />
                  10:00 AM <br />
                  HEAVY MOTERS <br />
                </p>

              </div>
              <br /><br /><br /><br />
              <div className="buttons">
                <button className="filled" style={{padding: "15px 104px", width: '155px', height: "48px"}}>
                  <span >SAVE</span>
                </button>
                <button className="outlined" style={{display:"inline-flex",justifyContent:"space-evenly",padding: '15px 104px',width: "169px",height: '48px', background: '#DCE1F9'}}>
                  Edit <ModeEditOutlineOutlinedIcon />
                    </button>
                <button className="outlined" style={{display:"inline-flex",justifyContent:"space-evenly",padding: '15px 104px',width: "169px",height: '48px', background: '#DCE1F9'}}>
                  DELETE <DeleteOutlinedIcon/>
                </button>
              </div>
              <div className="description">
                <p className='description_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nunc et nisl sem tincidunt interdum diam erat eu. Laoreet varius nulla vitae blandit vitae bibendum. Feugiat quisque posuere mus egestas cursus augue. A hendrerit dictum gravida elementum pretium egestas. Vitae imperdiet vel semper amet velit lacus, tellus libero rhoncus. Aliquam non orci sodales bibendum odio ultrices. Diam sagittis ante in at sed risus, quis. Ornare viverra nam maecenas quam sit facilisi sed. Fringilla pellentesque egestas turpis lobortis amet, pulvinar vestibulum vestibulum faucibus. Porttitor velit in adipiscing sit quisque velit. Luctus convallis cras in magna tempor in leo. Eget sed enim dui aliquet ut turpis eget natoque. Eu scelerisque ornare a, aliquet parturient lectus et amet, nunc. Mollis enim scelerisque id ultricies eget nisl dui lacus. Quam purus pellentesque curabitur tempus, pharetra sagittis mauris. Mattis consectetur nulla amet id mauris non gravida tempus.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Document;