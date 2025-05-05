import { useRef, useState } from "react";
import Header from "./components/Header";
import Data from "./Data";
function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","CV"]);
  const [defaultBranch,setDefaultBranch] = useState("All");
  const [isRollExist,setIsRollExist] = useState(false);
  let rollInput  = useRef(""); // rollInput = {current: ''}
  let nameInput = useRef("");
  let mobileInput = useRef("");
  let branchInput = useRef("");
  const addStudent = ()=>{
     let roll = rollInput.current.value;
     let name = nameInput.current.value;
     let branch = branchInput.current.value;
     let mobile = mobileInput.current.value;
     let newStudent = {roll,name,branch,mobile};
     setStudentList([...studentList,newStudent]);
  }
  const removeStudent = (roll)=>{
    if(window.confirm("Do you want to delete it ?")){
      let index = studentList.findIndex((student)=>{return student.roll == roll});
      studentList.splice(index,1);
      setStudentList([...studentList]);
    }
  }
  const checkRollNumber = ()=>{
    let roll = rollInput.current.value;
    let status = studentList.some((student)=>{return student.roll == roll});
    setIsRollExist(status); 
  }
  return <>
     <Header/>
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
          <button onClick={addStudent} className="btn btn-success">ADD</button>
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
     <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Roll number</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Branch</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {studentList.filter((student)=>{return student.branch==defaultBranch || defaultBranch=="All"}).map((student,index)=>{return <tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.mobile}</td>
            <td>{student.branch}</td>
            <td>
              <button onClick={()=>{removeStudent(student.roll)}} className="btn btn-outline-danger">Remove</button>
            </td>
          </tr>})}
        </tbody>
      </table>
     </div>
  </>
}

export default App;