import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
} from 'grommet';
import theme from '../../theme';

function SectionPlacard({ children }) {
  const placardStyle = {
    fontSize: '14px',
    fontWeight: '700',
    position: 'relative',
    top: '-14px',
  };
  return (
    <Grommet theme={theme}>
      <Box
        direction="row"
        justify="center"
        background="purple"
        round="2px"
        pad={{
          top: '1px',
          right: '12px',
          bottom: '0px',
          left: '12px',
        }}
        style={placardStyle}
      >
        { children }
      </Box>
    </Grommet>
  );
}

export default SectionPlacard;

SectionPlacard.propTypes = {
  children: PropTypes.string.isRequired,
};
