import { useNavigate } from "react-router-dom";
import "./user.css";
import { useState } from "react";
import axios from "axios";
function SignUp(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const handleSubmit = async(event)=>{
      try{
        setIsLoading(true);
        event.preventDefault();
        let response = await axios.post("http://localhost:3000/user/sign-up",{username,password,email,contact});
        console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
      setIsLoading(false);
    }
    return <>
      <div className="container container-height">
        {isLoading ? <div class="spinner"></div> : 
        <div className="form">
          <div className="bg-danger text-white text-center" style={{padding:"10px"}}>
            <small style={{fontSize:"20px"}}>Sign up</small>
          </div>
          <form onSubmit={handleSubmit} style={{padding:"10px"}}>
            <div className="form-group">
                <input onChange={(event)=>setUsername(event.target.value)} type="text" placeholder="Enter username" className="form-control"/>
            </div>
            <div className="form-group">
                <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" className="form-control"/>
            </div>
            <div className="form-group">
                <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group">
                <input onChange={(event)=>setContact(event.target.value)} type="text" placeholder="Enter contact number" className="form-control"/>
            </div>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
                <small onClick={()=>navigate("/sign-in")} className="text-primary btn">Already have a account ?</small>
            </div>
          </form>
        </div>}

      </div>
    </>
}

export default SignUp;