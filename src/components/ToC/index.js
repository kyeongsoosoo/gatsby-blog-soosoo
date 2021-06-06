import React, { useEffect, useMemo } from 'react';
import { Link } from 'gatsby';

import styled, { css } from 'styled-components';
import { useActiveHsh } from '../../hooks/useActiveHash';

export default function ToC({ items }) {
  const activeHash = useActiveHsh(getHeaderID(items, true));

  const toc = useMemo(() => (
    <>

      <TocContentWrapper>{createItems(items, activeHash)}</TocContentWrapper>
    </>
  ), [activeHash])

  if (!items) return;
  return toc
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
        idList.push(...getHeaderID(item.items, true, recursionDepth + 1));
      }
    }
  }
  return idList;
};

function checkLevel(item, activeHash, level=1) {
  let counter = 0;
  if (item.url === `#${activeHash}`) {
      counter = level;
  }
  if (!item.items) return counter;

  item.items.forEach(content => {
    counter = Math.max(checkLevel(content, activeHash, level+1),counter);
  })
  return counter;

}

function createItems(items, activeHash, level = 1) {
  return (
    items &&
    items.map((item, index) => {
      const isActive = item.url === `#${activeHash}`;
      const checkActiveLevel = checkLevel(item, activeHash)
      console.log(checkActiveLevel)

      return (
        <li key={item.url}>
          {item.url && (
            <ToCContent
              to={item.url}
              style={
                (checkActiveLevel
                  ? {
                    fontWeight: `var(--toc-active-level${checkActiveLevel}-weight)`,
                    color: `var(--toc-active-level${checkActiveLevel}-color)`,
                  }
                  : null
                )
              }
            >
              {item.title}
            </ToCContent>
          )}
          {item.items && (
            <TocContentWrapper>
              {createItems(item.items, activeHash, level + 1)}
            </TocContentWrapper>
          )}
        </li>
      );
    })
  );
}

const TocContentWrapper = styled.ul`
  width: 100%;
  padding : 10px 10px;
  & & {
    padding-left: 10px;
  }
`;

const ToCContent = styled(Link)`
  
  padding: 10px 10px;
  font-size: var(--toc-l1-size);
  color: gray;
`;
