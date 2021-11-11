import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    /*Props includes data that we pass to a component. Props are Read only.*/
    render() { 
        return <div className="counters">
            <button 
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => <Counter
            key={counter.id} 
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement} 
            counter={counter} >
            </Counter>)}            
        </div>;
    }
}
 
export default Counters;