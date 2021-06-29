import React from 'react';
import theme from '../../theme';

function Footer() {
  const footerStyle = {
    width: '100%',
    height: '20px',
    fontSize: '14px',
    color: theme.white,
    backgroundColor: theme.purple,
  };
  return (
    <div style={footerStyle}>@copy;2021 NPS Calculator, LLC - All Rights Reserved</div>
  );
}

export default Footer;
