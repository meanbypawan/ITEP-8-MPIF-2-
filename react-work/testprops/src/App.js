import { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
class App extends Component{
  constructor(props){
    super();
    this.state = {
      counter: 100
    }
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    let m1 = "Good Morning....";
    let m2 = "Good Evening....";
    let m3 = "Hello...";
    return <>
       <h3>App Component..</h3>
       <button onClick={this.incrementCounter}>{this.state.counter}</button>
       <First m1={m1} m2={m2} m3={m3}/>
       <hr/>
       <Second counter={this.state.counter} incrementCounter={this.incrementCounter}/>
    </>
  }
}

export default App;