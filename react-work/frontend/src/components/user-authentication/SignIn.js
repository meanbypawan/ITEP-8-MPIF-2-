import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Apis from "../../Apis";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-config/UserSlice";
import { fetchOrder } from "../../redux-config/OrderSlice";

function SignIn(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = async (event)=>{
      event.preventDefault();
      try{
         let response = await axios.post(Apis.SIGN_IN,{email,password});
         dispatch(setUser(response.data));
         dispatch(fetchOrder(response.data.user._id));
         navigate("/");
      }
      catch(err){
        toast.error(err.response.data.error);
        console.log(err);
      }

    }
    return <>
      <ToastContainer/>
      <div className="container container-height">
        <div className="form">
          <div className="bg-danger text-white text-center" style={{padding:"10px"}}>
            <small style={{fontSize:"20px"}}>Sign In</small>
          </div>
          <form style={{padding:"10px"}} onSubmit={handleSubmit}>
            <div className="form-group">
                <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" className="form-control"/>
            </div>
            <div className="form-group">
                <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
                <small onClick={()=>navigate("/sign-up")} className="text-primary btn">Create new account ?</small>
            </div>
          </form>
        </div>
      </div>
    </>
    
}

export default SignIn;