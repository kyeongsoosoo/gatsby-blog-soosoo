import React from 'react';
import styled from 'styled-components';

export default function CategoryBlock({ children }) {
  return (
    <CategoryBlockWrapper>
      <CategoryTitle>Tags</CategoryTitle>
      <CategoryTagWrapper>{children}</CategoryTagWrapper>
    </CategoryBlockWrapper>
  );
}

const CategoryBlockWrapper = styled.div`
  padding: var(--category-padding);
  width: var(--category-block-width);
  height: var(--category-block-height);
  min-height: var(--category-block-min-height);
  border-radius: var(--category-border-radius);
  
`;

const CategoryTitle = styled.h1`
  --title-margin-bottom: 30px;

  font-weight: var(--typo1-weight);
  font-size: var(--typo1-size);
  margin-bottom: var(--title-margin-bottom);
`;

const CategoryTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// display: flex;
// flex-wrap: wrap;
// align-items: flex-start;
// justify-content: space-around;
