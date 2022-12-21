import HomeBlogDragg from './HomeBlogDragg';
import HomeBlogScroll from './HomeBlogScroll';
import usePage from '../../context/PageContext';

export default function HomeBlog() {
  const { isDesktop } = usePage();

  if (isDesktop) {
    return <HomeBlogScroll />;
  }

  return <HomeBlogDragg />;
}
