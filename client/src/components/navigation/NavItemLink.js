import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';

function NavItemLink({ to, children }) {
  const linkStyle = {
    color: theme.grey,
  };
  return (
    <a href={to} style={linkStyle}>{children}</a>
  );
}

export default NavItemLink;

NavItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
