import { useEffect } from 'react';

import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlog from '../components/home/HomeBlog';
import LoaderLayout from '../components/layout/LoaderLayout';

export default function Home() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('light', 'large');
  }, []);

  return (
    <LoaderLayout>
      <div className='section__container'>
        <HomeHero />
        <HomeWork />
        <HomeAbout />
        <HomeBlog />
      </div>
    </LoaderLayout>
  );
}
