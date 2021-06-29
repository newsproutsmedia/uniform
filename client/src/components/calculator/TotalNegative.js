import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Text,
} from 'grommet';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import theme from '../../theme';

function TotalNegative() {
  return (
    <Grommet theme={theme}>
      <Box
        width="148px"
        direction="row"
        justify="center"
        style={{
          position: 'relative',
          left: '2px',
        }}
      >
        <Box
          width="106px"
          direction="column"
          justify="top"
        >
          <CalculatorGroupContainer type="negative">
            <Box
              direction="row"
              justify="center"
              pad={{
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px',
              }}
              margin={{
                horizontal: 'auto',
              }}
              gap="12px"
            >
              <Box
                direction="column"
                justify="center"
                pad={{
                  bottom: '20px',
                }}
              >
                <Heading level="3" textAlign="center" style={{ marginBottom: '0px' }}>0%</Heading>
                <Text textAlign="center" size="small">of total responses</Text>
              </Box>
            </Box>
          </CalculatorGroupContainer>
        </Box>
      </Box>
    </Grommet>
  );
}

export default TotalNegative;
