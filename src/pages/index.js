import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import IntroBubble from '../components/IntroBubble';

export default function Home() {
  return <HomeLayout></HomeLayout>;
}

const Title = styled.div`
  color: var(--title-color);
  border-bottom: var(--test-border);
`;
