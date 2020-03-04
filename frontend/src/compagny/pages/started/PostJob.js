import React from 'react'
import CompanyNav from "../../components/Dashboard/Nav/CompanyNav";
import BoxPost from "../../components/ContentPost/BoxPost";
import './post.css'
const Post = () => {
    return(
        <div className="bg-post">
            <CompanyNav/>
            <div className="container">
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
                <div>
                    <BoxPost/>
                </div>
            </div>
        </div>

    )
}
export default Post