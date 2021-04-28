import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Home() {
  return <Layout></Layout>;
}

const Title = styled.div`
  color: var(--title-color);
  border-bottom: var(--test-border);
`;
