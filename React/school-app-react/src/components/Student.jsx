import React, { Component } from "react";

class Student extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Adm No</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.students.map(student => (
                <tr key={student.id}>
                  <td>{student.admNo}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Student;
