import React, { Component } from "react";
import axios from "axios";
import Results from "./Results";

class GetResults extends Component {
  state = {
    results: []
  };
  render() {
    return <Results results={this.state.results} />;
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
