import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GetStudent from "./GetStudents";
import GetExams from "./GetExams";
import GetResults from "./GetResults";
import PostExams from "./PostExams";
import PostStudents from "./PostStudents";
import PostResults from "./PostResults";
import ChartsTest from "./ChartsTest";
// Stateless Functional Component

const Navbar = props => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            School App
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exams" className="nav-link">
                  Exams
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/results" className="nav-link">
                  Results
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route name="studentResult" path="/:id" component={ChartsTest} />
        <Route path="/newStudents" component={PostStudents} />
        <Route exact path="/" component={GetStudent} />
        <Route path="/newExams" component={PostExams} />
        <Route path="/exams" component={GetExams} />
        <Route path="/newResults" component={PostResults} />
        <Route path="/results" component={GetResults} />
      </div>
    </Router>
  );
};

export default Navbar;
