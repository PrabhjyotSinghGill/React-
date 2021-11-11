import React,{Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from './components/navbar';

class App extends Component{
  /*State includes data that is local to a Component & invisible to Other Components. State is Read & Write. */
  state ={
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
        {id:5, value:0},
        {id:6, value:0},
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
  render(){
    return (
      <div className="app">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}></Navbar>
        <main className="container">
        <Counters 
        counters = {this.state.counters}
        onReset={this.handleReset} 
        onDelete={this.handleDelete} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement}>
        </Counters>
        </main>
      </div>
    );
  }
 
}

export default App;
