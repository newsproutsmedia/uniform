import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import { neg1Atom, neg2Atom, neg3Atom, neg4Atom, neg5Atom, neg6Atom, neg7Atom } from '../../data/atoms';
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
            <DataInput label="6" id="neg1" atom={neg1Atom} />
            <DataInput label="5" id="neg2" atom={neg2Atom} />
            <DataInput label="4" id="neg3" atom={neg3Atom} />
            <DataInput label="3" id="neg4" atom={neg4Atom} />
            <DataInput label="2" id="neg5" atom={neg5Atom} />
            <DataInput label="1" id="neg6" atom={neg6Atom} />
            <DataInput label="0" id="neg7" atom={neg7Atom} />
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
