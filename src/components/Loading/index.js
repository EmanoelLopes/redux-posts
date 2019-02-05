import React from 'react';
import PropTypes from 'prop-types';
import { P } from 'styles';
import Icon from 'components/Icon';

const Loading = (props) => {
  const { text } = props;

  return (
    <P className="loading">
      <Icon
        icon="loader"
        animation="spin"
        size="sm" />
      { text }
    </P>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Loading;