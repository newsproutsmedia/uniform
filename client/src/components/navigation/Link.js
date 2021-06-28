import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';

function Link({ text, url }) {
  const linkStyle = {
    color: theme.blue,
    backgroundColor: 'none',
    border: 'none',
  };
  const handleClick = () => {
    windo
  };
  return (
    <>
      <button type="button" style={linkStyle} onClick={handleClick}>{text}</button>
    </>
  );
}

export default Link;

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
