import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "./component/App.jsx";
import Form1 from "./component/Form1.jsx";
import Form2 from "./component/Form2.jsx";
import Form3 from "./component/Form3.jsx";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={ () => (<App />)} />
      <Route exact path="/Forms/1" render={ () => (<Form1 />)} />
      <Route exact path="/Forms/2/:username" render={ () => (<Form2 />)} />
      <Route exact path="/Forms/3/:username" render={ () => (<Form3 />)} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app'));