import { useSelector } from "react-redux";
import Header from "../Header";

function Order(){
    const {history} = useSelector((store)=>store.users_order);
    return <>
      <Header/>
      <div className="container mt-3">
        <h1>Your order history</h1>
        
      </div>
    </>
}

export default Order;