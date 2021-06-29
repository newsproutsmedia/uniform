import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
  Heading,
  Paragraph,
} from 'grommet';
import theme from '../../theme';

function Introduction({ heading, text }) {
  const headingStyle = {
    fontWeight: '350',
    marginBottom: '8px',
  };
  const textStyle = {
    lineHeight: '1.4',
  };
  return (
    <Grommet theme={theme}>
      <Box
        width={{ max: '750px' }}
        alignContent="center"
        align="center"
        justify="start"
        margin={{ bottom: '4em' }}
      >
        <Heading size="2em" align="center" style={headingStyle}>
          {heading}
        </Heading>
        <Paragraph align="center" alignSelf="center" textAlign="center" fill style={textStyle}>
          {text}
        </Paragraph>
      </Box>
    </Grommet>
  );
}

export default Introduction;

Introduction.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
