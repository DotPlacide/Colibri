import React, {Component} from 'react';
import './bigservice.css'
class BigService extends Component {
    render() {
        return (
            <div className="Services">
                <div className="col-md-4">
                    <div className="card srvice">
                        <div className="card-body">
                            <h5 className="card-title">NATURAL LANGUAGE PROCESSING
                            </h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-explore">Explore more</a>
                        </div>
                    </div>
            </div>
                <div className="col-md-4">
                    <div className="card srvice">
                        <div className="card-body">
                            <h5 className="card-title">NATURAL LANGUAGE PROCESSING
                            </h5>
                            <p className="card-text">Transform natural language data into valuable training sets with our NLP solutions for dataset creation and enhancements, document classification, intent recognition, sentiment analysis, etc.</p>
                            <a href="#" className="btn btn-explore">Explore more</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card srvice">
                        <div className="card-body">
                            <h5 className="card-title">COMPUTER VISION</h5>
                            <p className="card-text">Securely train and validate computer vision with high-quality training data from Samasource, a trusted training data partner for world leading AI..</p>
                            <a href="#" className="btn btn-explore">Explore more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigService;