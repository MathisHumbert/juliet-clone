import { useEffect, useState } from 'react';
import gsap from 'gsap';

import HomeBlogDragg from './HomeBlogDragg';
import HomeBlogScroll from './HomeBlogScroll';

export default function HomeBlog() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const onWindowResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    gsap.set('.home__footer', { opacity: 0 });
  }, [isDesktop]);

  if (isDesktop) {
    return <HomeBlogScroll />;
  }

  return <HomeBlogDragg />;
}
