import React, { Component } from 'react';

class Counter extends Component {

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
        return (<div className="row">
                    <div className="col-1">
                    <span style={{fontSize:10}} className={this.getBadgeClasses(this.props.counter)}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
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
                    className="btn btn-dark btn-sm m-2" disabled={this.props.counter.value === 0 ? 'disabled' : ""}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x</button>
                </div>
            </div>);
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
        return ct === 0? "0": ct;
    }
}


 
export default Counter ;