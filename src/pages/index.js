import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Title>Hi</Title>
    </Layout>
  );
}

const Title = styled.div`
  color: var(--test-title);
  border-bottom: var(--test-border);
`;
