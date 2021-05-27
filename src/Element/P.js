import React from 'react';
import styled, { css } from 'styled-components';

export default function P({ children, isGray = false, type = 'normal' }) {
  return (
    <StyledP isGray={isGray} type={type}>
      {children}
    </StyledP>
  );
}

const StyledP = styled.p`
  --p-normal-size: 16px;

  color: var(--p-color);
  ${({ isGray }) =>
    isGray &&
    css`
      color: gray;
    `}

  ${({ type }) => {
    switch (type) {
      case 'normal':
        return css`
          font-size: var(--p-normal-size);
        `;

      case 'tag':
        return css`
          font-size: var(--tag-size);
          font-weight: var(--tag-weight);
          color: var(--tag-color);
        `;
      case 'theme-toggle':
        return css`
          font-weight: var(--typo1-weight);
        `;

      default:
        break;
    }
  }}
`;
