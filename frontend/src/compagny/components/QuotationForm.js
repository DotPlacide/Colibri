import React from "react";
import './fast.css'
const QuoatationForm = ()=> {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="First name">Name</label>
                    <input type="text" className="form-control" placeholder="Your name"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="First name">Industry</label>
                    <input type="text" className="form-control" placeholder="eg. Garment, Paper, etc."/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="email" className="form-control" id="inputPhone" placeholder="phone"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Type of the project</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address </label>
                <input type="text" className="form-control" id="inputAddress2"
                       placeholder="Accra east legon"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Type of the project</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-send">Send a request</button>
        </form>
    )
}

export default QuoatationForm