import React from "react";
export class Lifecycle3 extends React.Component {


    componentDidMount(){
        this.setinterval=setInterval(()=>{
            console.log("hello");
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.setinterval)
        console.log("component cleared");
        
    }
    render(){
        console.log("render called");
        
        return(
            <>
            <p>{this.setInterval}</p>
            
            </>
        )
    }
}