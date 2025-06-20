import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function About(){
    const [counter,setCounter] = useState(100);
    const {m1,m2,m3} = useSelector((store)=>store.MessageState);
    useEffect(()=>{
        console.log("Execute on every re-render | 1st flevour");
    });
    useEffect(()=>{
        console.log("Mounting | 2nd flevour");
    },[]);
    useEffect(()=>{
        console.log("Updating | 3rd flevour");
    },[counter]);
    useEffect(()=>{
        return ()=>{
            console.log("Unmounting | 4th flevour");
        }
    },[]);
    return <>
      <div className="container">
        <h3>About component..</h3>
        {m1} : {m2} : {m3}
        <br/> <br/>
        <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
      </div>
    </>
}

export default About;