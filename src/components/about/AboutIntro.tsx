import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function AboutIntro() {
  const { isPageLoaded } = usePage();
  const containerRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
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
    ).fromTo(
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
      <div className='about__intro__container' ref={containerRef}>
        <div className='about__intro__title'>
          <h2 className='about__intro__title--top' ref={titleTopRef}>
            Your audience has more
          </h2>
          <h2 className='about__intro__title--bottom' ref={titleBottomRef}>
            control of your brand that at any point in history.
          </h2>
        </div>
        <div className='about__intro__text' ref={textRef}>
          <h3 className='about__intro__text--title'>
            The chessboard has flipped.
            <strong>
              You can only build brands people love by loving your audience like
              crazy
            </strong>
            .
          </h3>
          <p className='about__intro__text--pragraph'>&nbsp;</p>
          <p className='about__intro__text--pragraph'>
            Our love for your audience is more than a philosophy — it’s a
            practice. One built on forging relationships between brands and
            people through ongoing conversation and an openness to listening and
            learning.
          </p>
          <p className='about__intro__text--pragraph'>&nbsp;</p>
          <p className='about__intro__text--pragraph'>
            Everyone here spends less time on Google and more time in the real
            world. We’ve done ride alongs with Uber drivers, pierced our ears
            for beauty clients, spent time in skateparks with influencers,
            grocery shopped on $50 per week, and founded Real Talk Insights. Or,
            as Fast Company calls it, the focus group of the future. All to
            understand audiences better.
          </p>
          <p className='about__intro__text--pragraph'>&nbsp;</p>
          <p className='about__intro__text--pragraph'>
            Crazy audience love is how we’ve helped brands like FreshCo boost
            sales 72% versus the category, Grand Marnier Cuvée du Centenaires
            have its strongest month ever at +65% growth, and delivered the
            highest return on investment for a digital campaign in Zales’
            history.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 60px;
  pointer-events: auto;

  @media (min-width: 1024px) {
    padding-bottom: 90px;
  }

  .about__intro__container {
    padding: 0 var(--margin);
  }

  .about__intro__title {
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .about__intro__title {
      width: var(--col11-g);
      margin-bottom: 60px;
    }
  }

  @media (min-width: 1024px) {
    .about__intro__title {
      width: var(--col11-g);
      margin-bottom: 90px;
    }
  }

  .about__intro__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .about__intro__title span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    will-change: transform;
  }

  .about__intro__title--top {
    font-size: 10.675vw;
    line-height: 100%;
    font-weight: 400;
  }

  .about__intro__title--bottom {
    font-size: 10.675vw;
    line-height: 100%;
    font-weight: 300;
    font-family: 'Apoc';
  }

  @media (min-width: 1024px) {
    .about__intro__title--top,
    .about__intro__title--bottom {
      font-size: 5.655vw;
    }
  }

  .about__intro__text {
    will-change: transform, opacity;
  }

  @media (min-width: 768px) {
    .about__intro__text {
      width: var(--col5-g);
      margin-left: var(--col6);
    }
  }

  .about__intro__text--title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;

    strong {
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    .about__intro__text--title {
      font-size: 40px;
      line-height: 46px;
    }
  }

  .about__intro__text--pragraph {
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    .about__intro__text--pragraph {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
