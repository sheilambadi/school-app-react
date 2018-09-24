import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

class ChartsTest extends Component {
  state = {
    options: {}
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.options}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/school-project/api/school/students/1/2")
      .then(res => {
        const english = res.data[0].english;
        const maths = res.data[0].math;
        const kiswahili = res.data[0].kiswahili;
        const chemistry = res.data[0].chemistry;
        const physics = res.data[0].physics;
        const biology = res.data[0].biology;
        const history = res.data[0].history;
        const geography = res.data[0].geography;
        const cre = res.data[0].cre;

        const subjects = {
          english: english,
          maths: maths,
          kiswahili: kiswahili,
          chemistry: chemistry,
          physics: physics,
          biology: biology,
          history: history,
          geography: geography,
          cre: cre
        };

        const options = {
          title: {
            text: res.data[0].examId.examName + " Results"
          },
          series: [
            {
              name: res.data[0].examId.examName,
              data: [
                subjects.english,
                subjects.maths,
                subjects.kiswahili,
                subjects.chemistry,
                subjects.physics,
                subjects.biology,
                subjects.history,
                subjects.geography,
                subjects.cre
              ]
            }
          ],
          xAxis: {
            categories: [
              "English",
              "Maths",
              "Kiswahili",
              "Chemistry",
              "Physics",
              "Biology",
              "History",
              "Geography",
              "CRE"
            ]
          },
          yAxis: {
            title: {
              text: "Marks in %"
            }
          }
        };

        this.setState({ options });
      });
  }
}

export default ChartsTest;
