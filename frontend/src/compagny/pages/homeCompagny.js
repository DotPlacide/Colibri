import React from 'react'
import Navbar from '../components/NavBar'
import Header from '../components/header'
import Quotation from '../components/Arrangement'
import './HomeCompagny.css'
const HomeCompagny = ()=>{
        return (
            <div className="container">
            <Navbar/>
            <div className="TopHome">
                <Header/>
            </div>
                <div className="DownHome">
                    <Quotation/>
                </div>

            </div>
        )
}

export default HomeCompagny