import React, {Component} from 'react';

class Contract extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="row mobile-top-margin">
                            <div className="col-md-12">
                                <div>
                                    <div className="card DashCard">
                                        <div className="card-header postHeader">
                                            <h3>My Pending Contracts</h3>
                                            <div>
                                                <ul>
                                                    <li className="active"><a>All active (0)</a></li>
                                                </ul>
                                                <div className="card-top-right-label" Style="float: right;"><a
                                                    target="_blank">View All</a></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <h6>There are no pending contracts at the moment.</h6>
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
        );
    }
}

export default Contract;