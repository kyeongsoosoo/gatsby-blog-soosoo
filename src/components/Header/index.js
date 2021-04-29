import React from 'react';
import styled from 'styled-components';
import { titleCss } from '../../style/typo';
import ThemeToggler from '../ThemeToggler';

export default function Header({ children }) {
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
`;

const HeaderLeftBox = styled.div`
  ${titleCss}
`;

const HeaderRightBox = styled.div``;
