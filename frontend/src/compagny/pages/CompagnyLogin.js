import React, {Component} from 'react';
import Navbar from "../components/NavBar";
import FormLoginCompagny from "../components/formLoginCompagny"
import '../components/formCompagny.css'

const CompagnyLogin = ()=>{
    return (
        <div className="container">
            <Navbar/>
        <div className="Header topLogin">
            <div className="col-md-4 leftStarted">
                <h2 Style={'line-height: 1.3;textAlign: justify'}> Ready to get started?</h2><span>Sign up or contact us</span>
             </div>
            <div className="col-md-5 ">
                <FormLoginCompagny/>
            </div>
        </div>
        </div>
    );
};

export default CompagnyLogin;