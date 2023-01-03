import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import debounce from '../utils/debounce';
interface PageProviderProps {
  children: React.ReactNode;
}
interface IPage {
  isPageFirstLoad: boolean;
  isPageLoaded: boolean;
  isPageTransition: boolean;
  isDesktop: boolean;
  lenis: Lenis | null;
  activePageContext: () => void;
  activePageLoaded: () => void;
  resetPageLoaded: () => void;
  activePageTransition: () => void;
  resetPageTransition: () => void;
}

const PageContext = createContext<IPage>({
  isPageFirstLoad: false,
  isPageLoaded: false,
  isPageTransition: false,
  lenis: null,
  isDesktop: false,
  activePageContext: () => {},
  activePageLoaded: () => {},
  resetPageLoaded: () => {},
  activePageTransition: () => {},
  resetPageTransition: () => {},
});

const lenis = new Lenis({
  // @ts-ignore
  lerp: 0.1,
  smooth: true,
});

lenis.stop();

const scrollFn = (time: any) => {
  lenis.raf(time);
  requestAnimationFrame(scrollFn);
};

requestAnimationFrame(scrollFn);

let lastHeight = 0;
let hideNav = false;

lenis?.on('scroll', ({ scroll }: { scroll: number }) => {
  debounce(() => (lastHeight = scroll))();

  if (lastHeight < scroll && scroll > 160 && !hideNav) {
    document.body.classList.add('hide__nav', 'scrolled');

    hideNav = true;
  }

  if (lastHeight >= scroll && scroll > 160 && hideNav) {
    document.body.classList.remove('hide__nav');
    hideNav = false;
  }

  if (lastHeight >= scroll && scroll < 160 && !hideNav) {
    document.body.classList.remove('scrolled');
  }
});

export const PageProvider = ({ children }: PageProviderProps) => {
  const [isPageFirstLoad, setIsPageFirstLoad] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPageTransition, setIsPageTransition] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const activePageContext = () => setIsPageFirstLoad(true);

  const activePageLoaded = () => setIsPageLoaded(true);

  const resetPageLoaded = () => setIsPageLoaded(false);

  const activePageTransition = () => setIsPageTransition(true);

  const resetPageTransition = () => setIsPageTransition(false);

  useEffect(() => {
    const onWindowResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const memoedValue = useMemo(
    () => ({
      isPageFirstLoad,
      isPageLoaded,
      isPageTransition,
      isDesktop,
      lenis,
      activePageContext,
      activePageLoaded,
      resetPageLoaded,
      activePageTransition,
      resetPageTransition,
    }),
    [isPageFirstLoad, isPageLoaded, isPageTransition, isDesktop]
  );

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export default function usePage() {
  return useContext(PageContext);
}
