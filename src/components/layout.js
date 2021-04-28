import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>Hi</Header>
      {children}
    </React.Fragment>
  );
}
