import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    /*State includes data that is local to a Component & invisible to Other Components. State is Read & Write. */
    state ={
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
        ]
    };

    handleIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    };

    handleReset  = () =>{
       const counters = this.state.counters.map(c =>{
           c.value = 0;
           return c;
       }); 
       this.setState({counters});
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:counters})
    };

    /*Props includes data that we pass to a component. Props are Read only.*/
    render() { 
        return <div className="counters">
            <button 
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => <Counter
            key={counter.id} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} 
            counter={counter} >
            </Counter>)}            
        </div>;
    }
}
 
export default Counters;