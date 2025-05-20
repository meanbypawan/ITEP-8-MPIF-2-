import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { useRef } from "react";
import { getCurrentUser } from "../Auth.js";
import axios from "axios";
import Apis from "../../Apis.js";
import { toast, ToastContainer } from "react-toastify";
function BuyNow(){
    const naviage = useNavigate();
    const location = useLocation();
    let {id,title,price,discountPercentage} = location.state.params;    
    let nameInput = useRef();
    let contactInput = useRef();
    let addressInput = useRef();
    let currentUser = getCurrentUser();
    const handleBack = ()=>{
      naviage(-1);
    }
    const handleSubmit = async (event)=>{
     try{ 
      event.preventDefault();
      let name = nameInput.current.value;
      let contact = contactInput.current.value;
      let address = addressInput.current.value;
      let userId = currentUser._id;
      let productId = id;
      let billAmount = (price-(discountPercentage*price)/100).toFixed(2);
      let response = await axios.post(Apis.PLACE_ORDER,{name,contact,address,userId,productId,billAmount});
      toast.success(response.data.message);
     }
     catch(err){
       toast.error("Oops! something went wrong..");
       console.log(err);
     } 
    }
    return <>
      <ToastContainer/>
      <Header/>
      <div className="container mt-3">
        <button onClick={handleBack} className="btn btn-primary">Back</button>
        <div className="" style={{backgroundColor:"#B9B7BD",width:"30%",borderRadius:"10px",minHeight:"10px",marginTop:"10px",padding:"10px"}}>
          <p style={{fontSize:"20px",color:"white"}}>
            {title}
          </p>
          <hr/>
          <p>
            Total Bill : 
            <span className="text-success" style={{fontSize:"25px",fontWeight:"bolder"}}>{(price-(price*discountPercentage)/100).toFixed(2)} Rs.</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="" style={{marginTop:"10px"}}>
          <div className="form-group">
            <input defaultValue={currentUser.username} ref={nameInput} type="text" placeholder="Contact person name" className="form-control"/>
          </div>
          <div className="form-group">
            <input defaultValue={currentUser.contact} ref={contactInput} type="text" placeholder="Contact number" className="form-control"/>
          </div>
          <div className="form-group">
            <textarea ref={addressInput} className="form-control" placeholder="Enter delivery address"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-warning">Place order</button>
          </div>
        </form>  
      </div>
    </>
}

export default BuyNow;