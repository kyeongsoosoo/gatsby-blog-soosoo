import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { flexCenter } from '../../style/styleUtil';
import P from '../../Element/P';

export default function Pagination({ isFirst, isLast, prevPage, nextPage }) {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>
        <P>Prev Page</P>
      </PaginationElement>
      <PaginationElement to={nextPage}>
        <P>Next Page</P>
      </PaginationElement>
    </PaginationWrapper>
  );
}

export const PaginationWrapper = styled.div`
  --pagination-wrapper-width: 100%;
  --pagination-wrapper-height: 150px;
  --pagination-wrapper-padding-right: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-right: var(--pagination-wrapper-padding-right);

  width: var(--pagination-wrapper-width);
  height: var(--pagination-wrapper-height);

  a:nth-child(1) {
    background-color: ${props =>
      props.isFirst
        ? `var(--pagination-background-color-disabled)`
        : `var(--pagination-background-color)`};
    pointer-events: ${props => (props.isFirst ? 'none' : 'auto')};
    cursor: ${props => (props.isFirst ? 'default' : 'pointer')};
  }
  a:nth-child(2) {
    background-color: ${props =>
      props.isLast
        ? `var(--pagination-background-color-disabled)`
        : `var(--pagination-background-color)`};
    pointer-events: ${props => (props.isLast ? 'none' : 'auto')};
    cursor: ${props => (props.isLast ? 'default' : 'pointer')};
  }
`;

export const PaginationElement = styled(Link)`
  --pagination-width: 150px;
  --pagination-height: 50px;
  --pagination-border-radius: 15px;

  width: var(--pagination-width);
  height: var(--pagination-height);
  border-radius: var(--pagination-border-radius);
  ${flexCenter}
  font-size: 1rem;
  line-height: 1rem;
`;
