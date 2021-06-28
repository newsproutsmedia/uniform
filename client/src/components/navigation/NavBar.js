import React from 'react';
import PropTypes from 'prop-types';
import {
  Anchor,
  Box,
  Button,
  Grommet,
  Header,
  ResponsiveContext,
} from 'grommet';

import { Menu as MenuIcon } from 'grommet-icons';
import theme from '../../theme';

function NavBar({ menu, setMenuState }) {
  return (
    <Grommet theme={theme}>
      <Header background="white" pad="medium" height="xsmall" align="center">
        <ResponsiveContext.Consumer>
          {(size) => (size === 'small' ? (
            <>
              <Anchor
                href="https://tools.grommet.io/"
                label="NPS Calculator"
              />
              <Box justify="end">
                <Button
                  a11yTitle="Navigation Menu"
                  icon={<MenuIcon color="grey" />}
                  onClick={() => setMenuState(!menu)}
                />
              </Box>
            </>
          ) : (
            <>
              <Box justify="start" direction="row" gap="medium">
                <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
                <Anchor
                  href="https://github.com/grommet/grommet/issues"
                  label="Feedback"
                />
              </Box>
              <Box justify="end" direction="row" gap="medium">
                <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
                <Anchor
                  href="https://github.com/grommet/grommet/issues"
                  label="Feedback"
                />
              </Box>
            </>
          ))}
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );
}

export default NavBar;

NavBar.propTypes = {
  menu: PropTypes.bool.isRequired,
  setMenuState: PropTypes.func.isRequired,
};
