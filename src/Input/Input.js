import React from 'react';
import './styles.css';

const Input = (props) => {
  const { disabled } = props;
  return <input className="input-class" {...{ disabled }} />;
};

Input.propTypes = {
  disabled: React.PropTypes.bool,
};

export default Input;
