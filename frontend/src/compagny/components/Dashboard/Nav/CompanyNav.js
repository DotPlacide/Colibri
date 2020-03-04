import React from 'react'
import Logo from '../../../colirbi.svg'
const CompanyNav = () => {
    return(
        <nav>
            <nav class="container navbar">
                <div className="brand">
                    <a><img height="30px" width="95" src={Logo}/></a>
                </div>
                <div className="navigation">
                    <div className="search">
                        <form >
                            <input className="form-control mr-sm-1 nav-form-control" type="search" placeholder="Search"
                                   aria-label="Search"/>
                        </form>
                    </div>
                    <ul className="nav-dropdwon">
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">JOBS</span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">SAVED</span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">REPORTS</span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label">MESSAGES</span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-question fa-2x" /></span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-bell fa-2x"/></span></a></li>
                        <li className="nav-dropdown "><a href="" className="nav-item"><span className="nav-item-label"><i className="fas fa-user-circle fa-2x"/></span></a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}

export default  CompanyNav