import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Text,
} from 'grommet';
import { useRecoilValue } from 'recoil';
import { getPositivePercent } from '../../data/selectors';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import theme from '../../theme';

function TotalPositive() {
  const posPercent = useRecoilValue(getPositivePercent);
  return (
    <Grommet theme={theme}>
      <Box
        width="148px"
        direction="row"
        justify="center"
      >
        <Box
          width="106px"
          direction="column"
          justify="top"
        >
          <CalculatorGroupContainer type="positive">
            <Box
              direction="row"
              justify="center"
              pad={{
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px',
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
                <Heading level="3" textAlign="center" style={{ marginBottom: '0px' }}>
                  {posPercent}
                  %
                </Heading>
                <Text textAlign="center" size="small">of total responses</Text>
              </Box>
            </Box>
          </CalculatorGroupContainer>
        </Box>
      </Box>
    </Grommet>
  );
}

export default TotalPositive;
