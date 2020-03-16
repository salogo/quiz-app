import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const Main = (props) => {
  const { children } = props;
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};


Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
