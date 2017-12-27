import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div>
      <p>form 1</p>

      <Link to = {'/'}> go back to home page</Link>

    </div>);
  }
}

export default Form1;