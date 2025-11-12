import React, { Component } from 'react';
import axios from 'axios';
export class LifeFetch extends Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>this.setState({products:res.data}))
        .catch(error=>console.log(error))
        
    }

    render(){
        return(
            <>
            <ul style={{display:"flex", justifyContent:"center", gap:"20px" ,flexDirection:"row", flexWrap:"wrap", margin:"10px"}}>{this.state.products.map((product)=>(
                <div style={{marginBottom:"20px", width:"300px" , height:"500px", border:"2px solid"}} >
                    <h1 key={product.id}>{product.title}</h1>
                    <p style={{margin:"15px"}}>{product.price}</p>
                    <img src={product.image} style={{width:"200px", height:"200px",margin:"20px"}} />

                </div>
                
            ))}</ul>
            </>
        )
    }
}



