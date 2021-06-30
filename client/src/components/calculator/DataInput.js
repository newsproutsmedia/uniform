import React from 'react';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
  TextInput,
  Text,
} from 'grommet';
import theme from '../../theme';

function DataInput({ label, atom }) {
  const [response, setResponse] = useRecoilState(atom);

  const handleUpdate = (e) => {
    const newVal = parseInt(e.target.value, 10);
    setResponse({ ...response, value: newVal });
  };

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
        <TextInput textAlign="center" style={inputStyle} onChange={handleUpdate} />
      </Box>
    </Grommet>
  );
}

export default DataInput;

DataInput.propTypes = {
  label: PropTypes.string.isRequired,
  atom: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
