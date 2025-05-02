import { Component } from "react";

class Second extends Component{
    
    render(){
        return <>
          <h3>Second Component..</h3>
          <button onClick={this.props.incrementCounter}>Increment Counter ({this.props.counter})</button>
        </>
    }
}
export default Second;