import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    /*State includes data that is local to a component */
    state ={
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    };
    /*Props includes data that we pass to a component */
    render() { 
        return <div className="counters">
            {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} id={counter.id} selected >
            </Counter>)}            
        </div>;
    }
}
 
export default Counters;