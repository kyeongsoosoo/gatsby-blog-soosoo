import React from 'react';
import styled from 'styled-components';
import { FloatingBox } from '../../Element/FloatingBox';
import P from '../../Element/P';
import useTheme from '../../hooks/useTheme';
import { flexCenter } from '../../style/styleUtil';

export default function ThemeToggler() {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <ThemeTogglerWrapper onClick={handleThemeToggle}>
      <P>{`${theme === 'light' ? 'Dark' : 'Light'}로 보기`}</P>
    </ThemeTogglerWrapper>
  );
}

const ThemeTogglerWrapper = styled(FloatingBox)`
  --toggler-border-radius: 10px;

  ${flexCenter}
  width: var(--theme-toggler-width);
  height: var(--theme-toggler-height);
  border-radius: var(--toggler-border-radius);
  background-color: var(--toggler-background-color);
`;
