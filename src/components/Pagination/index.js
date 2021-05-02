import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function Pagination({ isFirst, isLast, prevPage, nextPage }) {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Prev Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  );
}

export const PaginationWrapper = styled.div`
  a:nth-child(1) {
    color: ${props => (props.isFirst ? dark3 : dark1)};
    pointer-events: ${props => (props.isFirst ? 'none' : 'auto')};
    cursor: ${props => (props.isFirst ? 'default' : 'pointer')};
  }
  a:nth-child(2) {
    color: ${props => (props.isLast ? dark3 : dark1)};
    pointer-events: ${props => (props.isLast ? 'none' : 'auto')};
    cursor: ${props => (props.isLast ? 'default' : 'pointer')};
  }
`;

export const PaginationElement = styled(Link)`
  font-size: 1rem;
  line-height: 1rem;
`;
