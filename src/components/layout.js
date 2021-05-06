import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import GlobalStyle from '../style/GlobalStyle';
import ColorWall from './ColorWall';
import { preToCodeBlock } from 'mdx-utils';
import './language-tabs.css';
import Header from './Header';
import { Code } from './Code';

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children} </>,
};

export default function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <GlobalStyle />
      <Header>Hi</Header>
      <ColorWall />
      {children}
    </MDXProvider>
  );
}
