import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';

export default function Contact() {
  useEffect(() => {
    const footer = document.querySelector('.footer')! as HTMLDivElement;

    footer.style.display = 'none';
  }, []);

  return (
    <div>
      <ContactHero />
    </div>
  );
}
