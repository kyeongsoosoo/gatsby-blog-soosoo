import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { flexCenter } from '../style/styleUtil';

export default function NotFound() {
  return (
    <Layout>
      <NotFoundWrapper>
        <NotFoundText>Not Found</NotFoundText>
      </NotFoundWrapper>
    </Layout>
  );
}

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 90vh;
  ${flexCenter}

  background-image: var(--main-gradient-background-image);
`;

const NotFoundText = styled.h1`
  --text-font-size: 72px;
  --text-font-weight: 700;

  font-size: var(--text-font-size);
  font-weight: var(--text-font-weight);
`;
