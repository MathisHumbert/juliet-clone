import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function CommunityHero() {
  const { isPageLoaded } = usePage();
  const titleRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    const title = new SplitType(titleRef.current!, {
      types: 'chars',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.chars!, {
      types: 'chars',
      tagName: 'span',
    });

    gsap.set('.community__hero__title', { opacity: 1 });

    gsap.to(subtitle.chars, {
      y: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'text-in',
    });
    gsap.to(barRef?.current, {
      width: '100%',
      duration: 0.6,
      ease: 'power1.easeOut',
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='community__hero__container'>
        <h1 className='community__hero__title'>
          <strong ref={titleRef}>community</strong>
          <div className='community__hero__bar' ref={barRef}></div>
        </h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: var(--padding-top);
  padding-bottom: 15px;
  pointer-events: auto;

  @media (min-width: 768px) {
    padding-bottom: 30px;
  }

  .community__hero__container {
    margin: 0 var(--margin);
  }

  .community__hero__title {
    display: block;
    position: relative;
    padding-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-family: 'Apoc';
    opacity: 0;
  }

  .community__hero__bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    display: block;
    border-bottom: 1px solid var(--black);
  }

  @media (min-width: 768px) {
    .community__hero__title {
      padding-bottom: 30px;
    }
  }

  .community__hero__title strong {
    font-size: 15.28vw;
    line-height: 81%;
    display: inline-block;
    font-family: Aeonik;
    font-weight: 500;
    position: relative;
    vertical-align: bottom;
  }

  @media (min-width: 1024px) {
    .community__hero__title strong {
      font-size: 9.28vw;
      line-height: 82%;
    }
  }

  .community__hero__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    vertical-align: bottom;
  }

  .community__hero__title span span {
    display: block;
    padding-top: 26px;
    padding-bottom: 6px;
    transform: translateY(100%);
    will-change: transform;
  }
`;
