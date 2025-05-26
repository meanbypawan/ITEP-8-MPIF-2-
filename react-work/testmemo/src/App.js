import { useCallback, useMemo, useState } from "react";
import FirstClass from "./components/FirstClass";
import FirstMemoized from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

function App(){
  const [counter,setCounter] = useState(100);
  const [evenCounter,setEvenCounter] = useState(0);
  console.log("App Render...");
  let message = "Hello....";
  let obj = {m1:"GM",m2:"GN"};
  obj = useMemo(()=>obj,[evenCounter]);
  let sayHello = ()=>{
    window.alert("Hello Friends....");
  }
  sayHello = useCallback(()=>sayHello,[]);
  return <>
    <h1>App component...</h1>
    <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
    <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter : {evenCounter}</button>
    {/* <FirstClass/> */}
    <FirstMemoized/>
    <Second message={message}/>
    <Third obj={obj}/>
    <Fourth sayHello={sayHello}/>
  </>
}

export default App;



