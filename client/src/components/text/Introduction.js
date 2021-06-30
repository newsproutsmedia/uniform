import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
  Heading,
  Paragraph,
} from 'grommet';
import theme from '../../theme';

function Introduction({ heading, text, text2 }) {
  const headingStyle = {
    fontWeight: '350',
    marginBottom: '8px',
    textAlign: 'center',
  };
  const textStyle = {
    lineHeight: '1.4',
    padding: '0 40px 0 40px',
  };
  return (
    <Grommet theme={theme}>
      <Box
        width={{ max: '750px' }}
        alignContent="center"
        align="center"
        justify="start"
        margin={{ bottom: '4em' }}
        textAlign="center"
        padding="0 60px 0 60px"
      >
        <Heading size="2em" align="center" style={headingStyle} data-testid="mainheading">
          {heading}
        </Heading>
        <Paragraph align="center" alignSelf="center" textAlign="center" fill style={textStyle}>
          {text}
        </Paragraph>
        <Paragraph align="center" alignSelf="center" textAlign="center" fill style={textStyle}>
          {text2}
        </Paragraph>
      </Box>
    </Grommet>
  );
}

export default Introduction;

Introduction.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
