import { useRef } from "react";

function AddStudent({setDefaultBranch,studentList,isRollExist,branchList,addStudent,setIsRollExist}){
    let rollInput  = useRef(""); // rollInput = {current: ''}
    let nameInput = useRef("");
    let mobileInput = useRef("");
    let branchInput = useRef("");
    
      const checkRollNumber = ()=>{
        let roll = rollInput.current.value;
        let status = studentList.some((student)=>{return student.roll == roll});
        setIsRollExist(status); 
      }
    return <>
       <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-6">
          <input onBlur={checkRollNumber} ref={rollInput} type="text" placeholder="Enter roll number" className="form-control"/>
          {isRollExist ? <small className="text-danger">Roll number is already taken</small> : ""}
        </div>
        <div className="col-md-6">
          <input ref={nameInput} type="text" placeholder="Enter student name" className="form-control"/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <select ref={branchInput} className="form-control">
            <option>Select branch</option>
            {branchList.map((branch,index)=>{return <option key={index}>{branch}</option>})}
          </select>
        </div>
        <div className="col-md-6">
          <input ref={mobileInput} type="text" placeholder="Enter mobile number" className="form-control"/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <button onClick={()=>{addStudent(rollInput.current.value,nameInput.current.value,branchInput.current.value,mobileInput.current.value)}} className="btn btn-success">ADD</button>
        </div>
        <div className="col-md-6">
          <button onClick={()=>setDefaultBranch("CS")} className="btn btn-primary ml-2">CS({studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button onClick={()=>setDefaultBranch("IT")} className="btn btn-warning ml-2">IT({studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button onClick={()=>setDefaultBranch("EC")} className="btn btn-danger ml-2">EC({studentList.filter((student)=>{return student.branch=="EC"}).length})</button>
          <button onClick={()=>setDefaultBranch("CV")} className="btn btn-info ml-2">CV({studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
          <button onClick={()=>setDefaultBranch("All")} className="btn btn-secondary ml-2">Total({studentList.length})</button>
        </div>
      </div>
     </div>
    </>
}

export default AddStudent;