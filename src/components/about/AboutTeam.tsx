import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';
import AboutTeamItem from './AboutTeamItem';
import { aboutTeam } from '../../utils/mockData';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function AboutTeam() {
  const { isPageLoaded } = usePage();
  const headerRef = useRef(null);
  const barRef = useRef(null);
  const headerTitleRef = useRef(null);
  const titleRef = useRef(null);

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

    gsap.fromTo(
      subtitle.chars,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'text-in',
        scrollTrigger: {
          trigger: titleRef?.current,
          start: 'center bottom',
        },
      }
    );

    const tl = gsap.timeline();

    tl.fromTo(
      headerTitleRef?.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'fade-in' }
    ).fromTo(
      barRef?.current,
      { width: 0 },
      { width: '100%', duration: 0.6, ease: 'power1.easeOut' },
      0
    );

    ScrollTrigger.create({
      trigger: headerRef?.current,
      animation: tl,
      start: 'center bottom',
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='about__team__container'>
        <div className='about__team__header' ref={headerRef}>
          <h5 className='about__header__title' ref={headerTitleRef}>
            The Team
          </h5>
          <div className='about__header__bar' ref={barRef}></div>
        </div>
        <h2 className='about__team__title' ref={titleRef}>
          Juliet
        </h2>
        <ul>
          {aboutTeam.map((team) => (
            <AboutTeamItem key={team.id} {...team} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 120px;
  pointer-events: auto;

  .about__team__container {
    padding: 0 var(--margin);
  }

  .about__team__header {
    padding-bottom: 105px;
    position: relative;
  }

  .about__header__title {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-family: 'Apoc';
    font-weight: 400;
    will-change: opacity;
  }

  .about__header__bar {
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid var(--white);
    will-change: width;
  }

  .about__team__title {
    display: block;
    font-size: 30vw;
    font-weight: 300;
    font-family: 'Apoc';
    text-transform: uppercase;
  }

  .about__team__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .about__team__title span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    will-change: transform;
  }
`;
