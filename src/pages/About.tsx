import { useEffect } from 'react';

import LoaderLayout from '../components/layout/LoaderLayout';
import AboutHero from '../components/about/AboutHero';
import AboutImages from '../components/about/AboutImages';
import AboutIntro from '../components/about/AboutIntro';
import AboutScrollers from '../components/about/AboutScrollers';
import AboutWho from '../components/about/AboutWho';
import AboutTeam from '../components/about/AboutTeam';
import AboutWhat from '../components/about/AboutWhat';
import AboutClients from '../components/about/AboutClients';
import ImageCarousel from '../components/shared/ImageCarousel';
import AboutJoin from '../components/about/AboutJoin';

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
        <AboutScrollers />
        <AboutWho />
        <AboutTeam />
        <AboutWhat />
        <AboutClients />
        <ImageCarousel />
        <AboutJoin />
      </div>
    </LoaderLayout>
  );
}
