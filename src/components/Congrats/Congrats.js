import React from 'react';

const congratsMessage = <span className="congrats-message">Congratulations! you guessed correctly</span>;

const Congrats = (props) => (
  <div className="congrats">
    {props.success ? congratsMessage : null}
  </div>
);

export default Congrats;