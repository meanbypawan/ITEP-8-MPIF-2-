import Header from "./components/Header";

const { Component } = require("react");
import Data from "./Data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS", "IT", "EC", "CV"],
      defaultBranch: "All"
    }
  }
  addStudent = () => {
    let roll = this.rollInput.value;
    let name = this.nameInput.value;
    let mobile = this.mobileInput.value;
    let branch = this.branchInput.value;
    let newStudent = { roll, name, mobile, branch };
    this.setState({ studentList: [...this.state.studentList, newStudent] });
  }
  removeStudent = (roll) => {
    if (window.confirm("Do you want to delete it ?")) {
      let index = this.state.studentList.findIndex((student) => { return student.roll == roll });
      this.state.studentList.splice(index, 1);
      this.setState({ studentList: [...this.state.studentList] });
    }
  }
  render() {
    return <>
      <Header />
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
              {this.state.branchList.map((branch, index) => { return <option value={branch}>{branch}</option> })}
            </select>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button onClick={this.addStudent} className="btn btn-success">ADD</button>
          </div>
          <div className="com-md-6">
            <button onClick={() => { this.setState({ defaultBranch: "CS" }) }} className="btn btn-primary ml-2">CS({this.state.studentList.filter((student) => { return student.branch == "CS" }).length})</button>
            <button onClick={() => { this.setState({ defaultBranch: "IT" }) }} className="btn btn-warning ml-2">IT({this.state.studentList.filter((student) => { return student.branch == "IT" }).length})</button>
            <button onClick={() => { this.setState({ defaultBranch: "EC" }) }} className="btn btn-info ml-2">EC({this.state.studentList.filter((student) => { return student.branch == "EC" }).length})</button>
            <button onClick={() => { this.setState({ defaultBranch: "CV" }) }} className="btn btn-danger ml-2">CV({this.state.studentList.filter((student) => { return student.branch == "CV" }).length})</button>
            <button onClick={() => { this.setState({ defaultBranch: "All" }) }} className="btn btn-secondary ml-2">Total({this.state.studentList.length})</button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student) => { return this.state.defaultBranch == student.branch || this.state.defaultBranch == "All" }).map((student, index) => {
              return <tr key={index}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.mobile}</td>
                <td>
                  <button onClick={() => { this.removeStudent(student.roll) }} className="btn btn-outline-danger">Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  }
}

export default App;