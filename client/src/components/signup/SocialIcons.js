import React from 'react';
import { Box, Grommet } from 'grommet';
import theme from '../../theme';
import { ReactComponent as Facebook } from './facebookBlackIcon.svg';
import { ReactComponent as Twitter } from './twitterBlackIcon.svg';

function SocialIcons() {
  return (
    <Grommet theme={theme}>
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="8px"
        style={{
          paddingTop: '2em',
        }}
      >
        <Facebook width="32px" height="32px" fill={theme.global.colors.grey} />
        <Twitter width="32px" height="32px" fill={theme.global.colors.grey} />
      </Box>
    </Grommet>
  );
}

export default SocialIcons;
