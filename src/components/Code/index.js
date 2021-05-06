import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { default as darkTheme } from 'prism-react-renderer/themes/vsDark';
import { default as lightTheme } from 'prism-react-renderer/themes/nightOwlLight';
import ThemeService from '../../utils/ThemeService';

export const Code = ({ codeString, language, ...props }) => {
  const myTheme = ThemeService.checkTheme();
  const codeTheme = myTheme === 'light' ? darkTheme : lightTheme;

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
