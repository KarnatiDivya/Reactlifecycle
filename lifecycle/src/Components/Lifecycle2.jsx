import React from "react";
export class Lifecycle2 extends React.Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    componentDidMount() {
        console.log("component did mount called");
    
}

incrementcount=()=>{
    this.setState({count:this.state.count+1})
}

    render(){
        return(
            <>
            <h1>count: {this.state.count}</h1>
            <button onClick={(this.incrementcount)}>click here</button>
            </>

        )
    }
}