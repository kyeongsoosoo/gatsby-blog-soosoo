import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import useTheme from '../hooks/useTheme';

export default function Home() {
  useTheme();

  return <Layout></Layout>;
}

const Title = styled.div`
  color: var(--title-color);
  border-bottom: var(--test-border);
`;
