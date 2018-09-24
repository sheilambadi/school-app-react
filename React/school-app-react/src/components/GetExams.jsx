import React, { Component } from "react";
import axios from "axios";
import Exam from "./Exam";
import { Link } from "react-router-dom";

class GetExams extends Component {
  state = {
    exams: []
  };
  render() {
    return (
      <div>
        <div className="container mt-3">
          <Link to="/newExams">
            <button className="btn-primary">Post Exams</button>
          </Link>
        </div>
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
