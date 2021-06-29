import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
  TextInput,
  Text,
} from 'grommet';
import theme from '../../theme';

function DataInput({ label }) {
  const inputStyle = {
    width: '48px',
    height: '48px',
    marginBottom: '24px',
  };
  return (
    <Grommet theme={theme}>
      <Box
        align="center"
        direction="column"
        justify="end"
      >
        <Text>{label}</Text>
        <TextInput textAlign="center" focusIndicator="false" style={inputStyle} />
      </Box>
    </Grommet>
  );
}

export default DataInput;

DataInput.propTypes = {
  label: PropTypes.string.isRequired,
};
