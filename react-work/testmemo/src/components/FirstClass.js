import { Component, PureComponent } from "react";

class FirstClass extends PureComponent{
    constructor(){
        super();
    }
    render(){
        console.log("First Class Component Render...");
        return <>
          <h3>First Class Component...</h3>
        </>
    }
}

export default FirstClass;