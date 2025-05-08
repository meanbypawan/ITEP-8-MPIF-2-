import { createContext, useState } from "react";
import First from "./components/First";

export const MessageContext = createContext();
export const CounterContext = createContext();
function App(){
  let message = "ReactJs Is Very Simple.";
  let m1 = "GM";
  let m2 = "GN";
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...{counter}</h1>
    <MessageContext.Provider value={{message,m1,m2}}>
      <CounterContext.Provider value={{counter,setCounter}}>
        <First/>
      </CounterContext.Provider>
    </MessageContext.Provider>
  </>
}

export default App;