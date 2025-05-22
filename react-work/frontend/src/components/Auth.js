import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function Auth({children}){
  const {isLoggedIn} = useSelector((store)=>store.current_user); 
  if(isLoggedIn)    
     return children;
   else
    return <Navigate to="/sign-in"/> 
}

export default Auth;