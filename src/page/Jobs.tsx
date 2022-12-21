import { useEffect } from 'react';
import JobsHero from '../components/jobs/JobsHero';

export default function Jobs() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('dark', 'small');
  }, []);

  return (
    <div className='section__container'>
      <JobsHero />
    </div>
  );
}
