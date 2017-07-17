import React from 'react';
import PropTypes from 'prop-types';
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
);

Error.propTypes = {
  message:PropTypes.string
}

export default Error;
