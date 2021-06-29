import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataInput from './DataInput';
import theme from '../../theme';
import negativeCountBracket from './responsesConnectorNegative.png';
import Icon from './Icon';

function CountNegative() {
  return (
    <Grommet theme={theme}>
      <Box
        width="444px"
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
            gap="12px"
          >
            <DataInput label="6" />
            <DataInput label="5" />
            <DataInput label="4" />
            <DataInput label="3" />
            <DataInput label="2" />
            <DataInput label="1" />
            <DataInput label="0" />
          </Box>
        </CalculatorGroupContainer>
        <Box
          width="100%"
          direction="row"
          justify="center"
        >
          <Icon icon={negativeCountBracket} width="396" height="74" />
        </Box>

      </Box>
    </Grommet>
  );
}

export default CountNegative;
