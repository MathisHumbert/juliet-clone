import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlog from '../components/home/HomeBlog';
import HomeFooter from '../components/home/HomeFooter';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWork />
      <HomeAbout />
      <HomeBlog />
      <HomeFooter />
    </>
  );
}
