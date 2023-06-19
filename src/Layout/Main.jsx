import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Landing from '../pages/Home/Landing/Landing';
import MyComponent from '../pages/MyComponent/MyComponent';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Features from '../pages/Features/features';
import Services from '../pages/Services/Services';
import Team from '../pages/Team/Team';
import Expert from '../pages/Experts/Expert';
import ClientSatisfaction from '../pages/ClientSatisfaction/ClientSatisfaction';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Landing></Landing>
            <AboutUs></AboutUs>
            <Features></Features>
            <Services></Services>
            <Team></Team>
            <Expert></Expert>
            <ClientSatisfaction></ClientSatisfaction>
            <Footer> </Footer>
        </div>
    );
};

export default Main;