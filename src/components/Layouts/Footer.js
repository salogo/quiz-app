import React, { useState, useEffect } from 'react';

import Visitor from '../../test/Visitors';

import './Footer.css';

const Footer = () => {
  const [visitor, setVisitor] = useState(Visitor);
  useEffect(() => {
    setVisitor((visit) => visit + 1);
  }, []);
  return (
    <footer className='footer'>
      <div className='container d-flex justify-content-between'>
        <span className='text-muted'>
          <i className='fa fa-copyright' aria-hidden='true' />
          Copyright MIS Quiz. All Rights Reserved.
        </span>
        <span className='text-muted'>
Visitor
          {' '}
          {visitor}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
