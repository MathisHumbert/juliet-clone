import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useMemo, useState } from 'react';

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
  lerp: 0.01,
  smooth: true,
  direction: 'vertical',
});

function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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
