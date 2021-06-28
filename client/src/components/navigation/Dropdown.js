import React from 'react';
import PropTypes from 'prop-types';
import MenuItemList from './MenuItemList';

function Dropdown({ menuItems }) {
  return (
    <>
      <ul><MenuItemList items={menuItems} /></ul>
    </>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
