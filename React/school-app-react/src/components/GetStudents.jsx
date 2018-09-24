import React, { Component } from "react";
import axios from "axios";
import Student from "./Student";
import PostStudents from "./PostStudents";

class GetStudent extends Component {
  state = { students: [] };
  render() {
    return (
      <div>
        <PostStudents />
        <Student key={this.state.students.id} students={this.state.students} />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/school-project/api/school/students")
      .then(res => {
        const students = res.data;
        this.setState({ students });
        // console.log(res.data);
      });
  }
}

export default GetStudent;
