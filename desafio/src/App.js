import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home/index';
import { CartProvider } from './context';

function App() {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
