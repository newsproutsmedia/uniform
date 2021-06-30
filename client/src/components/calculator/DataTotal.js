import React from 'react';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
  Text,
} from 'grommet';
import theme from '../../theme';

function DataTotal({ label, selector }) {
  const total = useRecoilValue(selector);
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48px',
    height: '48px',
    marginBottom: '24px',
    backgroundColor: '#ffffff',
    border: '1px solid #474645',
    borderRadius: '4px',
  };
  return (
    <Grommet theme={theme}>
      <Box
        align="center"
        direction="column"
        justify="end"
      >
        <Text>{label}</Text>
        <Box textAlign="center" style={style}>{total}</Box>
      </Box>
    </Grommet>
  );
}

export default DataTotal;

DataTotal.propTypes = {
  label: PropTypes.string.isRequired,
  selector: PropTypes.objectOf(PropTypes.object).isRequired,
};
