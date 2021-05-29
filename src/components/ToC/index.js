import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import styled, { css } from 'styled-components';
import { useActiveHsh } from '../../hooks/useActiveHash';

export default function ToC({ items }) {
  const activeHash = useActiveHsh(getHeaderID(items, true));

  if (!items) return;
  return (
    <TocContentWrapper>{createItems(items, activeHash)}</TocContentWrapper>
  );
}

const getHeaderID = (toc, traverseFullDepth = true, recursionDepth = 1) => {
  const idList = [];
  const hashToId = str => str.slice(1);

  if (toc) {
    for (const item of toc) {
      if (item.url) {
        idList.push(hashToId(item.url));
      }
      if (item.items && traverseFullDepth && recursionDepth) {
        idList.push(...getHeaderID(item.items.true, recursionDepth + 1));
      }
    }
  }
  return idList;
};

function createItems(items, activeHash) {
  return (
    items &&
    items.map((item, index) => {
      const isActive = item.url === `#${activeHash}`;
      return (
        <li key={item}>
          {item.url && (
            <ToCContent to={item.url}>
              {item.title}
              {item.items && (
                <TocContentWrapper>
                  {createItems(item.items, activeHash)}
                </TocContentWrapper>
              )}
            </ToCContent>
          )}
        </li>
      );
    })
  );
}

const TocContentWrapper = styled.ul`
  width: 200px;
  height: 200px;
`;

const ToCContent = styled(Link)`
  font-size: var(--toc-l1-size);
  color: gray;

  ${({ isActive }) => {
    isActive &&
      css`
        font-weight: var(--toc-active-weight);
        color: var(--toc-active-color);
      `;
  }}
`;
