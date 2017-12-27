import React from 'react';

import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import { Link } from 'react-router-dom';


// Didn't make it stateless in case we want to makes changes in the future
class App extends React.Component {

  render() {
  return (
    <div>
      <h1>EKA Solutions</h1>
      <p>Register as an user to join us~</p>

      <Link to = {'/Forms/1'}>Register!</Link>


    </div>);
  }

}

export default App;