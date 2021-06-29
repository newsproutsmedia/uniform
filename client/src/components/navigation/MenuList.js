import React from 'react';
import PropTypes from 'prop-types';
import {
  defaultProps,
  Anchor,
  Box,
  Grommet,
  Menu,
} from 'grommet';
import { FormDown } from 'grommet-icons';
import navlinks from '../../config/navigation.links';
import theme from '../../theme';

function MenuList({ items }) {
  const anchorStyle = {
    paddingTop: '12px',
    paddingRight: '30px',
  };

  const menuStyle = {
    paddingRight: '10px',
  };

  const getMenuItems = (label) => {
    const result = navlinks.find((link) => link.label === label);
    return result.items
      ? (
        <Menu
          label={result.label}
          href={result.url}
          items={result.items}
          dropProps={{
            align: {
              top: 'bottom',
              left: 'left',
            },
            elevation: 'medium',
          }}
          icon={<FormDown color={defaultProps.theme.global.colors.grey} />}
          margin={{
            top: '0',
            right: '0',
          }}
          style={menuStyle}
        />
      )
      : (
        <Anchor
          key={result.label}
          label={result.label}
          href={result.url}
          color={defaultProps.theme.global.colors.grey}
          weight="normal"
          style={anchorStyle}
        />
      );
  };

  const menuItems = items.map((item) => getMenuItems(item));

  return (
    <Grommet theme={theme}>
      <Box direction="row" gap="0px">
        {menuItems}
      </Box>
    </Grommet>
  );
}

export default MenuList;

MenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
