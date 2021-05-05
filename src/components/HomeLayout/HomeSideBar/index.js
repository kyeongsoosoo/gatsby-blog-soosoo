import React from 'react';
import styled from 'styled-components';
import NamingService from '../../../utils/NamingService';
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
            slug={NamingService.makeCategorySlug(item.tagName)}
            key={item.tagName}
          >
            {NamingService.makeHashTag(item.tagName, item.count)}
          </TagItem>
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
