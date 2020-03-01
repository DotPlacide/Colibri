import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar justify-content-between">
            <a className="navbar-brand">Colibri</a>
            <div className="div-block">
                <div className="text-block-4">
                    <a href="">Compagny</a>
                </div>
                <div className="text-block-4">
                    <a href="">Demo</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar