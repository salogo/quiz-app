import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import Header from '@Layouts/Header';
import Main from '@Layouts/Main';
import Footer from '@Layouts/Footer';
import Home from '@Pages/Home';
import Authenticate from '@Pages/Auth';
import Topic from '@Pages/Topic';
import Topics from '@/test/Topics';

import 'animate.css/animate.css';
import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/topic/*', name: 'Topic', Component: Topic },
  { path: '/authenticate', name: 'Authenticate', Component: Authenticate },
];

const initialState = {
  topics: [],
  player: {
    username: '',
    email: '',
    score: 0,
    id: '',
  },
};

const App = () => {
  const [state, setState] = useState(initialState);

  const updateVisitor = (e) => {
    const { id } = e.target;
    setState(
      {
        ...state,
        ...(state.topics[id].visit += 1),
      },
      [state.topics],
    );
  };

  useEffect(() => {
    if (state.topics.length === 0) {
      setState({
        ...state,
        ...(state.visit += 1),
        topics: Topics,
      });
    }
    // updateMainVisitor();
  }, [state]);

  return (
    <Router>
      <Header />
      <Main>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Animated>
              {Component.name === 'Home' ? (
                <Component topics={state.topics} count={updateVisitor} />
              ) : (
                <Component />
              )}
            </Animated>
          </Route>
        ))}
      </Main>
      <Footer />
    </Router>
  );
};
export default App;
