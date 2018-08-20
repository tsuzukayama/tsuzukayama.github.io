import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './About/About';
import { Contact } from './Contact/Contact';
import Header from './Header/Header';
import { Container } from './Shared/Container';
import { theme } from './Theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <About />
          <Contact />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
