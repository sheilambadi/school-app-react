import React, {
  Component
} from 'react';
import './App.css';
import Navbar from './components/NavBar';
import GetStudent from './components/GetStudents';

class App extends Component {
  render() {
    return ( <
      React.Fragment >
      <
      Navbar / >
      <
      GetStudent / >
      <
      /React.Fragment>
    );
  }
}

export default App;