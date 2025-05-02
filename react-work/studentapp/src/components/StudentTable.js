import { Component } from "react";

class StudentTable extends Component {
    render() {
        let {studentList,defaultBranch} = this.props;
        return <>
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
                        {studentList.filter((student) => { return defaultBranch == student.branch || defaultBranch == "All" }).map((student, index) => {
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

export default StudentTable;