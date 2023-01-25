import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import imagesLoaded from 'imagesloaded';

import usePage from '../../context/PageContext';

gsap.registerPlugin(ScrollTrigger);

export default function LoaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isPageFirstLoad,
    isPageTransition,
    activePageContext,
    resetPageTransition,
    activePageLoaded,
    lenis,
  } = usePage();

  useEffect(() => {
    const container = document.getElementById('main')!;

    const imgLoaded = imagesLoaded(container);
    lenis?.stop();

    imgLoaded.on('done', () => {
      if (isPageFirstLoad) {
        activePageContext();
      }

      if (isPageTransition) {
        const tl = gsap.timeline({
          onStart: () => {
            ScrollTrigger.killAll();
            gsap.set('.transition__container', {
              opacity: 1,
              pointerEvents: 'auto',
            });
            document.body.classList.remove('.dark');
          },
        });

        tl.to(
          '.transition__container',
          {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.2,
            ease: 'power1.easeOut',
            onComplete: () => {
              lenis?.start();
              resetPageTransition();
              activePageLoaded();
            },
          },
          1
        );
      } else {
        activePageLoaded();
        lenis?.start();
      }
    });
  }, [isPageTransition]);

  return <>{children}</>;
}
