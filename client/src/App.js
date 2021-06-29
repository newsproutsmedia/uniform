import React, { useState } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import MenuOverlay from './components/navigation/MenuOverlay';
import NavBar from './components/navigation/NavBar';
import Introduction from './components/text/Introduction';
import theme from './theme';

function App() {
  const [showMenu, setShowMenu] = useState();
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box background="white" fill>
            <NavBar menu={showMenu} setMenuState={setShowMenu} />
            <Box
              direction="column"
              justify="start"
              flex
              overflow={{ horizontal: 'hidden' }}
              pad={{ top: '30px' }}
            >
              <MenuOverlay menu={showMenu} setMenuState={setShowMenu} />
              <Box flex align="center" justify="start">
                <Introduction />
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
