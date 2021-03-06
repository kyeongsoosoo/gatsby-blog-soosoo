import React from 'react';
import styled from 'styled-components';
import Title from '../../../Element/Title';
import { titleCss } from '../../../style/typo';
import NamingService from '../../../utils/NamingService';

export default function HomeMain({ children, category }) {
  return (
    <HomeMainWrapper>
      <HomeMainTitle>
        <Title isColor={true}>
          {category ? NamingService.makeTitle(category) : 'Home'}
        </Title>
      </HomeMainTitle>
      {children}
    </HomeMainWrapper>
  );
}

const HomeMainWrapper = styled.div`
  --home-main-width: 100%;
  --home-main-min-width: 400px;
  --home-main-min-height: 80vh;

  min-width: var(--home-main-min-width);
  min-height: var(--home-main-min-height);

  flex-grow: 1;
`;

const HomeMainTitle = styled.div`
  --home-main-title-margin-top: 50px;
  --home-main-title-size: 48px;

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
