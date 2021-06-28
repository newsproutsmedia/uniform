import React from 'react';
import PropTypes from 'prop-types';
import MenuItemList from './MenuItemList';

export default function Menu({ items }) {
  const menuStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '25%',
  };
  return (
    <div style={menuStyle}>
      <MenuItemList items={items} />
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
