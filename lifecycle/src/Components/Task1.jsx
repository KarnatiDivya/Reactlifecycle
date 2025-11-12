import React, { Component } from 'react';   
export class Task1 extends Component {
    constructor(){
        super();
        this.state={seconds:0}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({seconds:this.state.seconds+1})
        },1000)
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.seconds%5==0){
            console.log(`Reached ${this.state.seconds} seconds`);
        }
        
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render(){
        return(
            <>
            <h1>Timer: {this.state.seconds} seconds</h1>

            
            </>
        )
    }
}