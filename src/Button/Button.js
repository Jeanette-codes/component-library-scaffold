import React from 'react';
import './styles.css';

const Button = ({ children, onClick }) => (
  <div className={'test-button'} onClick={onClick}>
    {children}
  </div>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
