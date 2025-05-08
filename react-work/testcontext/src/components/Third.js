import { useContext } from "react";
import { CounterContext, MessageContext } from "../App";

function Third(){
    let {message,m1,m2} = useContext(MessageContext);
    let {setCounter,counter} = useContext(CounterContext);
    return <>
    <hr/>
      <h3>Third Component..[{message}]</h3>
      <p>{m1}</p>
      <p>{m2}</p>
      <button onClick={()=>setCounter(counter+1)}>Change Counter</button>
    </>
}

export default Third;
