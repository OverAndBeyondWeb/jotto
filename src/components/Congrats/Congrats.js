import React from 'react';
import PropTypes from 'prop-types';

const congratsMessage = <span className="congrats-message">Congratulations! you guessed correctly</span>;

const Congrats = (props) => (
  <div className="congrats">
    {props.success ? congratsMessage : null}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;