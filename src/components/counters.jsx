import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    /*Props includes data that we pass to a component. Props are Read only.*/
    render() { 
        const{onIncrement,onDecrement,onDelete,onReset,counters} = this.props;

        return <div className="counters">
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => <Counter
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement} 
            counter={counter} >
            </Counter>)}            
        </div>;
    }
}
 
export default Counters;