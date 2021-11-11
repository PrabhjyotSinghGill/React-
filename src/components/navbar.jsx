import React, { Component } from 'react';
/*Stateless Functional Component
const Navbar = (props) =>{
 return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
                </a>
            </nav>
        );
};*/

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}

export default Navbar;