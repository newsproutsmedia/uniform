import React from 'react';
import PropTypes from 'prop-types';

function Icon({ icon, width, height }) {
  return (
    <img src={icon} alt="promoter" width={width} height={height} />
  );
}

export default Icon;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
