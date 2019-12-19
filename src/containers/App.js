import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'animate.css/animate.css';
import './App.css';

import Header from '@Layouts/Header';
import Home from '@Routes/Home';
import Signin from '@Routes/Signin';
import Quiz from '@Routes/Quiz';

const App = () => (
  <Router key='Router'>
    <Header key='Header' />
    <Switch key='Switch'>
      <Route exact path='/' component={Home} key='Route Home' />
      <Route path='/signin' component={Signin} key='Route Signin' />
      <Route path='/quiz/:topic' component={Quiz} key='Route Quiz' />
    </Switch>
  </Router>
);

export default App;
