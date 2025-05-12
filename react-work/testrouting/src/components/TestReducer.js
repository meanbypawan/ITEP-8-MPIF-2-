import { useReducer, useState } from "react";
import Header from "./Header";
/*
  action type :-
    "increment-counter" :--- increment counter 
    "increment-even-counter" :-  increment even counter
    "increment-odd-counter" :-  increment odd counter
*/
function TestReducer(){
    const [number,setNumber] = useState(0);
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type==="increment-counter"){
            state.counter = state.counter + 1;
        }
        else if(action.type === "increment-even-counter"){
            state.evenCounter = state.evenCounter + 2;
        }
        else if(action.type === "increment-odd-counter"){
            state.oddCounter = state.oddCounter + 2;
        }
        else if(action.type == "increment-by-payload"){
            state.counter = state.counter + action.payload*1;
        }
        return {...state};
    },{
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    });
    return <>
      <Header/>
      <div className="container mt-5">
        <button onClick={()=>dispatch({"type":"increment-counter"})} className="btn btn-success">Counter ({state.counter})</button>
        <button onClick={()=>dispatch({type:"increment-even-counter"})} className="btn btn-primary ml-2">Even Counter ({state.evenCounter})</button>
        <button onClick={()=>dispatch({type:"increment-odd-counter"})} className="btn btn-warning ml-2">Odd Counter({state.oddCounter})</button>
        <br/><br/>
        <input onChange={(event)=>setNumber(event.target.value)} type="text" className="form-control" placeholder="Enter any number"/>
        <button onClick={()=>dispatch({type:"increment-by-payload",payload:number})} className="mt-3 btn btn-warning ml-2">Increment By({number})</button>
      </div>
    </>
}

export default TestReducer;