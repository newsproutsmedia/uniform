import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import { getNeutralTotal } from '../../data/selectors';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataTotal from './DataTotal';
import theme from '../../theme';

function GroupNeutral() {
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
          <CalculatorGroupContainer type="neutral">
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
              <DataTotal label="Total" selector={getNeutralTotal} />
            </Box>
          </CalculatorGroupContainer>
        </Box>
      </Box>
    </Grommet>
  );
}

export default GroupNeutral;
