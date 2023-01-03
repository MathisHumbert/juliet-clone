import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';

import usePage from '../../context/PageContext';

export default function LoaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isPageFirstLoad,
    isPageTransition,
    activePageContext,
    lenis,
    activePageLoaded,
    resetPageTransition,
  } = usePage();

  useEffect(() => {
    console.log('passed');
    const container = document.getElementById('main')!;

    const imgLoaded = imagesLoaded(container);

    console.log(imgLoaded.images.length);

    imgLoaded.on('done', () => {
      if (isPageFirstLoad) {
        activePageContext();
      }

      if (isPageTransition) {
        resetPageTransition();
      }

      activePageLoaded();
      lenis?.start();
    });
  }, [isPageTransition]);

  return <>{children}</>;
}
