import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function HomeBlogHeading({ isDesktop }: { isDesktop: boolean }) {
  const blogHeadingRef = useRef(null);
  const trackingBarContainerRef = useRef(null);
  const trackingBarRef = useRef(null);

  useEffect(() => {
    gsap.killTweensOf(trackingBarRef.current);
    gsap.killTweensOf(blogHeadingRef.current);

    if (isDesktop) {
      const blogScroll = document.querySelector(
        '.home__blog__scroll__container'
      );

      gsap.to(trackingBarRef.current, {
        height: '100%',
        ease: 'linear',
        scrollTrigger: {
          trigger: trackingBarContainerRef.current,
          start: 'top bottom-=80px',
          end: 'bottom+=80px bottom',
          scrub: 1,
        },
        onComplete: () => {
          gsap.killTweensOf(trackingBarRef.current);
        },
      });

      gsap.fromTo(
        blogHeadingRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'fade-in',
          scrollTrigger: {
            trigger: blogScroll,
            start: 'top bottom',
            end: 'bottom bottom',
          },
        }
      );
    }
  }, [isDesktop]);

  return (
    <Wrapper ref={blogHeadingRef} className='home__blog__heading'>
      <h2 className='blog__heading__title'>
        <span className='blog__heading__title--main'>Juliet X</span>
        <span className='blog__heading__title--sub'>Community</span>
      </h2>
      <span className='tracking__bar__container' ref={trackingBarContainerRef}>
        <div className='tracking__bar' ref={trackingBarRef}></div>
      </span>
      <a href='/' className='blog__heading__button'>
        <div className='looped__text'>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +&nbsp;</div>
          <div>VIEW ALL +</div>
        </div>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  margin-bottom: 60px;
  padding-left: var(--margin);

  @media (min-width: 768px) {
    padding-left: var(--col1);
  }

  @media (min-width: 1024px) {
    position: fixed;
    top: calc((100vh - 27vw - 84px - 10px - 104px - 10px) / 2);
    margin-bottom: 0;
  }

  .blog__heading__title {
    text-align: left;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .blog__heading__title {
      margin-right: var(--col1);
    }
  }

  .blog__heading__title--main {
    font-size: 22px;
    line-height: 22px;
    display: block;
  }

  .blog__heading__title--sub {
    font-size: 20px;
    line-height: 25px;
    display: block;
    font-family: 'Apoc';
  }

  @media (min-width: 1024px) {
    .blog__heading__title--main {
      font-size: 38px;
      line-height: 36px;
    }

    .blog__heading__title--sub {
      font-size: 35px;
      line-height: 42px;
    }
  }

  .tracking__bar__container {
    height: 90px;
    width: 100%;
    display: flex;
    z-index: 10;
  }

  .tracking__bar {
    display: block;
    height: 100%;
    width: 1px;
    background: var(--white);
  }

  @media (min-width: 1024px) {
    .tracking__bar__container {
      height: 120px;
    }
  }

  .blog__heading__button {
    position: absolute;
    top: initial;
    bottom: 0;
    right: var(--margin);
    width: 29.33vw;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    border: 1px solid var(--white);
    border-radius: 200px;
    overflow: hidden;
    pointer-events: auto;

    &:hover .looped__text div {
      animation-play-state: paused;
    }
  }

  @media (min-width: 1024px) {
    .blog__heading__button {
      height: 40px;

      line-height: 40px;
    }
  }

  @media (min-width: 1024px) {
    .blog__heading__button {
      top: 12px;
      bottom: initial;
      width: 11.25vw;
      height: 40px;
      font-size: 21px;
    }
  }

  .looped__text div {
    margin-top: 3px;
  }
`;
