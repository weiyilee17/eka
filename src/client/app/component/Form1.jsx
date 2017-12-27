import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

class Form1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      informationValid: false
    }
    this.textChange = this.textChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.checkValidLocally = this.checkValidLocally.bind(this);
    this.usernameValid = this.usernameValid.bind(this);
    this.passwordValid = this.passwordValid.bind(this);
    this.emailValid = this.emailValid.bind(this);
    // this.encrypt = this.encrypt.bind(this);
  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveData(e) {
    e.preventDefault();
    console.log('this.state: ', this.state);

    let allLocalInputValid = this.checkValidLocally();

    // didn't need to make a seperate varaible, but I had it to increase readability
    if (allLocalInputValid) {
      this.setState({
        informationValid: true
      }, () =>{

        let sentObj = {};

        sentObj['username'] = this.state.username;

        // TODO: should encrypt it first
        sentObj['password'] = this.state.password;
        sentObj['email'] = this.state.email;

        axios.post('/form/1', sentObj)
          .then((res) => {
            console.log('data successfully sent!');
          })
          .catch((err) =>{
            alert('Oops, we can not send the data to the server');
          })
      });



    } else {
      console.log('not valid');
    }

  }

  checkValidLocally() {
    if (this.emailValid() && this.passwordValid() && this.emailValid()) {
      return true;
    } else {
      return false;
    }
  }

  usernameValid() {
    if (this.state.username.length !== 0) {
      return true;
    } else {
      alert('Please enter a user name!');
      return false;
    }
  }

  passwordValid() {
    if (this.state.password.length >= 6 && this.state.password.length <= 20) {
      return true;
    } else {
      alert('Please enter a valid password!')
      return false;
    }
  }

  emailValid() {
    // a@b.io has 6 charactors, although I'm not sure whether that is a valid email address
    if ( this.state.email.length >= 6 && this.state.email.includes("@") ) {
      return true;
    } else {
      alert('Please enter a valid email address!');
      return false;
    }
  }

  
  render() {
    return (
    <div>
      <p>Register an account!</p>

      <form>
        <label>
          username: <input type='text' name='username'
                    value={this.state.username} placeholder='Enter your username' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          password: <input type='text' name='password'
                    value={this.state.password} placeholder='Your password should be at least 6 charactors' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          email: <input type='text' name='email'
                    value={this.state.email} placeholder='Enter your email address' onChange={this.textChange}></input>
        </label>
        <br />


        {/* I didn't know how to combine react router's link with the button, so I had the button check integrity. The link to the next form will only appear if all inputs are good */}
        <input type='submit' value='Check for integrity!' onClick={this.saveData}></input>

      </form>

      <Link to = {'/'}>Back</Link>
      <br />

      {/* if the information is valid, the link will apear. Otherwise, it would only show an empty div tag */}
      {this.state.informationValid === true ? <Link to = {`/Forms/2/${this.state.username}`}>Save</Link> : <div></div>}

    </div>);
  }
}

export default Form1;