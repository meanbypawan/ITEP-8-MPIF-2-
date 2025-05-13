import { useParams } from "react-router-dom";
import Header from "../Header";
import "./ViewMore.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
function ViewMore(){
    const {id} = useParams();
    const [product,setProduct] = useState({});
    let mainImageRef = useRef(); 
    useEffect(()=>{
        loadProductById();
    },[]);

    const loadProductById = async()=>{
        try{
           let response = await axios.get(`http://localhost:3000/product/${id}`);
           console.log(response.data.product);
           setProduct(response.data.product);
        }
        catch(err){
            console.log(err);
        }
    }
    const swapImage = (event)=>{
        let temp = mainImageRef.current.src;
        mainImageRef.current.src = event.target.src;
        event.target.src = temp;
    }
    return <>
      <Header/>
      <div className="container mt-3">
        <div className="row">
            <div className="col-md-6 d-flex flex-column container-shadow container-height">
               <img ref={mainImageRef} src={product?.thumbnail} width="100%" height="450px"/>
               <div className="image-container" style={{height:"100px"}}>
                  {product?.images?.map((imageUrl,index)=>{return <img onClick={swapImage} src={imageUrl} style={{width:"100px", height:"80px"}} key={index}/>})}
               </div>
            </div>
            <div className="col-md-6 container-shadow container-height"></div>
        </div>
      </div>
    </>
}

export default ViewMore;