import React, { useEffect } from 'react';
import { useState } from 'react';

export const useActiveHsh = (itemIds, rootMargin) => {
  const initialID = itemIds[0];

  const [activeHash, setActiveHash] = useState(initialID);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && activeHash !== entry.target.id) {
            console.log(entry.target);
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: rootMargin || `-49% 0%` },
    );
    itemIds.forEach(id => {
      observer.observe(document.querySelector(`#${id}`));
    });
    return () => {
      observer.disconnect();
    };
  }, [itemIds, rootMargin]);

  return activeHash;
};
