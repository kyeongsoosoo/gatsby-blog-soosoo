import React from 'react';
import styled from 'styled-components';
import { titleCss, typo2 } from '../../../../style/typo';
import { flexCenter } from '../../../../style/styleUtil';

export default function PostItem({ title, excerpt = '', tagList }) {
  return (
    <PostItemWrapper>
      <PostItemTitle>{title}</PostItemTitle>
      <PostItemDesc>{excerpt}</PostItemDesc>
      <PostItemTagBox>
        {tagList.map(tag => (
          <PostItemTag key={tag}>{`#${tag}`}</PostItemTag>
        ))}
      </PostItemTagBox>
    </PostItemWrapper>
  );
}

const PostItemWrapper = styled.li`
  --item-width: 80%;
  --item-max-width: 700px;
  --item-height: 200px;
  --item-radius: 30px;
  --item-padding: 30px 30px;
  --item-margin-bottom: 40px;

  width: var(--item-width);
  max-width: var(--item-max-width);
  height: var(--item-height);
  background-color: var(--item-background-color);
  border-radius: var(--item-radius);
  padding: var(--item-padding);
  margin-bottom: var(--item-margin-bottom);

  box-sizing: content-box;
`;

const PostItemTitle = styled.h1`
  --title-margin-bottom: 20px;

  ${titleCss}
  color: black;
  margin-bottom: var(--title-margin-bottom);
`;

const PostItemDesc = styled.h2`
  --desc-margin-bottom: 15px;

  margin-bottom: var(--desc-margin-bottom);

  ${typo2}
  color: gray;
`;

const PostItemTagBox = styled.div`
  --tag-box-width: 100%;
  --tag-box-height: 30px;
  --tag-bx-padding: 5px 10px;

  display: flex;

  width: var(--tag-box-width);
  height: var(--tag-box-height);
  padding: var(--tag-box-padding);
`;

const PostItemTag = styled.div`
  --tag-padding: auto;
  --tag-width: 80px;
  --tag-height: 40px;
  --tag-radius: 5px;
  --tag-margin-left: 15px;

  ${flexCenter}
  width: var(--tag-width);
  height: var(--tag-height);
  padding: var(--tag-padding);
  border-radius: var(--tag-radius);
  background-color: var(--tag-background-color);
  & + & {
    margin-left: var(--tag-margin-left);
  }
`;
