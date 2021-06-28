import React, { useState } from 'react';
import {
  Box,
  Button,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import NavBar from './components/navigation/NavBar';
import theme from './theme';

function App() {
  const [showMenu, setShowMenu] = useState();
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {() => (
          <Box background="white" fill>
            <NavBar menu={showMenu} setMenuState={setShowMenu} />
            <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              {showMenu && (
                <Layer full>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowMenu(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    menu
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
