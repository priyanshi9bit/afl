import React from 'react';
import SideBar from '../Components/SideBar';
import TopBar from '../Components/TopBar';
import '../Components/MainComponents.css';

function HomePage() {
    return (
        <div className="homepage">
            <SideBar />
            <TopBar />
            <div className="main_layout">
            <h1>HI</h1>
            </div>
            
        </div>
        
    );
}

export default HomePage;