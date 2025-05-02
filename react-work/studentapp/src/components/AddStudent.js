import { Component } from "react";

class AddStudent extends Component {
    render() {
        let {branchList,studentList,addStudent,updateBranch} = this.props;
        return <>
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <input ref={(obj) => { this.rollInput = obj }} id="roll" type="text" placeholder="Enter roll number" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input ref={(obj) => { this.nameInput = obj }} type="text" placeholder="Enter student name" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                        <input ref={(obj) => { this.mobileInput = obj }} type="text" placeholder="Enter contact number" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <select ref={(obj) => { this.branchInput = obj }} className="form-control">
                            <option>Select branch</option>
                            {branchList.map((branch, index) => { return <option key={index} value={branch}>{branch}</option> })}
                        </select>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                        <button onClick={()=>addStudent(this.rollInput.value,this.nameInput.value,this.mobileInput.value,this.branchInput.value)} className="btn btn-success">ADD</button>
                    </div>
                    <div className="com-md-6">
                        <button onClick={() => {updateBranch("CS")}} className="btn btn-primary ml-2">CS({studentList.filter((student) => { return student.branch == "CS" }).length})</button>
                        <button onClick={() => {updateBranch("IT")}} className="btn btn-warning ml-2">IT({studentList.filter((student) => { return student.branch == "IT" }).length})</button>
                        <button onClick={() => {updateBranch("EC")}} className="btn btn-info ml-2">EC({studentList.filter((student) => { return student.branch == "EC" }).length})</button>
                        <button onClick={() => {updateBranch("CV")}} className="btn btn-danger ml-2">CV({studentList.filter((student) => { return student.branch == "CV" }).length})</button>
                        <button onClick={() => {updateBranch("All")}} className="btn btn-secondary ml-2">Total({studentList.length})</button>
                    </div>
                </div>
            </div>
        </>
    }
}
export default AddStudent;