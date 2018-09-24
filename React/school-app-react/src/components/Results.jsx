import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Exam Name</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>English</th>
                <th>Maths</th>
                <th>Kiswahili</th>
                <th>Chemistry</th>
                <th>Biology</th>
                <th>Physics</th>
                <th>Geography</th>
                <th>History</th>
                <th>CRE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.results.map(result => (
                <tr key={result.id}>
                  <td>{result.examId.examName}</td>
                  <td>
                    {result.studentId.firstName} {result.studentId.lastName}
                  </td>
                  <td>{result.studentId.admNo}</td>
                  <td>{result.english}</td>
                  <td>{result.kiswahili}</td>
                  <td>{result.math}</td>
                  <td>{result.chemistry}</td>
                  <td>{result.biology}</td>
                  <td>{result.physics}</td>
                  <td>{result.geography}</td>
                  <td>{result.history}</td>
                  <td>{result.cre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Results;
