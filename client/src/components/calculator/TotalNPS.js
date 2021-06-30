import React from 'react';
import {
  Box,
  Grommet,
  Heading,
  Text,
} from 'grommet';
import { useRecoilValue } from 'recoil';
import { getTotalScore } from '../../data/selectors';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import theme from '../../theme';

function TotalNPS() {
  const npsScore = useRecoilValue(getTotalScore);
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
        >
          <CalculatorGroupContainer type="total">
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
                <Heading level="3" textAlign="center" style={{ marginBottom: '0px' }}>{npsScore}</Heading>
                <Text textAlign="center" size="small">This is your NPS</Text>
              </Box>
            </Box>
          </CalculatorGroupContainer>
        </Box>
      </Box>
    </Grommet>
  );
}

export default TotalNPS;
