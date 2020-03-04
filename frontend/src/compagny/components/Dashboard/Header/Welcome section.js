import React, {Component} from 'react';
import AvatarDash from "../Nav/AvatarDash";
import HeaderPostButton from "./HeaderPostButton";
const WelcomeSection = () => {
        return (
            <div className="container">
                <div className="welcomeSection">
                    <h3 Style={"color: white; margin: 15px 0px; font-size:18px"}>Meltwater </h3>
                    <h1 className="welcome-label">Welcome back, Jean</h1>
                    <AvatarDash/>
                </div>
                <HeaderPostButton/>
            </div>
        );
    };

export default WelcomeSection;