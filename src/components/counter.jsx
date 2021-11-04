import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        logo:"favicon.ico",
        tags:['0','1','2','3']
    };

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(){
        console.log('Increment Clicked');
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>'There are no Tags!'</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>
            <img className="m-1" src={this.state.logo} alt="" height="25em"></img>
            <span style={{fontSize:10}} className={this.getBadgeClasses(tag)}>{tag}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </li>)}</ul>;
    }

    render() { 
        return <>
        {this.renderTags()}
        </>
    }

    getBadgeClasses(tag) {
        let classes = "badge m-2 badge-";
        classes += (tag === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count:ct} =this.state;
        return ct === 0? "Zero": ct;
    }
}


 
export default Counter ;