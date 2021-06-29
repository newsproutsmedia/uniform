import React from 'react';
import PropTypes from 'prop-types';
import {
  Grommet,
  Heading,
  Paragraph,
} from 'grommet';

import theme from '../../theme';

function CalculatorGroupInstructions({ heading, text }) {
  const headingStyle = {
    marginTop: '20px',
    marginBottom: '4px',
  };
  const paragraphStyle = {
    marginTop: '0px',
  };
  return (
    <Grommet theme={theme}>
      <Heading level="4" style={headingStyle}>{heading}</Heading>
      <Paragraph style={paragraphStyle}>{text}</Paragraph>
    </Grommet>
  );
}

export default CalculatorGroupInstructions;

CalculatorGroupInstructions.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
