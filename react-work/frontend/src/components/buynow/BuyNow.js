import { useNavigate } from "react-router-dom";
import Header from "../Header";

function BuyNow(){
    const naviage = useNavigate();
    const handleBack = ()=>{
      naviage(-1);
    }
    return <>
      <Header/>
      <div className="container mt-3">
        <button onClick={handleBack} className="btn btn-primary">Back</button>
        <h3>Buy now component..</h3>
      </div>
    </>
}

export default BuyNow;