import { useEffect, useState } from "react";
import Header from "./Header";

function About(){
    const [counter,setCounter] = useState(100);
    useEffect(()=>{
      console.log("1st flever executed...");
    });
    useEffect(()=>{
      console.log("2nd flevour : componentDidMount");
    },[])
    useEffect(()=>{
      console.log("3rd flevour : componentDidUpdate()");
    },[counter]);
    useEffect(()=>{
       console.log("4th...");
       return ()=>{
         console.log("4th flevour : componentWillUnMount()");
       }
    },[]);
    return <>
    <Header/>
      <div className="container mt-3">
        <h3>About Page</h3>
        <hr/>
        <button onClick={()=>setCounter(counter+1)}>Increment :{counter}</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae delectus facilis natus sunt quidem omnis in debitis nemo quis alias temporibus repudiandae, similique labore quibusdam veniam unde odio expedita quam fugit tempora nostrum illo sint! Porro et, nihil nemo assumenda blanditiis eveniet! Atque, neque sed aliquam accusamus cumque iusto quibusdam eum natus libero voluptatibus asperiores rem animi alias, quae enim rerum fugit reprehenderit delectus impedit recusandae. Ut quisquam explicabo itaque in sed alias fuga quos natus unde id nulla rerum est doloremque deleniti ipsam, et illum inventore non aperiam. Illo ex quibusdam quo nemo vitae distinctio. A exercitationem consequatur ut!</p>
      </div>
    </>
}

export default About;