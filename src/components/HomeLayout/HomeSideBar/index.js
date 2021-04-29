import React from 'react';
import styled from 'styled-components';
import CategoryBlock from '../../CategoryBlock';
import IntroBubble from '../../IntroBubble';

export default function HomeSideBar() {
  return (
    <HomeSidebarWrapper>
      <IntroBubble />
      <CategoryBlock />
    </HomeSidebarWrapper>
  );
}

const HomeSidebarWrapper = styled.div`
  --home-sidebar-width: 200px;
  --home-sidebar-height: 80vh;

  width: var(--home-sidebar-width);
  height: var(--home-sidebar-height);
`;
