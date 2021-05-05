import styled from 'styled-components';

export const FloatingBox = styled.div`
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: var(--floating-webkit-box-shadow);
    -moz-box-shadow: var(--floating-moz-box-shadow);
    box-shadow: var(--floating-box-shadow);
  }
`;
