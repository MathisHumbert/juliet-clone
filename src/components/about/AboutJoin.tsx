import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';
import TransitionLink from '../shared/TransitionLink';

gsap.registerPlugin(CustomEase);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function AboutJoin() {
  const { isPageLoaded } = usePage();
  const titleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (isPageLoaded) return;

    const title = new SplitType(titleRef.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef?.current,
        start: 'top bottom',
      },
    });

    tl.fromTo(
      subtitle?.words,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'text-in',
        stagger: 0.08,
      }
    ).fromTo(linkRef?.current, { opacity: 0 }, { opacity: 1 }, 0.6);
  }, [isPageLoaded]);
  return (
    <Wrapper>
      <div className='about__join__container'>
        <h3 ref={titleRef} className='about__join__title'>
          Join the team
        </h3>
        <TransitionLink href='/jobs'>
          <a className='about__join__link' ref={linkRef}>
            <div className='looped__text'>
              <div>See our current openings&nbsp;</div>
              <div>See our current openings&nbsp;</div>
              <div>See our current openings&nbsp;</div>
              <div>See our current openings&nbsp;</div>
              <div>See our current openings</div>
            </div>
          </a>
        </TransitionLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 45px 0;
  pointer-events: auto;

  @media (min-width: 1024px) {
    padding: 90px 0;
  }

  .about__join__container {
    padding: 0 var(--margin);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .about__join__title {
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    .about__join__title {
      font-size: 66px;
      line-height: 72px;
      margin-bottom: 30px;
    }
  }

  .about__join__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .about__join__title > span:last-child {
    font-family: 'Aeonik';
    font-weight: 500;
    padding-top: 2px;

    span {
      padding-bottom: 5px;
    }
  }

  @media (min-width: 1024px) {
    .about__join__title > span:last-child {
      font-size: 74px;
    }
  }

  .about__join__title span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    will-change: transform;
  }

  .about__join__link {
    display: inline-block;
    width: 166px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid var(--black);
    border-radius: 200px;
    overflow: hidden;
    position: relative;
  }

  @media (min-width: 768px) {
    .about__join__link {
      width: 240px;
      height: 40px;
      line-height: 40px;
    }
  }

  @media (min-width: 1024px) {
    .about__join__link {
      font-size: 21px;
    }
  }

  .looped__text div {
    margin-top: 3px;
  }
`;
