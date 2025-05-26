import React from "react";

function Second({message}){
    console.log("Second Render....");
    return <>
      <h3>Second Component...{message}</h3>
    </>
}
let SecondMemoized = React.memo(Second);
export default SecondMemoized;