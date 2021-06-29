import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import CalculatorGroupContainer from './CalculatorGroupContainer';
import DataInput from './DataInput';
import theme from '../../theme';
import positiveGroupBracket from './groupConnectorPositive.png';
import Icon from './Icon';

function GroupPositive() {
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
              <DataInput label="Total" />
            </Box>
          </CalculatorGroupContainer>
          <Box
            width="100%"
            direction="row"
            justify="center"
            style={{ position: 'relative', left: '82px' }}
          >
            <Icon icon={positiveGroupBracket} width="164" height="74" />
          </Box>

        </Box>
      </Box>
    </Grommet>
  );
}

export default GroupPositive;
