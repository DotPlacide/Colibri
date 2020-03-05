import React from 'react';
import CompanyNav from "../../components/Dashboard/Nav/CompanyNav";
import ProgressNav from "../../components/ProgressNav";
import './step.css'
import BoxPost from "../../components/ContentPost/BoxPost";
import BoxDown from "../../components/ContentPost/BoxDown";
const Title = ()=>{
    return(
        <div className="bg-post">
            <CompanyNav/>
            <div className="container">
                <ProgressNav/>
                <div className="card shadow-sm">
                    <div className="card-header card-box"><h1 Style={"color: #fff ; margin: 0"}>Title</h1>
                        <span Style={"color: #fff ; margin-top: -25px"}>1 of 6</span></div>
                    <div className="card-body bodyCard">
                        <h5 className="card-title" Style={"color: #3A314E"}>Enter the name of your job post</h5>
                        <section className="col-md-10 m-lg-bottom">
                            <form>
                                <div className="row">
                                <textarea
                                    className="form-control m-sm-bottom ng-pristine ng-empty ng-valid-wordmaxlength ng-valid-pattern ng-valid-minlength ng-valid-maxlength ng-valid ng-valid-unsafe-resources ng-touched"
                                    id="title" name="title"  Style="height: 44px;"
                                    spellCheck="false">              </textarea>
                                </div>
                            </form>
                        </section>
                        <ul Style={"margin-left: -25px;margin-top: 18px"}><h5>Here are some good examples</h5><li>Developer needed for creating a responsive WordPress Theme</li><li>Need a design for a new company logo</li><li>CAD designer to create a 3D model of a residential building</li></ul>
                    </div>
                </div>
                <BoxDown/>
            </div>
        </div>
    )
};

export default Title