import { useNavigate } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate();
    return <>
      <div className="container container-height">
        <div className="form">
          <div className="bg-danger text-white text-center" style={{padding:"10px"}}>
            <small style={{fontSize:"20px"}}>Sign In</small>
          </div>
          <form style={{padding:"10px"}}>
           
            <div className="form-group">
                <input type="text" placeholder="Enter email" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Enter password" className="form-control"/>
            </div>
            <div className="form-group text-center">
                <button className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
                <small onClick={()=>navigate("/sign-up")} className="text-primary btn">Create new account ?</small>
            </div>
          </form>
        </div>
      </div>
    </>
    
}

export default SignIn;