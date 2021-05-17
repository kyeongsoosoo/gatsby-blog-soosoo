import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Title from '../../Element/Title';
import { flexCenter } from '../../style/styleUtil';
import ThemeToggler from '../ThemeToggler';

export default function Header({ children }) {
  return (
    <HeaderWrapper>
      <HeaderLeftBox>
        <Link to="/">
          <Title isColor={true}>Soo Blog</Title>
        </Link>
      </HeaderLeftBox>
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
  margin-bottom: var(--header-margin-bottom);

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 50;
`;

const HeaderLeftBox = styled.div`
  --left-box-width: 300px;
  --left-box-height: 200px;

  ${flexCenter}
  width: var(--left-box-width);
  height: var(--left-box-height);
`;

const HeaderRightBox = styled.div``;
