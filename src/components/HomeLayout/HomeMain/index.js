import React from 'react';
import styled from 'styled-components';
import { titleCss } from '../../../style/typo';
import PostItem from './PostItem';

export default function HomeMain() {
  return (
    <HomeMainWrapper>
      <HomeMainTitle>Home</HomeMainTitle>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </HomeMainWrapper>
  );
}

const HomeMainWrapper = styled.div`
  --home-main-width: 100%;
  --home-main-min-width: 200px;
  --home-main-min-height: 80vh;

  min-width: var(--home-main-min-width);
  min-height: var(--home-main-min-height);

  flex-grow: 1;
`;

const HomeMainTitle = styled.div`
  --home-main-title-margin-top: 50px;
  --home-main-title-size: 48px;
  --home-main-border-bottom: 2px solid black;
  --home-main-letter-spacing: 1.5px;
  --home-main-margin-bottom: 40px;

  margin-top: var(--home-main-title-margin-top);
  ${titleCss}
  border-bottom: var(--home-main-border-bottom);
  letter-spacing: var(--home-main-letter-spacing);
  margin-bottom: var(--home-main-margin-bottom);
  width: 50vw;
  line-height: 1.5em;
`;
