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
  };
  const textStyle = {
    lineHeight: '1.5',
  };
  return (
    <Grommet theme={theme}>
      <Box width={{ max: '750px' }} alignContent="center" align="center" justify="start">
        <Heading size="1.8em" align="center" style={headingStyle}>
          Calculate your NPS
          <sup style={{ fontSize: '18px' }}>&reg;</sup>
          &nbsp;
          (Net Promoter Score)
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
