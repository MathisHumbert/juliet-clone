import HomeHero from '../components/home/HomeHero';
import HomeWork from '../components/home/HomeWork';
import HomeAbout from '../components/home/HomeAbout';
import HomeBlog from '../components/home/HomeBlog';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeWork />
      <HomeAbout />
      <HomeBlog />
    </div>
  );
}
