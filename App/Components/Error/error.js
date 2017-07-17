import React from 'react';
import './error.scss';

const Error = ({message}) =>(
  <div className="error-container module">
    <div className="error-header">
      Uh Oh!
    </div>
    <div className="error-message">
      {message}
    </div>
  </div>
)

export default Error;
