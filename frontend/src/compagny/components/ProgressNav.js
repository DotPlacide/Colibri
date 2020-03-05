import React from 'react'
import BoxPost from "./ContentPost/BoxPost";

const ProgressNav = ()=>{
    return(
            <div className="card card-steps shadow-sm p-3 mb-5 ">
                <nav className="navProgress">
                    <ul>
                        <li className="listSpace"><i className="fas fa-edit"/><a href="">Title</a></li>
                        <li className="listSpace"><i className="fas fa-edit"/><a href="">Description</a></li>
                        <li className="listSpace"><i className="fas fa-edit"/><a href="">Details</a></li>
                        <li className="listSpace"><i className="fas fa-edit"/><a href="">Requirement</a></li>
                        <li className="listSpace"><i className="fas fa-edit"/><a href="">Review</a></li>
                    </ul>
                </nav>
            </div>
    )
}

export default ProgressNav