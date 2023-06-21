import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Landing from '../pages/Home/Landing/Landing';
import MyComponent from '../pages/MyComponent/MyComponent';
import AboutUs from '../pages/Home/AboutUs/AboutUs';
import Services from '../pages/Services/Services';
import Team from '../pages/Team/Team';
import Expert from '../pages/Experts/Expert';
import ClientSatisfaction from '../pages/ClientSatisfaction/ClientSatisfaction';
import Footer from '../shared/Footer/Footer';
import Update from '../pages/Update/Update';
import Features from '../pages/Features/Features';
import { Helmet } from 'react-helmet';

const Main = () => {
    return (
        <div>
            <Helmet>
            <title>Home | Creative Business</title>
            </Helmet>
            <Navbar></Navbar>
            <Landing></Landing>
            <AboutUs></AboutUs>
            <Features></Features>
            <Services></Services>
            <Team></Team>
            <Expert></Expert>
            <ClientSatisfaction></ClientSatisfaction>
            <Update></Update>
            <Footer> </Footer>
        </div>
    );
};

export default Main;