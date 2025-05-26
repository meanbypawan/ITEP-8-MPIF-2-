import React from "react";

function Third({obj}){
    console.log("Third Render....");
    return <>
      <h3>Third Component...{obj.m1} : {obj.m2}</h3>
    </>
}
let ThirdMemoized = React.memo(Third);
export default ThirdMemoized;