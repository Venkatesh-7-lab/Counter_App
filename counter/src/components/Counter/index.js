import {Component} from "react";

import "./index.css";

class Counter extends Component 
{
    state={count:0}
    onIncrement=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    onReset=()=>{
        this.setState((prevState)=>({count:0}));
    }
    onDecrement=()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }
    handleMouseEnter = e => {
        e.target.style.background = "black"
    }
    handleMouseLeave = e => {
        e.target.style.background = "blue"
    }
    render() {
        const {count}=this.state;
        return(
            <div className="container">
                <h1 className="heading">Count</h1>
                <p className="count">{count}</p>
                <div>
                    <button className="button" 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.onIncrement}>Increase</button>
                    <button className="button" 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.onReset}>Reset</button>
                    <button className="button" 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.onDecrement}>Decrease</button>
                </div>
                
            </div>
        );

    }
}

export default Counter;