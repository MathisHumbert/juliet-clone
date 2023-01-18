import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function AboutWho() {
  const { isPageLoaded } = usePage();
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const titleBottomRef = useRef(null);
  const titleTopRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    const titleBottom = new SplitType(titleBottomRef.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitleBottom = new SplitType(titleBottom.words!, {
      types: 'words',
      tagName: 'span',
    });

    const titleTop = new SplitType(titleTopRef.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitleTop = new SplitType(titleTop.words!, {
      types: 'words',
      tagName: 'span',
    });

    const tl = gsap.timeline();

    tl.fromTo(
      subtitleTop.words,
      { yPercent: 100 },
      { yPercent: 0, duration: 1, stagger: 0.08, ease: '' }
    )
      .fromTo(
        headerRef?.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'fade-in' },
        0
      )
      .fromTo(
        subtitleBottom.words,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.08, ease: 'text-in' },
        0.3
      );

    ScrollTrigger.create({
      trigger: containerRef?.current,
      animation: tl,
      start: 'top bottom',
      end: 'bottom bottom',
    });

    ScrollTrigger.create({
      trigger: containerRef?.current,
      start: 'top+=200px bottom',
      end: 'bottom bottom',
      onEnter: () => document.body.classList.add('dark'),
      onLeaveBack: () => document.body.classList.remove('dark'),
    });

    gsap.fromTo(
      textRef?.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        delay: 0.2,
        scrollTrigger: {
          start: 'center bottom',
          end: 'bottom bottom',
        },
      }
    );
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='about__who__container' ref={containerRef}>
        <h5 className='about__who__header' ref={headerRef}>
          The who
        </h5>
        <div className='about__who__title'>
          <h2 className='about__who__title--top' ref={titleTopRef}>
            We are 50+ people strong.
          </h2>
          <h2 className='about__who__title--bottom' ref={titleBottomRef}>
            We’re strategists, writers, producers, designers, and creative
            chameleons.
          </h2>
        </div>
        <div className='about__who__text' ref={textRef}>
          <p>
            We value diversity of opinion, doing over PowerPointing, escaping
            echo chambers, and being part of the actual community not just the
            ad community.
          </p>
          <p>&nbsp;</p>
          <p>
            We’re interested in building all types of brands, and solving all
            types of problems, by loving all types of audiences.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 60px;
  padding-bottom: 90px;
  pointer-events: auto;

  .about__who__container {
    padding: 0 var(--margin);
  }

  .about__who__header {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
  }

  .about__who__title {
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .about__who__title {
      width: var(--col11-g);
      margin-bottom: 60px;
    }
  }

  @media (min-width: 1024px) {
    .about__who__title {
      width: var(--col11-g);
      margin-bottom: 90px;
    }
  }

  .about__who__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .about__who__title span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    will-change: transform;
  }

  .about__who__title--top {
    font-size: 10.675vw;
    line-height: 100%;
    font-weight: 400;
  }

  .about__who__title--bottom {
    font-size: 10.675vw;
    line-height: 100%;
    font-family: 'Apoc';
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    .about__who__title--top,
    .about__who__title--bottom {
      font-size: 5.655vw;
    }
  }

  .about__who__text {
    font-size: 16px;
    line-height: 22px;
    will-change: transform, opacity;
  }

  @media (min-width: 768px) {
    .about__who__text {
      width: var(--col5-g);
      margin-left: var(--col6);
    }
  }

  @media (min-width: 1024px) {
    .about__who__text {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
