import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'animate.css/animate.css';
import './App.css';

import Header from '@Layouts/Header';
import Home from '@Routes/Home';
import Signin from '@Routes/Signin';
import Quiz from '@Routes/Quiz';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={Signin} />
      <Route path='/quiz/:topic' component={Quiz} />
    </Switch>
  </Router>
);

export default App;
