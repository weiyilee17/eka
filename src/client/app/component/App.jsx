import React from 'react';

import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import { Link } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  render() {
  return (
    <div>
      <p>Fill these forms~</p>

      <Link to = {'/Forms/1'}>First Link</Link>


    </div>);
  }

}

export default App;