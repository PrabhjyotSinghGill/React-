import React, { Component } from 'react';

class Counter extends Component {
    state={
        value:this.props.value,
        tags:[0]
    };

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    handleIncrement = product => {
        this.setState({value: this.state.value+1});
    }

    handleDecrement = product =>{
        this.state.value > 0 ? this.setState({value:this.state.value-1}) : this.setState({value:this.state.value});
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>'Add Tags!'</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>
            {/*<img className="m-1" src={this.state.logo} alt="" height="25em"></img>*/}
            <h4>Counter #{this.props.id}</h4>
            <span style={{fontSize:10}} className={this.getBadgeClasses(this.state.value)}>{this.formatCount()}</span>
            <button 
            onClick={
                () =>{
                this.handleIncrement({id:1});
                }
            }    
            className="btn btn-secondary btn-sm m-2">+</button>
            <button 
            onClick={
                () =>{
                this.handleDecrement({id:1});
                }
            }    
            className="btn btn-secondary btn-sm m-2">-</button>
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
        const {value:ct} =this.state;
        return ct === 0? "Zero": ct;
    }
}


 
export default Counter ;