import React, { useEffect } from 'react';
import { useState } from 'react';

export const useActiveHsh = (itemIds, rootMargin) => {
  const [activeHash, setActiveHash] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: rootMargin || `0% 0% -80% 0%` },
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
