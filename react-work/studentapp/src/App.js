import AddStudent from "./components/AddStudent";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
const { Component } = require("react");
import Data from "./Data";
class App extends Component {
  constructor() {
    console.log("constructor executed...");
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS", "IT", "EC", "CV"],
      defaultBranch: "All"
    }
  }
  addStudent = (roll,name,mobile,branch) => {
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
  updateBranch = (branchValue)=>{
    this.setState({defaultBranch: branchValue});
  }
  componentDidMount(){
    console.log("componentDidMount() executed...");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate() executed...");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount() executed....");
  }
  render() {
    console.log("render() executed...");
    return <>
      <Header />
      <AddStudent updateBranch={this.updateBranch} addStudent={this.addStudent} studentList={this.state.studentList} branchList={this.state.branchList}/>
      <StudentTable  defaultBranch={this.state.defaultBranch} studentList={this.state.studentList}/>
    </>
  }
}

export default App;