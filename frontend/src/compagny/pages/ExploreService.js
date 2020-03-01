import React from 'react';
import Navbar from "../components/NavBar";
import BigService from "../components/BigService";
import './service.css'
const ExploreService = () => {
        return (
            <div  className="container">
                <Navbar/>
                <BigService/>
              <h1>Explore</h1>
            </div>
        );
};

export default ExploreService;