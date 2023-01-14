import { useEffect } from 'react';

import LoaderLayout from '../components/layout/LoaderLayout';
import AboutHero from '../components/about/AboutHero';
import AboutImages from '../components/about/AboutImages';
import AboutIntro from '../components/about/AboutIntro';

export default function About() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('dark', 'small');
  }, []);

  return (
    <LoaderLayout>
      <div className='section__container'>
        <AboutHero />
        <AboutImages />
        <AboutIntro />
      </div>
    </LoaderLayout>
  );
}
