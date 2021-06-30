import React from 'react';
import styled, { css } from 'styled-components';

export default function Title({ size = 'large', isColor = false, children }) {
  return (
    <T size={size} isColor={isColor}>
      {children}
    </T>
  );
}

const T = styled.h1`
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          font-size: var(--title-size);
          font-weight: var(--title-weight);
        `;

      default:
        break;
    }
  }}
  color: ${({ isColor }) =>
    isColor ? `var(--title-color)` : `var(--post-title-color)`}
`;
