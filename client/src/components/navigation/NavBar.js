import React from 'react';
import theme from '../../theme';

function NavBar() {
  const navStyle = {
    height: '80px',
    width: '100%',
    backgroundColor: theme.grey,
    color: '#ffffff',
  };

  return (
    <div id="nav" data-testid="nav" style={navStyle}>
      <h1>NAVBAR</h1>
    </div>
  );
}

export default NavBar;
