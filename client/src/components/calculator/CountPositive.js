import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import { pos1Atom, pos2Atom } from '../../data/atoms';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataInput from './DataInput';
import theme from '../../theme';
import positiveCountBracket from './responsesConnectorPositive.png';
import Icon from './Icon';

function CountPositive() {
  return (
    <Grommet theme={theme}>
      <Box
        width="148px"
        direction="column"
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
            <DataInput label="10" id="pos1" key="pos1" atom={pos1Atom} />
            <DataInput label="9" id="pos2" key="pos2" atom={pos2Atom} />
          </Box>
        </CalculatorGroupContainer>
        <Box
          width="100%"
          direction="row"
          justify="center"
        >
          <Icon icon={positiveCountBracket} width="106" height="74" />
        </Box>

      </Box>
    </Grommet>
  );
}

export default CountPositive;
