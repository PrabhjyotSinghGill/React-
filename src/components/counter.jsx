import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
    };
    render() { 
        return <>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
        </>
    }

    formatCount(){
        const {count:ct} =this.state;
        return ct === 0? <h5>Zero</h5>: <h5>{ct}</h5>;
    }
}


 
export default Counter ;