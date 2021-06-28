import React from 'react';
import PropTypes from 'prop-types';

function InstructionHeading({ text }) {
  const instructionsStyle = {
    fontWeight: 'bold',
  };
  return (
    <>
      <p style={instructionsStyle}>{text}</p>
    </>
  );
}

export default InstructionHeading;

InstructionHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
