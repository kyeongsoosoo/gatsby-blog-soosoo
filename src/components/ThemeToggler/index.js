import React from 'react';
import styled, { css } from 'styled-components';
import { FloatingBox } from '../../Element/FloatingBox';
import P from '../../Element/P';
import useTheme from '../../hooks/useTheme';
import { flexCenter } from '../../style/styleUtil';

export default function ThemeToggler() {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <ThemeTogglerWrapper onClick={handleThemeToggle}>
      {/* <P type="theme-toggle">{`${
        theme === 'light' ? 'Dark' : 'Light'
      }로 보기`}</P> */}
      <ThemeTogglerNotch theme={theme}/>
      <ThemeToggleShape1 theme={theme}/>
      <ThemeToggleShape2 theme={theme}/>
      <ThemeToggleShape3 theme={theme}/>
    </ThemeTogglerWrapper>
  );
}

const ThemeTogglerWrapper = styled(FloatingBox)`
  --toggler-border-radius: 50px;

  ${flexCenter}
  width: var(--theme-toggler-width);
  height: var(--theme-toggler-height);
  border-radius: var(--toggler-border-radius);
  background-image: var(--toggler-background-color);
  cursor: pointer;
  position:relative;
`;

const ThemeTogglerNotch = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 7px;
  left: 7px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: all 0.3s ease;
  ${({theme}) => theme === 'dark' && css`
    background: whitesmoke;
    box-shadow: 0 0 5px whitesmoke;
    transform: translate(60px, 0);
  `}
`;

const ThemeToggleShape = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const ThemeToggleShape1 = styled(ThemeToggleShape)`
  height: 5px;
  width: 20px;
  top: 50%;
  left: 60%;
  ${({theme}) => theme === 'dark' && css`
    height: 3px;
    width: 3px;
    transform: translate(-20px, 0);
`}
`;
const ThemeToggleShape2 = styled(ThemeToggleShape)`
  height: 5px;
  width: 35px;
  top: 25%;
  left: 25%;
  z-index: 2;
  ${({theme}) => theme === 'dark' && css`
    height: 7px;
    width: 7px;
    transform: translate(10px, 0);
`}
`;
const ThemeToggleShape3 = styled(ThemeToggleShape)`
  height: 10px;
  width: 40px;
  bottom: 10px;
  left: 25%;
  ${({theme}) => theme === 'dark' && css`
    height: 7px;
    width: 7px;
    transform: translate(-3px, 0);
`}
`;



// .toggle {
//   height: 100px;
//   width: 200px;
//   border-radius: 50px;
//   margin: auto;
//   background-image: linear-gradient(aqua, skyblue);
//   position: relative;
//   cursor: pointer;
// }

// .toggle.night {
//   background-image: linear-gradient(midnightblue, rebeccapurple);
// }

// .notch {
//   height: 90px;
//   width: 90px;
//   border-radius: 50%;
//   background: yellow;
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   box-shadow: 0 0 5px yellow;
//   z-index: 1;
//   transition: all 0.3s ease;
// }

// .notch > .crater {
//   background: burlywood;
//   border-radius: 50%;
//   position: absolute;
//   opacity: 0;
//   box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
// }
// .night .crater {
//   opacity: 0.4;
// }

// .crater:first-child {
//   left: 5px;
//   top: 15px;
//   height: 15px;
//   width: 40px;
//   transform: rotate(-45deg);
// }

// .crater:last-child {
//   right: 10px;
//   top: 15px;
//   height: 15px;
//   width: 25px;
//   transform: rotate(45deg);
// }

// .night > .notch {
//   background: whitesmoke;
//   box-shadow: 0 0 5px whitesmoke;
//   transform: translate(100px, 0);
// }

// .shape {
//   position: absolute;
//   background: whitesmoke;
//   border-radius: 50%;
//   transition: all 0.3s ease;
// }

// .shape.sm {
//   height: 5px;
//   width: 50px;
//   top: 50%;
//   left: 60%;
// }

// .shape.md {
//   height: 10px;
//   width: 75px;
//   top: 25%;
//   left: 25%;
//   z-index: 2;
// }

// .shape.lg {
//   height: 15px;
//   width: 100px;
//   bottom: 20px;
//   left: 25%;
// }

// .night .shape {
//   background: lightgray;
//   box-shadow: 0 0 10px 2px violet;
// }

// .night .shape.sm {
//   height: 5px;
//   width: 5px;
//   transform: translate(-40px, 0);
// }

// .night .shape.sm:first-of-type {
//   transform: translate(-80px, -10px);
// }

// .night .shape.md {
//   height: 10px;
//   width: 10px;
//   transform: translate(10px, 0);
// }

// .night .shape.lg {
//   height: 15px;
//   width: 15px;
//   transform: translate(-10px, 0);
// }