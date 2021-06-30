import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import { getNegativeTotal } from '../../data/selectors';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataTotal from './DataTotal';
import theme from '../../theme';
import negativeGroupBracket from './groupConnectorNegative.png';
import Icon from './Icon';

function GroupNegative() {
  return (
    <Grommet theme={theme}>
      <Box
        width="444px"
        direction="row"
        justify="center"
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
              gap="12px"
            >
              <DataTotal label="Total" selector={getNegativeTotal} />
            </Box>
          </CalculatorGroupContainer>
          <Box
            width="100%"
            direction="row"
            justify="center"
            style={{ position: 'relative', right: '79px' }}
          >
            <Icon icon={negativeGroupBracket} width="158" height="74" />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default GroupNegative;
