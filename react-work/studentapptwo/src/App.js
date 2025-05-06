import { useRef, useState } from "react";
import Header from "./components/Header";
import Data from "./Data";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
function App(){
  const [studentList,setStudentList] = useState(Data);
  const [branchList,setBranchList] = useState(["CS","IT","EC","CV"]);
  const [defaultBranch,setDefaultBranch] = useState("All");
  const [isRollExist,setIsRollExist] = useState(false);
  const addStudent = (roll,name,branch,mobile)=>{
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
  return <>
     <Header/>
     <AddStudent setDefaultBranch={setDefaultBranch} setIsRollExist={setIsRollExist} addStudent={addStudent} studentList={studentList} isRollExist={isRollExist} branchList={branchList}/>
     <StudentTable studentList={studentList} defaultBranch={defaultBranch}/>
  </>
}

export default App;