import { useEffect, useState } from 'react';
import gsap from 'gsap';

import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlog from '../components/home/HomeBlog';
import HomeFooter from '../components/home/HomeFooter';

export default function Home() {
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

  return (
    <div>
      <HomeHero />
      <HomeWork />
      <HomeAbout />
      {isDesktop && <HomeBlog />}
      <HomeFooter />
    </div>
  );
}
