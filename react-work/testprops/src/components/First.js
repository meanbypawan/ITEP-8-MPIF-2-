import { Component } from "react";

class First extends Component{
    constructor(props){
        super();
    }
    render(){
        console.log(this.props);
        return <>
          <h3>First Component...Message From Parent :{this.props.m1} {this.props.m2} {this.props.m3}</h3>
          <hr/>
        </>
    }
}

export default First;