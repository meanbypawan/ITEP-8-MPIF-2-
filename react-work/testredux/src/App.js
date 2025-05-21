import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, incrementEvenCouter, incrementOddCounter } from "./redux-config/CounterSlice";
import Wish from "./components/Wish";

function App(){
  const {counter,evenCounter,oddCounter} = useSelector((store)=>store.CounterData);
  const dispatch = useDispatch();
  return <>
    <h1>Redux Demo....</h1>
    <button onClick={()=>dispatch(incrementCounter())}>Counter : {counter}</button>
    <button onClick={()=>dispatch(incrementEvenCouter())}>Even Counter : {evenCounter}</button>
    <button onClick={()=>dispatch(incrementOddCounter())}>Odd Counter : {oddCounter}</button>
    <Wish/>
  </>
}

export default App;