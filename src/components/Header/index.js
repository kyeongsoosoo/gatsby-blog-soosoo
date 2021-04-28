import React from 'react';
import styled from 'styled-components';
import { titleCss } from '../../style/styleUtil';
import ThemeToggler from '../ThemeToggler';
import useTheme from '../../hooks/useTheme';

export default function Header({ children }) {
  const { theme, themeHandler } = useTheme();

  return (
    <HeaderWrapper>
      <HeaderLeftBox>So Blog</HeaderLeftBox>
      <HeaderRightBox>
        <ThemeToggler />
      </HeaderRightBox>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--header-width);
  height: var(--header-height);
  padding: var(--header-padding);
  border-bottom: var(--header-border-bottom);
`;

const HeaderLeftBox = styled.div`
  ${titleCss}
`;

const HeaderRightBox = styled.div``;
