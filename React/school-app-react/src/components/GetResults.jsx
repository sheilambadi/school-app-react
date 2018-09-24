import React, { Component } from "react";
import axios from "axios";
import Results from "./Results";
import { Link } from "react-router-dom";

class GetResults extends Component {
  state = {
    results: []
  };
  render() {
    return (
      <div>
        <div className="container mt-3">
          <Link to="/newExams">
            <button className="btn-primary">Post Exams</button>
          </Link>
        </div>
        <Results results={this.state.results} />;
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/school-project/api/school/results")
      .then(res => {
        const results = res.data;
        this.setState({ results });
        console.log(results);
      });
  }
}

export default GetResults;
