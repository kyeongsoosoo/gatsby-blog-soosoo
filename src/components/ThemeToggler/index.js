import React from 'react';
import styled from 'styled-components';
import { FloatingBox } from '../../Element/FloatingBox';
import useTheme from '../../hooks/useTheme';
import { flexCenter } from '../../style/styleUtil';

export default function ThemeToggler() {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <ThemeTogglerWrapper onClick={handleThemeToggle}>
      {`${theme === 'light' ? 'Dark' : 'Light'}로 보기`}
    </ThemeTogglerWrapper>
  );
}

const ThemeTogglerWrapper = styled(FloatingBox)`
  ${flexCenter}
  width: var(--theme-toggler-width);
  height: var(--theme-toggler-height);
`;
