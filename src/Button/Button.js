import React from 'react';
import './styles.css';

export const Button = ({buttonText, onClick}) => (
  <button className={'test-button'} onClick={onClick}>
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonText: React.PropTypes.string.isRequired,
  onClick:    React.PropTypes.func,
};

export default Button;
