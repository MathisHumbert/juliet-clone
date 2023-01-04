import { useEffect } from 'react';

import LoaderLayout from '../components/layout/LoaderLayout';
import ContactLocations from '../components/contact/ContactLocations';
import ContactHero from '../components/contact/ContactHero';
import ContactConnect from '../components/contact/ContactConnect';
import ContactSocial from '../components/contact/ContactSocial';

export default function Contact() {
  useEffect(() => {
    const footer = document.querySelector('.footer')! as HTMLDivElement;

    footer.style.display = 'none';
    footer.style.position = 'absolute';
  }, []);

  return (
    <LoaderLayout>
      <div className='section__container'>
        <ContactHero />
        <ContactLocations />
        <ContactConnect />
        <ContactSocial />
      </div>
    </LoaderLayout>
  );
}
