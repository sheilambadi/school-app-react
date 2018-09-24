import React, { Component } from "react";
import axios from "axios";
import Exam from "./Exam";
import PostExams from "./PostExams";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GetExams extends Component {
  state = {
    exams: []
  };
  render() {
    return (
      <div>
        {/* <Router>
          <ul>
            <li>
              <Link to="/results">Add Exams</Link>
            </li>
          </ul>
        </Router> */}
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
