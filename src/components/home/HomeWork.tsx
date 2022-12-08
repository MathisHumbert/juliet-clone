import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';
import styled from 'styled-components';

import { homeWorkItems } from '../../utils/mockData';
import HomeWorkItem from './HomeWorkItem';

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create('cubic-opacity', '0.5, 1, 0.89, 1');

export default function HomeWork() {
  const trackingBarContainerRef = useRef(null);
  const trackingBarRef = useRef(null);
  const workButtonContainerRef = useRef(null);
  const workButtonRef = useRef(null);

  useEffect(() => {
    gsap.to(trackingBarRef.current, {
      height: '100%',
      ease: 'linear',
      scrollTrigger: {
        trigger: trackingBarContainerRef.current,
        start: 'top bottom-=80px',
        end: 'bottom+=80px bottom',
        scrub: 1,
      },
    });

    gsap.fromTo(
      workButtonRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'cubic-opacity',
        scrollTrigger: {
          trigger: workButtonContainerRef.current,
          start: 'top bottom-=80px',
          end: 'bottom+=80px bottom',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <Wrapper>
      <div className='work__container'>
        <h2 className='work__title'>
          <span className='work__title--main'>Selected</span>
          <span className='work__title--sub'>Works</span>
        </h2>
        <span
          className='tracking__bar__container'
          ref={trackingBarContainerRef}
        >
          <div className='tracking__bar' ref={trackingBarRef}></div>
        </span>
        <ul className='work__item__container'>
          {homeWorkItems.map((item, index) => (
            <HomeWorkItem
              key={item.id}
              {...item}
              last={item.id === homeWorkItems.length}
            />
          ))}
        </ul>
        <div className='work__button__container' ref={workButtonContainerRef}>
          <a href='/' className='work__button' ref={workButtonRef}>
            <span className='infinite__text__container'>
              <span className='infinite__text'>
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects See All Projects See All Projects See All Projects
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects See All Projects See All Projects See All Projects
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects{' '}
              </span>
              <span className='infinite__text'>
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects See All Projects See All Projects See All Projects
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects See All Projects See All Projects See All Projects
                See All Projects See All Projects See All Projects See All
                Projects See All Projects See All Projects See All Projects See
                All Projects{' '}
              </span>
            </span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 120px;

  .work__container {
    position: relative;
    min-height: 100%;
    padding: 0 var(--margin);
  }

  .work__title {
    text-align: right;
    margin-right: var(--col1);
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .work__title--main {
    font-size: 38px;
    line-height: 36px;
    display: -block;
  }

  .work__title--sub {
    font-size: 35px;
    line-height: 42px;
    display: block;
    font-family: 'Apoc';
  }

  .tracking__bar__container {
    height: 240px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: var(--col1);
  }

  .tracking__bar {
    display: block;
    height: 0;
    width: 1px;
    background: var(--black);
  }

  .work__item__container {
    position: relative;
    margin-bottom: 90px;
  }

  .work__button__container {
    display: flex;
    justify-content: center;
  }

  .work__button {
    width: 242px;
    height: 40px;
    line-height: 40px !important;
    font-size: 21px;
    overflow: hidden;
    text-transform: uppercase;
    border: 1px solid var(--black);
    border-radius: 200px;

    &:hover .infinite__text {
      animation-play-state: paused;
    }
  }
`;
