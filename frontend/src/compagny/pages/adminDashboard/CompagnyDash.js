import React from 'react'
import CompanyNav from '../../components/Dashboard/Nav/CompanyNav'
import './navigation.css'
import WelcomeSection from "../../components/Dashboard/Header/Welcome section";
import CardPost from "../../components/Dashboard/Section/CardPost";
import Contract from "../../components/Dashboard/Section/Contract";
import Mycontract from "../../components/Dashboard/Section/Mycontract";
const CompagnyDash = ()=>{
    return (
        <div>
            <CompanyNav/>
            <div className="blueBackground"></div>
            <div>
                <WelcomeSection/>
            </div>
            <div>
                <CardPost/>
            </div>
            <div className="contractPending">
                <Contract/>
            </div>
            <div className="contractPending">
                <Mycontract/>
            </div>
        </div>
    )
};
export default CompagnyDash