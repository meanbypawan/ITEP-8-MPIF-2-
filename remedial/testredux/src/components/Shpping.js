import { Outlet, useNavigate } from "react-router-dom";

function Shopping(){
    const navigate = useNavigate();
    return <>
      <div className="container mt-2">
        <button onClick={()=>navigate("product")} className="btn btn-outline-warning">Product</button>
        <button onClick={()=>navigate("category")} className="btn btn-outline-success ml-2">Category</button>
        <div className="d-flex mt-3 justify-content-around">
            <div className="" style={{width:"300px",height:"300px",border:"1px solid black"}}>
                
            </div>
            <div className="" style={{width:"300px",height:"300px",border:"1px solid black"}}>
              <Outlet/>
            </div>
            <div className="" style={{width:"300px",height:"300px",border:"1px solid black"}}>
                
            </div>
        </div>
      </div>
    </>
}

export default Shopping;