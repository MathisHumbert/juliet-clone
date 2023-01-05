import React, { useEffect } from 'react';
import CommunityArticles from '../components/community/CommunityArticles';

import CommunityHero from '../components/community/CommunityHero';
import LoaderLayout from '../components/layout/LoaderLayout';

export default function Community() {
  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('dark', 'small');
  }, []);

  return (
    <LoaderLayout>
      <div className='section__container'>
        <CommunityHero />
        <CommunityArticles />
      </div>
    </LoaderLayout>
  );
}
