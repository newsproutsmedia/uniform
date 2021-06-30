import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import { neut1Atom, neut2Atom } from '../../data/atoms';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataInput from './DataInput';
import theme from '../../theme';
import neutralCountBracket from './responsesConnectorNeutral.png';
import Icon from './Icon';

function CountNeutral() {
  return (
    <Grommet theme={theme}>
      <Box
        width="148px"
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
            <DataInput label="8" id="neut1" key="neut1" atom={neut1Atom} />
            <DataInput label="7" id="neut2" key="neut2" atom={neut2Atom} />
          </Box>
        </CalculatorGroupContainer>
        <Box
          width="100%"
          direction="row"
          justify="center"
        >
          <Icon icon={neutralCountBracket} width="106" height="74" />
        </Box>

      </Box>
    </Grommet>
  );
}

export default CountNeutral;
