import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setM1, setM2, setM3 } from "../redux-config/MessageSlice";

function Home(){
     let {m1,m2,m3}= useSelector((store)=>store.MessageState);
     const dispatch = useDispatch();
     let m1Ref = useRef();
     let m2Ref = useRef();
     let m3Ref = useRef();
     return <>
      <div className="container">
        <h3>Home Component..</h3>
        {m1} : {m2} : {m3}
        <div className="form-group">
            <input ref={m1Ref} type="text" className="form-control" placeholder="Write Message For M1"/>
            <button onClick={()=>dispatch(setM1(m1Ref.current.value))} className="btn btn-outline-primary mt-2">Change M1</button>
        </div>
        <div className="form-group">
            <input ref={m2Ref} type="text" className="form-control" placeholder="Write Message For M2"/>
            <button onClick={()=>dispatch(setM2(m2Ref.current.value))} className="btn btn-outline-warning mt-2">Change M2</button>
        </div>
        <div className="form-group">
            <input ref={m3Ref} type="text" className="form-control" placeholder="Write Message For M3"/>
            <button onClick={()=>dispatch(setM3(m3Ref.current.value))} className="btn btn-outline-danger mt-2">Change M3</button>
        </div>

      </div>
    </>
}

export default Home;