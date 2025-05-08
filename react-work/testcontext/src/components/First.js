import { useContext } from "react";
import Second from "./Second";
import { MessageContext } from "../App";

function First(){
    return <>
      <h3>First Component...</h3>
      <Second/>
    </>
}

export default First;