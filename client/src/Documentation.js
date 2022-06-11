import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Wróć</Link>
      <br />
      
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
