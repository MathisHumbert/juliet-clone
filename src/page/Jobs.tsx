import { useEffect } from 'react';

import JobsHero from '../components/jobs/JobsHero';
import JobsImages from '../components/jobs/JobsImages';
import JobsOpenings from '../components/jobs/JobsOpenings';
import ImageCarousel from '../components/shared/ImageCarousel';

export default function Jobs() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('dark', 'small');
  }, []);

  return (
    <div className='section__container'>
      <JobsHero />
      <JobsImages />
      <JobsOpenings />
      <ImageCarousel />
    </div>
  );
}
