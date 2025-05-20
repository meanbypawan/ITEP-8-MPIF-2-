import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import "./ViewMore.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Apis from "../../Apis";
function ViewMore(){
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const navigate = useNavigate();
    let mainImageRef = useRef(); 
    useEffect(()=>{
        loadProductById();
    },[]);

    const loadProductById = async()=>{
        try{
           let response = await axios.get(Apis.GET_PRODUCT_BY_ID+`/${id}`);
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
    const handleBuyNow = (product)=>{
       let id = product._id;
       let title = product.title;
       let price = product.price;
       let discountPercentage = product.discountPercentage;
       navigate("/buy-now",{state:{params:{id,title,price,discountPercentage}}});
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
            <div className="col-md-6 container-shadow container-height p-3">
                <div className="flex-container-column">
                   <h4>{product.title} [<b className="text-primary">{product.brand}</b>]</h4>
                   <hr className="bg-danger" style={{height:"5px",width:"100%"}}/>
                   <p>{product.description}</p>
                   <p><b>Warranty Information : </b>{product.warrantyInformation}</p>
                   <p><b>Shipping Information : </b>{product.shippingInformation}</p>
                   <p><b>Return policy : </b>{product.returnPolicy}</p>
                   <p><b>Availability Status : </b>{product.availabilityStatus}</p>
                   <p><b>Rating : </b>({product.rating}/5)</p>
                   <p><b>Discount : </b><span className="text-warning" style={{fontSize:"25px",fontWeight:"bolder"}}>{product.discountPercentage} %</span></p>
                   <p><b>Actual Price : </b><span className="text-success"><del className="text-danger">{product.price}</del> <span style={{fontSize:"25px",fontWeight:"bolder"}}>{(product.price-((product.price*product.discountPercentage)/100)).toFixed(2)} Rs.</span></span></p>
                   <button onClick={()=>handleBuyNow(product)} className="btn btn-warning">Buy now</button>
                </div>
            </div>
        </div>
      </div>
    </>
}

export default ViewMore;