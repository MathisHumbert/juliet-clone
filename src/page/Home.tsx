import { useEffect, useState } from 'react';
import imagesLoaded from 'imagesloaded';

import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlog from '../components/home/HomeBlog';
import usePage from '../context/PageContext';

export default function Home() {
  const { lenis } = usePage();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('light', 'large');

    const container = document.getElementById('main')!;

    const imgLoaded = imagesLoaded(container);

    imgLoaded.on('done', () => {
      setIsPageLoaded(true);
      lenis?.start();
    });
  }, []);

  return (
    <div className='section__container'>
      <HomeHero isPageLoaded={isPageLoaded} />
      <HomeWork isPageLoaded={isPageLoaded} />
      <HomeAbout />
      <HomeBlog />
    </div>
  );
}
