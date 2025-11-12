import React, { Component } from "react";
export class Lifecycle1 extends Component{
    constructor(){
        super();
        this.state={
            greeting:"Good Afternoon"
        }
        console.log("constructor called");
        
    }
    componentDidMount(){
        console.log("component did mount called");
        setTimeout(()=>{
            this.setState({greeting:"Good Evening"})
        },2000)

    }

    render(){
        console.log("render called");
        
        return(
            <div>
                <h1>{this.state.greeting}</h1>

            </div>
        )
    }

}