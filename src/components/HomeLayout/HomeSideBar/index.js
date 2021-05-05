import React from 'react';
import styled from 'styled-components';
import CategoryBlock from '../../CategoryBlock';
import IntroBubble from '../../IntroBubble';
import TagItem from '../../TagItem/TagItem';

export default function HomeSideBar({ totalTagList }) {
  return (
    <HomeSidebarWrapper>
      <IntroBubble />
      <CategoryBlock>
        {totalTagList.map(item => (
          <TagItem
            key={item.tagName}
          >{`#${item.tagName}(${item.count})`}</TagItem>
        ))}
      </CategoryBlock>
    </HomeSidebarWrapper>
  );
}

const HomeSidebarWrapper = styled.div`
  --home-sidebar-width: 200px;
  --home-sidebar-height: 80vh;

  width: var(--home-sidebar-width);
  height: var(--home-sidebar-height);
`;
