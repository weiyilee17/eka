import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

class Form2 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      firstname: '',
      lastname: '',
      phone: '',
      informationValid: false
    }
    this.textChange = this.textChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.checkValidLocally = this.checkValidLocally.bind(this);
    this.firstnameValid = this.firstnameValid.bind(this);
    this.lastnameValid = this.lastnameValid.bind(this);
    this.phoneValid = this.phoneValid.bind(this);
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

        // window.location is the url, pathname is 'Forms/2/user1'. After spliting it, the 4th one (index 3) is the user name
        let username = window.location.pathname.split('/')[3];

        this.setState({
          username: username
        })

        let sentObj = {};

        sentObj['firstname'] = this.state.firstname;
        sentObj['lastname'] = this.state.lastname;
        sentObj['phone'] = this.state.phone;
        sentObj['username'] = username;
        

        axios.post('/form/2', sentObj)
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
    if (this.phoneValid() && this.lastnameValid() && this.phoneValid()) {
      return true;
    } else {
      return false;
    }
  }

  firstnameValid() {
    if (this.state.firstname.length !== 0) {
      return true;
    } else {
      alert('Please enter your first name!');
      return false;
    }
  }

  lastnameValid() {
    if (this.state.lastname.length !== 0) {
      return true;
    } else {
      alert('Please enter your last name!')
      return false;
    }
  }

  phoneValid() {
    if ( this.state.phone.length !== 0 ) {
      return true;
    } else {
      alert('Please enter a valid phone address!');
      return false;
    }
  }

  
  render() {
    return (
    <div>
      <p>Register an account!</p>

      <form>
        <label>
          firstname: <input type='text' name='firstname'
                    value={this.state.firstname} placeholder='Enter your first name' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          lastname: <input type='text' name='lastname'
                    value={this.state.lastname} placeholder='Enter your last name' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          phone: <input type='text' name='phone'
                    value={this.state.phone} placeholder='Enter your phone number' onChange={this.textChange}></input>
        </label>
        <br />


        {/* I didn't know how to combine react router's link with the button, so I had the button check integrity. The link to the next form will only appear if all inputs are good */}
        <input type='submit' value='Check for integrity!' onClick={this.saveData}></input>

      </form>

      <Link to = {`/`}>Back</Link>
      <br />

      {/* if the information is valid, the link will apear. Otherwise, it would only show an empty div tag */}
      {this.state.informationValid === true ? <Link to = {`/Forms/3/${this.state.username}`}>Save</Link> : <div></div>}

    </div>);
  }
}

export default Form2;