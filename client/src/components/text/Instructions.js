import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ text }) {
  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default Instructions;

Instructions.propTypes = {
  text: PropTypes.string.isRequired,
};
