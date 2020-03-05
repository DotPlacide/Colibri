import React from 'react';

const BoxPost =  () => {
        return (
            <div>
                <div className="card shadow-sm" >
                    <div className="card-header card-box"><h1 Style={"color: #fff ; margin: 0"}>Get Started</h1></div>
                    <div className="card-body">
                        <h5 className="card-title" Style={"color: #3A314E"}>What would you like to do?</h5>
                        <section className="col-md-10 m-lg-bottom">
                            <form>
                            <div className="row">
                                <div className="radio">
                                    <label><input type="radio"/> <span className="checkbox-replacement-helper">Create a new job post</span></label>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card ng-pristine ng-untouched eo-button-box eo-button-box-radio ng-not-empty ng-valid ng-valid-required active" aria-required="required">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the
                                                        card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card eo-button-box">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the
                                                        card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="radio">
                                    <label className="radio2"><input type="radio"/> <span className="checkbox-replacement-helper">Reuse a previous job post</span></label>
                                </div>
                            </div>
                        </form>
                        </section>
                    </div>
                </div>
                <div className="card-footer card-box Btz ">
                        <div>
                            <a href="" className="btn btn-white buttonZone">cancel</a>
                            <a href="/Title" className="btn btn-started buttonZone">continue</a>
                        </div>
                </div>
            </div>
        );
};

export default BoxPost;