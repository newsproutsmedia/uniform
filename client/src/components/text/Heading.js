import React from 'react';
import PropTypes from 'prop-types';

function Heading({ text, level }) {
  const Tag = level;
  return (
    <Tag>{text}</Tag>
  );
}

export default Heading;

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
