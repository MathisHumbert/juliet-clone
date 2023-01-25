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
  const { isPageLoaded, isDesktop } = usePage();
  const headerRef = useRef(null);
  const barRef = useRef(null);
  const headerTitleRef = useRef(null);
  const titleRef = useRef(null);
  const itemRef = useRef(null);

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

    if (isDesktop) {
      gsap.fromTo(
        titleRef?.current,
        { opacity: 0.7 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: itemRef?.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    } else {
      gsap.killTweensOf(titleRef?.current);
      gsap.set(titleRef?.current, { opacity: 1 });
    }
  }, [isPageLoaded, isDesktop]);

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
        <ul className='about__team__items' ref={itemRef}>
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
  position: relative;

  @media (min-width: 1024px) {
    padding-bottom: 60px;
  }

  .about__team__container {
    padding: 0 var(--margin);
  }

  .about__team__header {
    padding-bottom: 105px;
    position: relative;
  }

  @media (min-width: 1024px) {
    .about__team__header {
      padding-bottom: 180px;
    }
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
    bottom: 150px;
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
    z-index: 1;
    will-change: opacity;
  }

  @media (min-width: 1024px) {
    .about__team__title {
      position: sticky;
      top: calc(100vh - 30vw);
    }
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

  .about__team__items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__team__items li:not(:last-child) {
    margin-bottom: 90px;
  }

  @media (min-width: 768px) {
    .about__team__items {
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;

      li {
        margin-bottom: 0;
      }
    }

    .about__team__items li:nth-child(1) {
      margin-left: var(--col2);
      margin-right: var(--col2g);
    }

    .about__team__items li:nth-child(2) {
      margin-top: 90px;
    }

    .about__team__items li:nth-child(3) {
      margin-top: 90px;
      margin-right: var(--col2g);
    }

    .about__team__items li:nth-child(4) {
      margin-top: 180px;
      margin-right: var(--col1);
    }

    .about__team__items li:nth-child(5) {
      margin-top: 90px;
    }

    .about__team__items li:nth-child(6) {
      margin-top: 90px;
      margin-left: var(--col2);
      margin-right: var(--col2g);
    }

    .about__team__items li:nth-child(7) {
      margin-top: 180px;
    }
  }
`;
