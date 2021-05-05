import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { FloatingBox } from '../../Element/FloatingBox';
import { flexCenter } from '../../style/styleUtil';

export default function TagItem({ children, slug }) {
  const t = event => {
    event.preventDefault();
    window.location.href = `${window.location.origin}/${slug}`;
  };
  return <TagWrapper onClick={t}>{children}</TagWrapper>;
}

const TagWrapper = styled(FloatingBox)`
  --tag-padding: auto;
  --tag-min-width: 80px;
  --tag-max-width: 180px;
  --tag-height: 40px;
  --tag-radius: 5px;
  --tag-margin-left: 15px;
  --tag-margin-bottom: 10px;

  flex-shrink: 0;

  ${flexCenter}
  min-width: var(--tag-min-width);
  max-width: var(--tag-max-width);
  height: var(--tag-height);
  padding: var(--tag-padding);
  border-radius: var(--tag-radius);
  background-color: var(--tag-background-color);
  margin-bottom: var(--tag-margin-bottom);
  & + & {
    margin-left: var(--tag-margin-left);
  }
`;
