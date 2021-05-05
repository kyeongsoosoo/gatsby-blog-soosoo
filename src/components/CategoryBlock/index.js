import React from 'react';
import styled from 'styled-components';

export default function CategoryBlock({ children }) {
  return (
    <CategoryBlockWrapper>
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
  background-color: var(--category-background-color);
`;

const CategoryTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;
