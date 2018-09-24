import React, { Component } from "react";
import axios from "axios";

class PostStudents extends Component {
  state = {
    firstName: "",
    lastName: "",
    admNo: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePost = event => {
    event.preventDefault();

    const studentBody = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      admNo: this.state.admNo
    };

    axios
      .post(
        "http://localhost:8080/school-project/api/school/students/new",
        studentBody
      )
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card mt-3">
          <div className="card-body">
            <form onSubmit={this.handlePost}>
              <div className="form-group">
                <input
                  name="admNo"
                  type="text"
                  className="form-control"
                  placeholder="Admission Number"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary">Add Student</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostStudents;
