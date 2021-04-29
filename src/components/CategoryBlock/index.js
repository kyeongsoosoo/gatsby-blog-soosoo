import React from 'react';
import styled from 'styled-components';

export default function CategoryBlock() {
  return <CategoryBlockWrapper>Hi</CategoryBlockWrapper>;
}

const CategoryBlockWrapper = styled.div`
  width: var(--category-block-width);
  min-height: var(--category-block-min-height);
  border-radius: var(--category-border-radius);
  background-color: var(--category-background-color);
`;
