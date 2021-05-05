import React from 'react';
import styled from 'styled-components';
import P from '../../Element/P';
import Title from '../../Element/Title';
import { typo1, typo2 } from '../../style/typo';

export default function IntroBubble() {
  return (
    <IntroBubbleWrapper>
      <IntroBubbleImage />
      <IntroBubbleName>
        <Title>Soo Soo</Title>
      </IntroBubbleName>
      <IntroBubbleDesc>
        <P>테스트 중!</P>
      </IntroBubbleDesc>
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

const IntroBubbleImage = styled.img`
  --bb-image-width: 120px;
  --bb-image-height: 120px;
  --bb-image-radius: 60px;

  width: var(--bb-image-width);
  height: var(--bb-image-height);
  border-radius: var(--bb-image-radius);
  background-color: pink;
`;

const IntroBubbleName = styled.h1`
  ${typo1}
`;
const IntroBubbleDesc = styled.h2`
  ${typo2}
`;
