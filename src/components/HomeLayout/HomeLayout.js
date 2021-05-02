import React from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import HomeMain from './HomeMain';
import HomeSideBar from './HomeSideBar';

export default function HomeLayout({ children }) {
  return (
    <Layout>
      <HomeWrapper>
        <HomeMain>{children}</HomeMain>
        <HomeSideBar></HomeSideBar>
      </HomeWrapper>
    </Layout>
  );
}

const HomeWrapper = styled.div`
  --home-width: 90vw;
  --home-min-width: 400px;
  --home-max-width: 1000px;
  --home-min-height: 90vh;
  --home-margin: 30px auto;

  display: flex;

  width: var(--home-width);
  min-width: var(--home-min-width);
  max-width: var(--home-max-width);

  min-height: var(--home-min-height);

  margin: var(--home-margin);
`;
