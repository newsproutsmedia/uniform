import React, { useState } from 'react';
import {
  Box,
  Button,
  Grommet,
  Heading,
  ResponsiveContext,
} from 'grommet';
import { Google } from 'grommet-icons';
import { Helmet } from 'react-helmet';
import MenuOverlay from './components/navigation/MenuOverlay';
import NavBar from './components/navigation/NavBar';
import Introduction from './components/text/Introduction';
import theme from './theme';
import pageText from './config/page.text';
import SectionPlacard from './components/calculator/SectionPlacard';
import CalculatorGroupInstructions from './components/calculator/CalculatorGroupInstructions';
import CountPositive from './components/calculator/CountPositive';
import CountNeutral from './components/calculator/CountNeutral';
import CountNegative from './components/calculator/CountNegative';
import GroupPositive from './components/calculator/GroupPositive';
import GroupNeutral from './components/calculator/GroupNeutral';
import GroupNegative from './components/calculator/GroupNegative';
import TotalPositive from './components/calculator/TotalPositive';
import TotalNegative from './components/calculator/TotalNegative';
import Spacer from './components/calculator/Spacer';
import TotalNPS from './components/calculator/TotalNPS';

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
                <Introduction
                  heading={pageText.introduction.heading}
                  text={pageText.introduction.text}
                />
                <Box
                  fill
                  height={{ min: '900px' }}
                  direction="row"
                  justify="center"
                  border={{ color: 'frappe', size: '1px', style: 'solid', side: 'horizontal' }}
                  pad={{ bottom: '5em' }}
                  background="cream"
                >
                  <Box
                    width={{ max: '956px' }}
                    direction="column"
                    justify="top"
                    pad="0px"
                    margin="0px"
                  >
                    <Box
                      width="100%"
                      direction="row"
                      justify="center"
                    >
                      <SectionPlacard>NPS CALCULATOR</SectionPlacard>
                    </Box>
                    <Box
                      id="countResponses"
                      width="100%"
                      height="280px"
                      direction="row"
                      justify="center"
                      gap="10px"
                      pad={{
                        top: '4em',
                        bottom: '0px',
                      }}
                      border={{
                        color: theme.global.colors.dorian,
                        size: '1px',
                        style: 'solid',
                        side: 'bottom',
                      }}
                      style={{
                        position: 'relative',
                        top: '0px',
                      }}
                    >
                      <CalculatorGroupInstructions
                        heading={pageText.calculator.count.heading}
                        text={pageText.calculator.count.text}
                      />
                      <CountPositive />
                      <CountNeutral />
                      <CountNegative />
                    </Box>
                    <Box
                      id="groupResponses"
                      width="100%"
                      height="250px"
                      direction="row"
                      justify="center"
                      gap="10px"
                      pad={{
                        top: '2.2em',
                        bottom: '0px',
                      }}
                      border={{
                        color: theme.global.colors.dorian,
                        size: '1px',
                        style: 'solid',
                        side: 'bottom',
                      }}
                      style={{
                        position: 'relative',
                        top: '0px',
                      }}
                    >
                      <CalculatorGroupInstructions
                        heading={pageText.calculator.group.heading}
                        text={pageText.calculator.group.text}
                      />
                      <GroupPositive />
                      <GroupNeutral />
                      <GroupNegative />
                    </Box>
                    <Box
                      id="calculateTotals"
                      width="100%"
                      height="280px"
                      direction="row"
                      justify="center"
                      gap=".2em"
                      pad={{
                        top: '2.2em',
                        bottom: '0px',
                      }}
                      style={{
                        position: 'relative',
                        top: '0px',
                      }}
                    >
                      <CalculatorGroupInstructions
                        heading={pageText.calculator.calculate.heading}
                        text={pageText.calculator.calculate.text}
                      />
                      <Spacer />
                      <TotalPositive />
                      <TotalNegative />
                      <TotalNPS />
                      <Spacer />
                    </Box>
                  </Box>
                </Box>
                <Box
                  background="#ffffff"
                  width={{ max: '956px' }}
                  height={{ min: '300px' }}
                  pad={{
                    top: '2em',
                    bottom: '2em',
                  }}
                  margin={{
                    bottom: '2em',
                  }}
                  direction="column"
                  justify="top"
                >
                  <Heading level="2" textAlign="center" style={{ fontWeight: '400', fontSize: '30px' }}>Interested in improving your customer experience with NPS?</Heading>
                  <Box
                    direction="row"
                    justify="center"
                  >
                    <Button
                      icon={<Google />}
                      label="Sign up with Google"
                      gap="small"
                      pad={{ vertical: '10px', horizontal: '10px' }}
                      background="#ffffff"
                      style={{
                        border: '1px solid #bebeb8',
                      }}
                    />
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
