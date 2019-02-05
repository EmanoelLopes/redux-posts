import React from 'react';
import PropTypes from 'prop-types';
import { I } from 'styles';
import 'boxicons';

const Icon = (props) => {
  const {
    icon,
    animation,
    size
  } = props;

  return (
    <I className={`bx bx-${icon} bx-${animation} bx-${size}`}></I>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  animation: PropTypes.string,
  size: PropTypes.string
};

Icon.defaultProps = {
  icon: '',
  animation: '',
  size: 'md'
};

export default Icon;