import { useState } from "react";
import ToDoData from "./ToDoData";
function App(){
  const [taskList,setTaskList] = useState(ToDoData);
  const [defaultStatus,setDefaultStatus] = useState("active");
  const [title,setTitle] = useState("");
  const [pid,setPid] = useState("");
  const [priorityList,setPriorityList] = useState([
    {priorityId:1,priorityValue:"Low"},
    {priorityId:2, priorityValue: "Normal"},
    {priorityId:3,priorityValue:"High"}
  ]);
  const changeTaskStatus = (task,status)=>{
     let index = taskList.findIndex((obj)=>{return obj.title == task.title});
     task.status = status;
     taskList.splice(index,1);
     taskList.splice(index,0,task);
     setTaskList([...taskList]);
  }
  const addTask = ()=>{
      let date = new Date();
      date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      let status ="active";
      let newTask = {title,pid,date,status};
      setTaskList([...taskList,newTask]);
  }
  return <>
    <div className="bg-danger text-white p-2 d-flex justify-content-center">
      <small style={{fontWeight:"bold"}}>To Do App</small>
    </div>
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-6">
          <input onChange={(event)=>{setTitle(event.target.value)}} type="text" className="form-control" placeholder="Enter task title"/>
        </div>
        <div className="col-md-6">
          <select  onChange={(event)=>setPid(event.target.value)} className="form-control">
            {priorityList.map((obj,index)=>{return <option value={obj.priorityId} key={index}>{obj.priorityValue}</option>})}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <button onClick={addTask} className="btn btn-primary">ADD</button>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <button onClick={()=>setDefaultStatus("active")} disabled={defaultStatus == "active" ? true : false} className="btn btn-success">Active : {taskList.filter((task)=>{return task.status == "active"}).length}</button>
      <button onClick={()=>setDefaultStatus("deactive")} disabled={defaultStatus=="deactive" ? true: false} className="btn btn-danger ml-2">Deactive : {taskList.filter((task)=>{return task.status == "deactive"}).length}</button>
    </div>
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {taskList.filter((task)=>{return task.status == defaultStatus}).sort((a,b)=>{return b.pid-a.pid}).map((task,index)=>{return <tr className={(task.pid==3)?"bg-danger": (task.pid==2)?"bg-warning":"bg-success"} key={index}>
            <td>{index+1}</td>
            <td>{task.title}</td>
            <td>{task.date}</td>
            <td>{priorityList.find((obj)=>{return obj.priorityId==task.pid}).priorityValue}</td>
            <td>
              {task.status=='active' ? <button onClick={()=>{changeTaskStatus(task,'deactive')}} className="btn btn-secondary">Deactive</button> : <button onClick={()=>{changeTaskStatus(task,'active')}} className="btn btn-secondary">Active</button>}
            </td>
          </tr>})}
        </tbody>
      </table>
    </div>
  </>
}

export default App;