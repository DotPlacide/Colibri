import React from 'react'

const CardPost = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                    <div className="row mobile-top-margin">
                        <div className="col-md-12">
                            <div>
                                <div className="card DashCard">
                                    <div className="card-header postHeader">
                                        <h3>My job posts</h3>
                                        <span>Start a post and match with talent in minutes</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                                <h6>Which category do you need to hire for?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-xs-12">
                    <div className="card DashCard">
                        <div className="card-header postHeader">
                            <h3>Total Job Views </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <h6>There are no active contracts at the moment.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CardPost