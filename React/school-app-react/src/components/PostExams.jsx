import React, { Component } from "react";
import axios from "axios";
import XLSX from "xlsx";

class PostExams extends Component {
  state = {
    examName: "",
    data: [],
    cols: []
  };

  constructor(props) {
    super(props);
    this.btnExam = React.createRef();
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <strong>Add Exam Excel File</strong>
          </div>

          <div className="card-body">
            <p>
              {" "}
              <a
                href="http://localhost:8080/school-project/api/excel/exams"
                download
              >
                Download
              </a>{" "}
              this file and use it to upload data (Leave column headers as they
              are)
            </p>

            <button
              className="btn btn-dark mb-3"
              id="examFileBtn"
              ref={this.btnExam}
            >
              Add Exams From File
            </button>

            <DragDropFile handleFile={this.handleFile}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <DataInput handleFile={this.handleFile} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12" />
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <OutTable data={this.state.data} cols={this.state.cols} />
                  </div>
                </div>
              </div>
            </DragDropFile>
          </div>
        </div>

        <div className="card mt-3">
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

  handleFile = file => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const tableHeader = ["examName"];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: tableHeader });

      const btnExam = this.btnExam.current;
      // console.log("Btn" + btnExam);

      btnExam.addEventListener("click", () => {
        for (let i = 0; i < jsonData.length; i++) {
          if (i !== 0) {
            const examBody = {
              examName: jsonData[i].examName
            };

            axios
              .post(
                "http://localhost:8080/school-project/api/school/exams/new",
                examBody
              )
              .then(res => {
                console.log("Exams from file posted successfully");
              });
          }
        }
      });
      /* Update state */
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) });
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  suppress(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  onDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (files && files[0]) this.props.handleFile(files[0]);
  }
  render() {
    return (
      <div
        onDrop={this.onDrop}
        onDragEnter={this.suppress}
        onDragOver={this.suppress}
      >
        {this.props.children}
      </div>
    );
  }
}

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component {
  render() {
    return (
      <div className="container table-responsive mt-3">
        <table className="table table-bordered">
          <tbody>
            {this.props.data.map((r, i) => (
              <tr key={i}>
                {this.props.cols.map(c => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

/* list of supported file types */
const SheetJSFT = ["xlsx", "xlsb", "xlsm", "xls"]
  .map(function(x) {
    return "." + x;
  })
  .join(",");

/* generate an array of column objects */
const make_cols = refstr => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};
export default PostExams;
