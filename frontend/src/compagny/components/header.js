import React, {Component} from 'react';
import './header.css'
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="col-md-6">
                    <h1 Style={'line-height: 1.3;textAlign: justify'}> Increase your performance by reduce your cost and external your <span>Secondary</span> & <span>Digital task</span></h1>
                    <p>It's true, we helped invent impact sourcing. Seriously. Samasource started in 2008 as the first Impact Sourcing company in East Africa. Our goal was, and still is, to equally distribute opportunity in the digital economy and pay workers a living wage. </p>
                    <button type="button" className="btn btn-lg btn-started"><a href="ExploreService">Explore</a></button>
                    <button type="button" className="btn btn-lg btn-outline-schedule Hbutton">Schedule a demo</button>
                </div>
                <div className="col-md-6">
                    <div className="Himg">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;