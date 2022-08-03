import Home from './pages/Home';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './contexts/AppContext';
import { Toaster } from 'react-hot-toast';
import theme from './styles/themes/theme';

function App() {
  return (
    <AppContext>
      <Toaster />
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>  
    </AppContext>  
  );
}

export default App;
