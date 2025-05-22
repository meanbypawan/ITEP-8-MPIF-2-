import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ViewMore from "./components/view-more/ViewMore";
import BuyNow from "./components/buynow/BuyNow";
import SignUp from "./components/user-authentication/SignUp";
import SignIn from "./components/user-authentication/SignIn";
import Auth from "./components/Auth";
import Order from "./components/order/Order";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="view-more/:id" element={<ViewMore/>}/>
      <Route path="buy-now" element={<Auth><BuyNow/></Auth>}/>
      <Route path="order-history" element={<Auth><Order/></Auth>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
    </Routes>
  </>
}

export default App;