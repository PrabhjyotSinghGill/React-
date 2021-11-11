import React, { Component } from 'react';

class Counter extends Component {
    state={
        value:this.props.counter.value,
        tags:[0]
    };

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement = product => {
        this.setState({value: this.state.value+1});
    }

    handleDecrement = product =>{
        this.state.value > 0 ? this.setState({value:this.state.value-1}) : this.setState({value:this.state.value});
    }
    */

    renderTags(){
        if(this.state.tags.length === 0) return <p>'Add Tags!'</p>;

        return <ul className="list-group list-group-flush">{this.state.tags.map(tag => <li className="list-group-item" key={tag}>
            {/*<img className="m-1" src={this.state.logo} alt="" height="25em"></img>*/}
            {/*<h4>Counter {this.props.counter.id}</h4>*/}
            <span style={{fontSize:10}} className={this.getBadgeClasses(this.props.counter)}>{this.formatCount()}</span>
            <button 
            onClick={
                () =>{
                this.props.onIncrement(this.props.counter);
                }
            }    
            className="btn btn-dark btn-sm m-2">+</button>
            <button 
            onClick={
                () =>{
                this.props.onDecrement(this.props.counter);
                }
            }    
            className="btn btn-dark btn-sm m-2">-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x</button>
            </li>)}</ul>;
    }

    render() { 
        return <>
        {this.renderTags()}
        </>
    }

    getBadgeClasses(tag) {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value:ct} =this.props.counter;
        return ct === 0? "Zero": ct;
    }
}


 
export default Counter ;