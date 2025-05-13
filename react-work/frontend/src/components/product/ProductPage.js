import { useNavigate } from "react-router-dom";

function ProductPage({productList,setProductList}){
    const navigate = useNavigate();
    return <>
      <div className="container mt-3">
         <div className="row">
           {productList.map((product,index)=>{return <div className="col-md-3 p-2 mt-2" key={index}>
             <div className="d-flex justify-content-center align-items-center flex-column" style={{boxShadow: "10px 10px 10px grey",minHeight:"350px"}}>
                <img src={product.thumbnail} height="250px" width="100%"/>
                <p className="text-center">{product.title.substring(0,25)}</p>
                <h3 className="text-success text-center">{product.price} Rs.</h3>
                <button onClick={()=>navigate(`view-more/${product._id}`)}  className="btn btn-warning" style={{width:"100%"}}>View more</button>
             </div>
           </div>})}
         </div>
      </div>
    </>
}

export default ProductPage;