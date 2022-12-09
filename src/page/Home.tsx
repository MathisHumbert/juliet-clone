import React from 'react';
import HomeAbout from '../components/home/HomeAbout';

import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeWork />
      <HomeAbout />
    </div>
  );
}
