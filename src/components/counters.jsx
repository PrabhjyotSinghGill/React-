import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state ={}
    render() { 
        return <div className="counters">
            <Counter></Counter>
            <Counter></Counter>
        </div>;
    }
}
 
export default Counters;