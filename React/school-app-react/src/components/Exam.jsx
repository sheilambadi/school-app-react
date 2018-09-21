import React, { Component } from "react";

class Exam extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <th>Exam Name</th>
            </thead>
            <tbody>
              {this.props.exams.map(exam => (
                <tr key={exam.id}>
                  <td>{exam.examName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Exam;
