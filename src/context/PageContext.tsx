import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import debounce from '../utils/debounce';
interface PageProviderProps {
  children: React.ReactNode;
}
interface IPage {
  isPageFirstLoad: boolean;
  activePageContext: () => void;
  lenis: Lenis | null;
}

const PageContext = createContext<IPage>({
  isPageFirstLoad: false,
  activePageContext: () => {},
  lenis: null,
});

const lenis = new Lenis({
  // @ts-ignore
  lerp: 0.1,
  smooth: true,
});

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

  const activePageContext = () => setIsPageFirstLoad(true);

  const memoedValue = useMemo(
    () => ({ isPageFirstLoad, activePageContext, lenis }),
    [isPageFirstLoad]
  );

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export default function usePage() {
  return useContext(PageContext);
}
