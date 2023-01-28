import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import usePage from '../../context/PageContext';
import { homeBlogScrollItems } from '../../utils/mockData';
import HomeBlogScrollItem from './HomeBlogItem';
import HomeBlogScrollSocial from './HomeBlogSocial';
import HomeBlogHeading from './HomeBlogHeading';

export default function HomeBlogScroll() {
  const { isPageLoaded } = usePage();
  const homeBlogRef = useRef(null);
  const homeBlogContainerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollBlogContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    gsap.to(scrollContainerRef?.current, {
      xPercent: -100,
      duration: 3,
      x: () =>
        (scrollBlogContainerRef?.current?.getBoundingClientRect().width! +
          window.innerWidth) /
          5 -
        window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: homeBlogContainerRef?.current,
        start: 'top top',
        end: () =>
          `+=${
            scrollBlogContainerRef?.current?.getBoundingClientRect().width! +
            window.innerWidth +
            window.innerWidth
          }`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.fromTo(
      scrollRef?.current,
      { xPercent: 10 },
      {
        xPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: homeBlogRef?.current,
          start: 'top bottom',
          end: () => `+=${window.innerHeight}`,
          scrub: true,
        },
      }
    );
  }, [isPageLoaded]);

  return (
    <Wrapper ref={homeBlogRef}>
      <div className='home__blog__container' ref={homeBlogContainerRef}>
        <HomeBlogHeading isDesktop={true} />
        <div className='home__blog__scroll__container' ref={scrollContainerRef}>
          <div className='home__blog__scroll' ref={scrollRef}>
            <ul
              className='home__blog__scroll__item__container'
              ref={scrollBlogContainerRef}
            >
              {homeBlogScrollItems.map((item) => (
                <HomeBlogScrollItem key={item.id} {...item} isDesktop={true} />
              ))}
            </ul>
            <HomeBlogScrollSocial />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--black);

  .home__blog__container {
    position: relative;
  }

  .home__blog__scroll__container {
    width: calc(
      (5 * var(--col9-g)) + (5 * var(--col1)) + var(--col1) + var(--margin)
    );
    height: 100vh;
    display: flex;
    align-items: center;
    will-change: transform;
  }

  .home__blog__scroll {
    display: flex;
    width: fit-content;
  }

  .home__blog__scroll__item__container {
    display: flex;
    margin-right: var(--col1);
    position: relative;
    padding-left: var(--margin);
    width: fit-content;
    top: calc((84px + 10px + 104px + 10px) / 2);

    li:nth-child(1) .blog__item__visual {
      top: 4vw;
      transform: rotate(-16.13deg);
    }

    li:nth-child(2) .blog__item__visual {
      top: 0;
      transform: rotate(-20.7deg);
    }

    li:nth-child(3) .blog__item__visual {
      top: 3vw;
      transform: rotate(-4.43deg);
    }

    li:nth-child(4) .blog__item__visual {
      top: 0.5vw;
      transform: rotate(-11.18deg);
    }

    li:nth-child(5) .blog__item__visual {
      top: 3.5vw;
    }
  }
`;
