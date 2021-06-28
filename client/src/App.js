import React from 'react';
import theme from './theme';
import NavBar from './components/navigation/NavBar';
import Introduction from './components/text/Introduction';
import DataSection from './components/data/DataSection';
import SignupSection from './components/signup/SignupSection';
import Footer from './components/navigation/Footer';

function App() {
  const appStyle = {
    backgroundColor: theme.white,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.grey,
  };

  return (
    <div id="app" data-testid="app" style={appStyle}>
      <NavBar />
      <Introduction />
      <DataSection />
      <SignupSection />
      <Footer />
    </div>
  );
}

export default App;
