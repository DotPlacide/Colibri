import React, {Component} from 'react';

const Mycontract = () => {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="row mobile-top-margin">
                                <div className="col-md-12">
                                    <div>
                                        <div className="card DashCard">
                                            <div className="card-header postHeader">
                                                <h3>My Contracts</h3>
                                                <div>
                                                    <ul >
                                                        <li className="active"><a data-v-4d21621d="">All
                                                            (0)</a></li>
                                                        <li  className=""><a  href="javascript:">Hourly
                                                            (0)</a></li>
                                                    </ul>
                                                    <div className="card-top-right-label" Style="float: right;"><a
                                                        target="_blank">Due this week: $0</a></div>
                                                </div>
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
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12">

                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Mycontract;