import React from 'react';
import styled from 'styled-components';
import P from '../../Element/P';
import Title from '../../Element/Title';
import { typo1, typo2 } from '../../style/typo';
import Image from 'gatsby-image';
import GithubIcon from './GithubIcon';
import useSiteInfo from '../../hooks/useSiteInfo';
import { Link } from 'gatsby';

function IntroBubble() {
  const { profileImageURL, nickname, githubURL } = useSiteInfo();
  return (
    <IntroBubbleWrapper>
      <IntroBubbleImage fixed={profileImageURL} />
      <Link to="/about">
        <IntroBubbleName>
          <Title>{nickname}</Title>
        </IntroBubbleName>
      </Link>
      <IntroBubbleDesc>
        <P>테스트 중!</P>
      </IntroBubbleDesc>
      <a href={githubURL}>
        <GithubIcon />
      </a>
    </IntroBubbleWrapper>
  );
}

const IntroBubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: var(-bb-width);
  height: var(--bb-height);
  margin: 60px auto;
  padding: 20px 0;
  background-color: var(--bb-background-color);
  border-radius: var(--bb-border-radius);
`;

const IntroBubbleImage = styled(Image)`
  --bb-image-width: 120px;
  --bb-image-height: 120px;
  --bb-image-radius: 60px;

  width: var(--bb-image-width);
  height: var(--bb-image-height);
  border-radius: var(--bb-image-radius);
`;

const IntroBubbleName = styled.h1`
  ${typo1}
`;
const IntroBubbleDesc = styled.h2`
  ${typo2}
`;

export default React.memo(IntroBubble);
