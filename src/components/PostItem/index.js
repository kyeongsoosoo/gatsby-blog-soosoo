import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import Title from '../../Element/Title';
import P from '../../Element/P';
import NamingService from '../../utils/NamingService';
import { FloatingBox } from '../../Element/FloatingBox';
import { titleCss, typo2 } from '../../style/typo';

import TagItem from '../TagItem/TagItem';
export default function PostItem({ title, excerpt = '', tagList, slug }) {
  return (
    <PostItemLinkWrapper to={`/${slug}`}>
      <PostItemWrapper>
        <PostItemTitle>
          <Title>{title}</Title>
        </PostItemTitle>
        <PostItemDesc>
          <P isGray={true}>{excerpt}</P>
        </PostItemDesc>
        <PostItemTagBox>
          {tagList.map(tag => (
            <TagItem key={tag} slug={NamingService.makeCategorySlug(tag)}>
              {NamingService.makeHashTag(tag)}
            </TagItem>
          ))}
        </PostItemTagBox>
      </PostItemWrapper>
    </PostItemLinkWrapper>
  );
}

const PostItemLinkWrapper = styled(Link)`
  width: 100%;
`;

const PostItemWrapper = styled(FloatingBox)`
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
