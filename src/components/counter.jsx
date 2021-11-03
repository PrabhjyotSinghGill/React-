import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        logo:"favicon.ico"
    };
    render() { 
        return <>
        <img className="m-1" src={this.state.logo} alt="" height="30px"></img>
        <span class="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        </>
    }

    formatCount(){
        const {count:ct} =this.state;
        return ct === 0? <h5>Zero</h5>: <h5>{ct}</h5>;
    }
}


 
export default Counter ;