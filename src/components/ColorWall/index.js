import React from 'react';
import styled from 'styled-components';

export default function ColorWall() {
  return <ColorWallWrapper />;
}

const ColorWallWrapper = styled.div`
  width: var(--header-width);
  height: var(--header-height);
  background-color: var(--main-gradient-background-color);
  background-image: var(--main-gradient-background-image);
`;
