import React from 'react';
import styled from 'styled-components';
import { FloatingBox } from '../../Element/FloatingBox';
import P from '../../Element/P';
import { flexCenter } from '../../style/styleUtil';

export default function TagItem({ children, slug, isSelected = false }) {
  const handleTagLink = event => {
    event.preventDefault();
    window.location.href = `${window.location.origin}/${slug}`;
  };
  return (
    <TagWrapper onClick={handleTagLink} isSelected={isSelected}>
      <P type="tag">{children}</P>
    </TagWrapper>
  );
}

const TagWrapper = styled(FloatingBox)`
  --tag-padding: 3px 3px;
  --tag-min-width: 80px;
  --tag-max-width: 180px;
  --tag-height: 40px;
  --tag-radius: 5px;
  --tag-margin-left: 15px;
  --tag-margin-bottom: 10px;

  flex-shrink: 0;

  ${flexCenter}

  background-color: ${({ isSelected }) =>
    isSelected
      ? `var(--tag-background-color-selected);`
      : 'var(--tag-background-color);'};

  min-width: var(--tag-min-width);
  max-width: var(--tag-max-width);
  height: var(--tag-height);
  padding: var(--tag-padding);
  border-radius: var(--tag-radius);

  margin-bottom: var(--tag-margin-bottom);
  & + & {
    margin-left: var(--tag-margin-left);
  }
`;
