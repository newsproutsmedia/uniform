import React from 'react';
import {
  Box,
  Grommet,
} from 'grommet';
import theme from '../../theme';

function Spacer() {
  return (
    <Grommet theme={theme}>
      <Box
        width="147px"
        direction="row"
        justify="center"
      >
        &nbsp;
      </Box>
    </Grommet>
  );
}

export default Spacer;
