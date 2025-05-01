import { Component } from "react";

class App extends Component{
  constructor(){
    super();
    this.state={
      message: "Good Morning..",
      counter: 100,
      evenCounter: 0,
      oddCounter: 1,
      fruitList: ["Mango","Banana","Apple","Orange","Watermelon"]
    }
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  incrementEvenCounter = ()=>{
    this.setState({evenCounter: this.state.evenCounter+2});
  }
  incrementOddCounter = ()=>{
    this.setState({oddCounter: this.state.oddCounter + 2});
  }
  render(){
    console.log("Render called...");
    return <>
      <h1>App component...</h1>
      <h2>{this.state.message}</h2>
      <button onClick={this.incrementCounter}>Increment Counter..</button> : {this.state.counter}
      <br/>
      <button onClick={this.incrementEvenCounter}>Increment Even Counter : {this.state.evenCounter}</button>
      <button onClick={this.incrementOddCounter}>Increment Odd Counter : {this.state.oddCounter}</button>
      <hr/>
      <ul>
        {this.state.fruitList.map((fruit,index)=>{return <li key={index}>{fruit}</li>})}
      </ul>
    </>
  }
}

export default App;