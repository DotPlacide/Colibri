import React, {Component} from 'react';
import CompanyNav from "../../components/Dashboard/Nav/CompanyNav";
import ProgressNav from "../../components/ProgressNav";
const Description = ()=> {
        return (
            <div>
                <div className="bg-post">
                    <CompanyNav/>
                    <div className="container">
                        <ProgressNav/>
                        <div>
                            <div className="card shadow-sm">
                                <div className="card-header card-box"><h1 Style={"color: #fff ; margin: 0"}>Description</h1>
                                    <span Style={"color: #fff ; margin-top: -25px"}>2 of 6</span></div>
                                <div className="card-body bodyCard">
                                    <h5 className="card-title" Style={"color: #3A314E"}>A description includes: </h5>
                                    <ul>
                                        <li>What the deliverable is</li>
                                        <li>Type of freelancer or agency you're looking for</li>
                                        <li>Anything unique about the project or team</li>
                                    </ul>
                                    <section className="col-md-11 m-lg-bottom">
                                        <form>
                                            <div className="row">
                                                <textarea className="form-control ng-pristine ng-empty ng-valid-minlength ng-valid-maxlength ng-valid ng-valid-unsafe-resources ng-touched" rows="8" name="description" eo-popover-id="1378" spellCheck="false" Style="position: relative; z-index: 1; background-color: transparent; height: 150px"/>
                                            </div>
                                            <div className="text-right m-xs-top"><small className="text-muted">0/5000
                                                characters (minimum 50)</small></div>
                                            <div id="FileUpload">
                                                <span>Additional project files (optional)</span>
                                                <div className="">
                                                    <div className="upload">
                                                        <p>Drag files here or <span className="upload__button">Browse</span></p>
                                                    </div>
                                                    <div className="uploaded uploaded--one">
                                                        <i className="far fa-file-pdf"/>
                                                        <div className="file">
                                                            <div className="file__name">
                                                                <p>lorem_ipsum.pdf</p>
                                                                <i className="fas fa-times"/>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                                    Style="width:100%">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="uploaded uploaded--two">
                                                        <i className="far fa-file-pdf"/>
                                                        <div className="file">
                                                            <div className="file__name">
                                                                <p>dolor_sit.pdf</p>
                                                                <i className="fas fa-times"/>
                                                            </div>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                                    Style="width:80%">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="uploaded uploaded--three">
                                                        < i className="far fa-file-pdf"/>
                                                        <div className="file">
                                                            <div className="file__name">
                                                                <p>amet_consectetur.pdf</p>
                                                                < i className="fas fa-times"/>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"  Style="width:60%">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span>You may attach up to 5 files under 100 MB each</span>
                                        </form>
                                    </section>

                                </div>
                            </div>
                            <div className="card-footer card-box Btz ">
                                <div>
                                    <a href="" className="btn btn-white buttonZone">cancel</a>
                                    <a href="/Details" className="btn btn-started buttonZone">continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Description;