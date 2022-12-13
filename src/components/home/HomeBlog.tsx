import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { homeBlogScrollItems } from '../../utils/mockData';
import HomeBlogScrollItem from './HomeBlogScrollItem';

export default function HomeBlog() {
  const homeBlogContainerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const totalWidth =
      scrollContainerRef.current?.getBoundingClientRect().width;
    const vw = window.innerWidth / 2;

    gsap.to(scrollContainerRef.current, {
      xPercent: -100,
      duration: 3,
      x: () => -totalWidth! / 5,
      ease: 'none',
      scrollTrigger: {
        trigger: homeBlogContainerRef.current,
        start: 'center bottom',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.fromTo(
      scrollRef.current,
      { yPercent: 150 },
      {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: homeBlogContainerRef.current,
          start: 'center bottom',
          end: () => `+=${vw}`,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Wrapper>
      <div className='home__blog__container' ref={homeBlogContainerRef}>
        <div className='home__blog__scroll__container' ref={scrollContainerRef}>
          <ul className='home__blog__scroll' ref={scrollRef}>
            <div className='scroll__item__spacer'></div>
            {homeBlogScrollItems.map((item) => (
              <HomeBlogScrollItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .home__blog__container {
    position: relative;
    min-height: 100%;
  }

  .home__blog__scroll__container {
    width: calc((5 * var(--col9-g)) + ((5 - 1) * var(--col1)) + var(--margin));
    height: 100vh;
  }

  .scroll__item__spacer {
    min-width: 50vw;
  }

  .home__blog__scroll {
    display: flex;
    margin-right: var(--col1);
    position: relative;
    padding-left: var(--margin);
    width: calc(
      (var(--items) * var(--col9-g)) + ((var(--items) - 1) * var(--col1)) +
        var(--margin) + 100vw
    );

    li:nth-child(2) .scroll__item__visual {
      top: 4vw;
      transform: rotate(-16.13deg);
    }

    li:nth-child(3) .scroll__item__visual {
      top: 0;
      transform: rotate(-20.7deg);
    }

    li:nth-child(4) .scroll__item__visual {
      top: 3vw;
      transform: rotate(-4.43deg);
    }

    li:nth-child(5) .scroll__item__visual {
      top: 0.5vw;
      transform: rotate(-11.18deg);
    }

    li:nth-child(6) .scroll__item__visual {
      top: 3.5vw;
    }
  }
`;
