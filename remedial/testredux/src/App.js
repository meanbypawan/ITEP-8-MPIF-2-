import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const About = React.lazy(()=>import("./components/About"));
const Shopping = React.lazy(()=>import("./components/Shpping"));
import { Provider } from "react-redux";
import MyStore from "./redux-config/Store";
import React, { Suspense } from "react";
import Product from "./components/Product";
import Category from "./components/Category";
function App(){
  return <>
   <Provider store={MyStore}>
   <BrowserRouter>
    <div className="p-2 bg-dark text-white d-flex align-items-center" style={{height:"50px"}}>
      <Link to="/" className="text-white"><span style={{cursor:"pointer"}}>Home</span></Link>
      <Link to="/about" className="text-white"><span style={{cursor:"pointer"}} className="ml-2">About us</span></Link>
      <Link to="/shopping" className="text-white"><span style={{cursor:"pointer"}} className="ml-2">Shopping</span></Link>
    </div>
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>}/>
        <Route path="shopping" element={<Suspense fallback={<h3>Loading..</h3>}><Shopping/></Suspense>}>
          <Route path="product" element={<Product/>}/>
          <Route index  element={<Category/>}/>
        </Route>
      </Routes>
    </div>
   </BrowserRouter>
  </Provider>  
  </>
}

export default App;