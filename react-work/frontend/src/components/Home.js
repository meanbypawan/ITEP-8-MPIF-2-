import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import ProductPage from "./product/ProductPage";
import Apis from "../Apis";
function Home(){
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        loadProducts();
    },[]);

    const loadProducts = async()=>{
        try{
         let response =  await axios.get(Apis.PRODUCT_LIST);
         setProductList(response.data.products); 
        }
        catch(err){
            console.log(err);
        }
    }
    return <>
      <Header/>
      <div className="container mt-3">
        <ProductPage productList={productList} setProductList={setProductList}/>
      </div>
    </>
}

export default Home;