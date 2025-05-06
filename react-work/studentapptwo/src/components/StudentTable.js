function StudentTable({studentList,defaultBranch}){
    return <>
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

export default StudentTable;