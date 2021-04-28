import React from 'react';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggler() {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <ThemeTogglerWrapper onClick={handleThemeToggle}>
      {`${theme}로 보기`}
    </ThemeTogglerWrapper>
  );
}

const ThemeTogglerWrapper = styled.button`
  width: var(--theme-toggler-width);
  height: var(--theme-toggler-height);
`;
