import React, { useState } from 'react';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { Helmet } from 'react-helmet';
import MenuOverlay from './components/navigation/MenuOverlay';
import NavBar from './components/navigation/NavBar';
import Introduction from './components/text/Introduction';
import SectionPlacard from './components/calculator/SectionPlacard';
import theme from './theme';

function App() {
  const [showMenu, setShowMenu] = useState();
  return (
    <Grommet theme={theme} full>
      <Helmet>
        <meta charSet="utf-8" />
        <title>United Welcome Rubric</title>
        <link rel="stylesheet" href="https://use.typekit.net/ybl1uye.css" />
      </Helmet>
      <ResponsiveContext.Consumer>
        {() => (
          <Box background="#ffffff" fill>
            <NavBar menu={showMenu} setMenuState={setShowMenu} />
            <Box
              direction="column"
              justify="start"
              flex
              overflow={{ horizontal: 'hidden' }}
              pad={{ top: '22px' }}
            >
              <MenuOverlay menu={showMenu} setMenuState={setShowMenu} />
              <Box flex align="center" justify="start">
                <Introduction />
                <Box
                  fill
                  height={{ min: '600px' }}
                  direction="row"
                  border={{ color: 'frappe', size: '1px', style: 'solid', side: 'horizontal' }}
                  pad={{ bottom: '5em' }}
                  background="cream"
                  justify="center"
                >
                  <Box
                    justify="start"
                    width={{ max: '956px' }}
                    direction="row"
                    pad="0px"
                    margin="0px"
                  >
                    <SectionPlacard>NPS CALCULATOR</SectionPlacard>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
