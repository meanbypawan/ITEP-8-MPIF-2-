import React from "react";

function First(){
    console.log("First Render....");
    return <>
      <h3>First Component....</h3>
    </>
}

let FirstMemoized = React.memo(First);
export default FirstMemoized;