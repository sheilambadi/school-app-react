import React, { Component } from "react";
import axios from "axios";

class PostExams extends Component {
  state = {
    examName: ""
  };
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handlePost}>
              <div className="form-group">
                <input
                  value={this.state.examName}
                  type="text"
                  className="form-control"
                  placeholder="Exam Name"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary">Add Exam</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      examName: event.target.value
    });
  };

  handlePost = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/school-project/api/school/exams/new", {
        examName: this.state.examName
      })
      .then(res => {
        console.log("Exams posted successfully");
      });
  };
}

export default PostExams;
