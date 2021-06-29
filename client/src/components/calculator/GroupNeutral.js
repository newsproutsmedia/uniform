import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataInput from './DataInput';
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
              <DataInput label="Total" />
            </Box>
          </CalculatorGroupContainer>
        </Box>
      </Box>
    </Grommet>
  );
}

export default GroupNeutral;
