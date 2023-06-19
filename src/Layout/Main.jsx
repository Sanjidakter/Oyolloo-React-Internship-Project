import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Landing from '../pages/Home/Landing/Landing';
import MyComponent from '../pages/MyComponent/MyComponent';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Features from '../pages/Features/features';
import Services from '../pages/Services/Services';
import Team from '../pages/Team/Team';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Landing></Landing>
            <AboutUs></AboutUs>
            <Features></Features>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Main;