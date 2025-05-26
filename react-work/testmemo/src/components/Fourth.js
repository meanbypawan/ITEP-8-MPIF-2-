import React from "react";

function Fourth({sayHello}){
    console.log("Fourth Render....");
    return <>
      <h3>Fourth Component...</h3>
      <button onClick={()=>sayHello()}>Say Hello</button>
    </>
}
let FourthMemoized = React.memo(Fourth);
export default FourthMemoized;