import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

class Form3 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      address: '',
      city: '',
      state: '',
      zip: '',
      informationValid: false
    }
    this.textChange = this.textChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.checkValidLocally = this.checkValidLocally.bind(this);
    this.addressValid = this.addressValid.bind(this);
    this.cityValid = this.cityValid.bind(this);
    this.stateValid = this.stateValid.bind(this);
    this.zipValid = this.zipValid.bind(this);
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

        sentObj['address'] = this.state.address;
        sentObj['city'] = this.state.city;
        sentObj['state'] = this.state.state;
        sentObj['zip'] = this.state.zip;
        
        sentObj['username'] = username;
        

        axios.post('/form/3', sentObj)
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
    if (this.stateValid() && this.cityValid() && this.stateValid() && this.zipValid()) {
      return true;
    } else {
      return false;
    }
  }

  addressValid() {
    if (this.state.address.length !== 0) {
      return true;
    } else {
      alert('Please enter your address!');
      return false;
    }
  }

  cityValid() {
    if (this.state.city.length !== 0) {
      return true;
    } else {
      alert('Please enter your living city!')
      return false;
    }
  }

  stateValid() {
    if ( this.state.state.length !== 0 ) {
      return true;
    } else {
      alert('Please enter a valid state!');
      return false;
    }
  }

  zipValid() {
    if ( this.state.zip.length !== 0 ) {
      return true;
    } else {
      alert('Please enter a valid zip code!');
      return false;
    }
  }

  
  render() {
    return (
    <div>
      <p>Register an account!</p>

      <form>
        <label>
          address: <input type='text' name='address'
                    value={this.state.address} placeholder='Enter your address' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          city: <input type='text' name='city'
                    value={this.state.city} placeholder='Enter your city' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          state: <input type='text' name='state'
                    value={this.state.state} placeholder='Enter your state' onChange={this.textChange}></input>
        </label>
        <br />

        <label>
          zip: <input type='text' name='zip'
                    value={this.state.zip} placeholder='Enter your zip' onChange={this.textChange}></input>
        </label>
        <br />


        {/* I didn't know how to combine react router's link with the button, so I had the button check integrity. The link to the next form will only appear if all inputs are good */}
        <input type='submit' value='Check for integrity!' onClick={this.saveData}></input>

      </form>

      <Link to = {`/Forms/2/${this.state.username}`}>Back</Link>
      <br />

      {/* if the information is valid, the link will apear. Otherwise, it would only show an empty div tag */}
      {this.state.informationValid === true ? <Link to = {`/`}>Save</Link> : <div></div>}

    </div>);
  }
}

export default Form3;