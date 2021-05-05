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

  font-size: ${({ type }) => {
    switch (type) {
      case 'normal':
        return 'var(--p-normal-size)';
        break;

      default:
        break;
    }
  }}
`;
