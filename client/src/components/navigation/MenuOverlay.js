import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Grommet,
  Layer,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import theme from '../../theme';

function MenuOverlay({ menu, setMenuState }) {
  return (
    <Grommet theme={theme}>
      <>
        {menu && (
          <Layer full>
            <Box
              background="light-2"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() => setMenuState(false)}
              />
            </Box>
            <Box
              fill
              background="light-2"
              align="center"
              justify="center"
            >
              menu
            </Box>
          </Layer>
        )}
      </>
    </Grommet>
  );
}

export default MenuOverlay;

MenuOverlay.propTypes = {
  menu: PropTypes.string.isRequired,
  setMenuState: PropTypes.func.isRequired,
};
