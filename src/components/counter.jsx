import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        logo:"favicon.ico"
    };

    render() { 
        return <>
        <img className="m-1" src={this.state.logo} alt="" height="30em"></img>
        <span style={{fontSize:10}} class={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        </>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count:ct} =this.state;
        return ct === 0? "Zero": ct;
    }
}


 
export default Counter ;