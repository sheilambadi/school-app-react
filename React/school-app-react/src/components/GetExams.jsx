import React, { Component } from "react";
import axios from "axios";
import Exam from "./Exam";
import PostExams from "./PostExams";

class GetExams extends Component {
  state = {
    exams: []
  };
  render() {
    return (
      <div>
        <PostExams />
        <Exam exams={this.state.exams} />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/school-project/api/school/exams")
      .then(res => {
        const exams = res.data;
        this.setState({ exams });
        // console.log(exams);
      });
  }
}

export default GetExams;
