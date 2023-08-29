import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      Sorry  this page does not exist. Click the link below to return to the home page

      <Link to='/' >Click to Return</Link>

    </div>
  )
}

export default Error