import React, {Component} from 'react';
import './formCompagny.css'
class FormLoginCompagny extends Component {
    render() {
        return (
               <form>
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Compagny name</label>
                       <input type="text" className="form-control" id="Compagny" aria-describedby="NameHelp"/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Email address</label>
                       <input type="email" className="form-control persoINput" id="EmailCompagny" aria-describedby="emailHelp"/>
                       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                           else.</small>
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputPassword1">Password</label>
                       <input type="password" className="form-control" id="exampleInputPassword1"/>
                   </div>
                   <button type="submit" className="btn btn-started">Submit</button>
               </form>
        );
    }
}

export default FormLoginCompagny;