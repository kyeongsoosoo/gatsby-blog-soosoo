import React from 'react';
import GlobalStyle from '../style/GlobalStyle';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}
