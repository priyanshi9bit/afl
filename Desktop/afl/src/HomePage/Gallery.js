import React from 'react';
import './Homepage.css';
import car from '../Images/car.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import orangeCar from '../Images/orangeCar.png';
import bell from '../Images/bell.png';
import Ellipse from '../Images/Ellipse.svg';
import Ellipse2 from '../Images/Ellipse2.svg';
import Ellipse3 from '../Images/Ellipse3.svg';
import stone from '../Images/stone.png';
import key from '../Images/key.png';
import redImg from '../Images/redImg.png';

function Gallery() {
    return (
        <div className="container">
            <div className="gallery">
                <div className="info">
                    <p className='title' >Gallery</p>
                    <p className='subtitle'>car can describe where you are going ,like a traveler<br />whose destination is fixed, find or sell your first with us.</p>
                    <button className='viewAll'>View All <ArrowForwardIcon /></button>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div className="cards">
                        <div className="card" style={{ position: 'relative' }}>
                            <img src={orangeCar} />
                            <p style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Be Vietnam', fontWeight: '800', fontSize: '61.75px', lineHeight: '90px', letterSpacing: '0.02em', color: '#FFFFFF',
                                backgroundColor: 'rgba(1, 0, 0, 0.65)', padding: '110px'
                            }}>30+</p>
                        </div>
                        <div className="card">
                            <img src={orangeCar} />
                        </div>
                        <div className="card">
                            <img src={orangeCar} />
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br />

            <div className="whyUs">
                <div className="info">
                    <p className='title' style={{textAlign: 'center'}}>Why Us?</p>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div className="cards">
                        <div className="col">
                            <img src={Ellipse} style={{ position: 'relative' }} />
                            <img src={bell} style={{ zIndex: '2', transform: 'translate(-92%, -3%)' }} />
                            <br /><br />
                            <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>100+ notifications for selling </p>
                            <br /><br />
                            <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like a traveler whose destination is fixed, find or sell your first with us.</p>
                        </div>
                        <div className="col">
                            <img src={Ellipse2} style={{ position: 'relative' }} />
                            <img src={stone} style={{ zIndex: '2', transform: 'translate(-92%, -3%)' }} />
                            <br /><br />
                            <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>trusted registered vehicles... </p>
                            <br /><br />
                            <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like a traveler whose destination is fixed, find or sell your first with us.</p>
                        </div>
                        <div className="col">
                            <img src={Ellipse3} style={{ position: 'relative' }} />
                            <img src={key} style={{ zIndex: '2', transform: 'translate(-92%, -3%)' }} />
                            <br /><br />
                            <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>20.00+ customer service</p>
                            <br /><br />
                            <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like a traveler whose destination is fixed, find or sell your first with us.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br />

            <div className="whyUs">
                <div className="info">
                    <p className='title' style={{textAlign: 'center'}}>Our best blogs?</p> <br /><br />
                    <p className='subtitle' style={{textAlign: 'center'}}> an insight to the incredivle experience in the world</p>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div className="cards">
                        <div className="col">
                            <div style={{display:'flex', gap:'40px'}} className="1">
                                <img style={{height:'210px', width:'172px', borderRadius:'9px'}} src={car} />
                                <div className="points">
                                <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>100+ notifications for selling </p>
                                <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like adfljioajdllojodll  </p>
                                <p style={{fontFamily: 'Be Vietnam',fontWeight: '700',fontSize: '16.36px',lineHeight:'24px',letterSpacing: '0.02em',color:'#F86C03'}}>Read more <ArrowForwardIcon /></p>
                                </div>
                            </div>
                            <br /><br/><br /> 
                            <div style={{display:'flex', gap:'40px'}} className="1">
                                <img style={{height:'210px', width:'172px', borderRadius:'9px'}} src={car} />
                                <div className="points">
                                <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>100+ notifications for selling </p>
                                <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like adfljioajdllojodll  </p>
                                <p style={{fontFamily: 'Be Vietnam',fontWeight: '700',fontSize: '16.36px',lineHeight:'24px',letterSpacing: '0.02em',color:'#F86C03'}}>Read more <ArrowForwardIcon /></p>
                                </div>
                            </div>
                        </div>      
                                         
                        <div className="col">
                        <div style={{display:'flex', gap:'40px'}} className="1">
                                <img style={{height:'210px', width:'172px', borderRadius:'9px'}} src={car} />
                                <div className="points">
                                <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>100+ notifications for selling </p>
                                <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like adfljioajdllojodll  </p>
                                <p style={{fontFamily: 'Be Vietnam',fontWeight: '700',fontSize: '16.36px',lineHeight:'24px',letterSpacing: '0.02em',color:'#F86C03'}}>Read more <ArrowForwardIcon /></p>
                                </div>
                            </div>
                            <br /><br/><br /> 
                            <div style={{display:'flex', gap:'40px'}} className="1">
                                <img style={{height:'210px', width:'172px', borderRadius:'9px'}} src={car} />
                                <div className="points">
                                <p style={{ width: '364px', fontFamily: 'Be Vietnam', fontWeight: '600', fontSize: '30.36px', lineHeight: '44px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#000000' }}>100+ notifications for selling </p>
                                <p style={{ width: '292px', height: '96px', fontFamily: 'Be Vietnam', fontWeight: '700', fontSize: '16.36px', lineHeight: '24px', letterSpacing: '0.02em', textTransform: 'capitalize', color: '#686363' }}>car can describe where you are going ,like adfljioajdllojodll  </p>
                                <p style={{fontFamily: 'Be Vietnam',fontWeight: '700',fontSize: '16.36px',lineHeight:'24px',letterSpacing: '0.02em',color:'#F86C03'}}>Read more <ArrowForwardIcon /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br />
            <div className="cont">
                <center><img style={{width:'100%',height:'100%'}}src={redImg} /></center>
                <center><button className='explore'>Read More</button></center>
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            
        </div>
    );
}

export default Gallery;