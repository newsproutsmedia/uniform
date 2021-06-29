import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Paragraph,
} from 'grommet';
import theme from '../../theme';

function Introduction() {
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
          Calculate your NPS® (Net Promoter Score)
        </Heading>
        <Paragraph align="center" alignSelf="center" textAlign="center" fill style={textStyle}>
          Calculating your NPS score is as simple as tallying up your responses
          and subtracting the percentage of detractors from the percentage of promoters.
          The score is a whole number that ranges from -100 to 100, and indicates customer
          happiness with your brand experience.
          <br />
          <br />
          Use the calculator below to calculate your NPS from your survey responses.
        </Paragraph>
      </Box>
    </Grommet>
  );
}

export default Introduction;
