import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function ContactConnect() {
  const { isPageLoaded } = usePage();
  const contactConnectRef = useRef(null);
  const leftTitleRef = useRef(null);
  const rightTitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    const tl = gsap.timeline();

    tl.fromTo(
      [leftTitleRef?.current, rightTitleRef?.current],
      {
        x: gsap.utils.wrap([-40, 40]),
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 1, ease: 'power1.easeOut' }
    ).fromTo(
      textRef?.current,
      { y: 40, opacity: 0 },
      { y: 1, opacity: 1, duration: 0.8, ease: 'fade-in' },
      0.3
    );

    ScrollTrigger.create({
      trigger: contactConnectRef?.current,
      start: 'center bottom',
      animation: tl,
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='contact__connect__container' ref={contactConnectRef}>
        <div className='context__connect__header'>
          <h2 className='contact__connect__title left' ref={leftTitleRef}>
            New Business &
          </h2>
          <h2 className='contact__connect__title right' ref={rightTitleRef}>
            Press Enquiries
          </h2>
        </div>
        <p className='context__connect__text' ref={textRef}>
          Get in touch with&nbsp;
          <a>ryan@wearejuliet.com</a>
          &nbsp;or&nbsp;
          <a>leanne@wearejuliet.com</a>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;

  .contact__connect__container {
    min-height: 100%;
    max-width: 100vw;
    overflow: hidden;
    padding: 0 var(--margin);
  }

  .context__connect__header {
    margin-bottom: 30px;
  }

  .contact__connect__title {
    position: relative;
    text-transform: uppercase;
    will-change: transform, opacity;
  }

  .contact__connect__title:first-child {
    left: 0px;
    font-size: 9.07vw;
    line-height: 100%;
    font-weight: 300;
    font-family: 'Apoc';
    text-align: left;
  }

  @media (min-width: 768px) {
    .contact__connect__title:first-child {
      left: -60px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .contact__connect__title:first-child {
      left: -90px;
      font-size: 6.67vw;
    }
  }

  .contact__connect__title:last-child {
    right: 0px;
    font-size: 9.07vw;
    line-height: 100%;
    text-align: right;
  }

  @media (min-width: 768px) {
    .contact__connect__title:last-child {
      right: -60px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .contact__connect__title:first-child {
      left: -90px;
      font-size: 7.26vw;
    }
  }

  .context__connect__text {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    will-change: transform, opacity;
  }

  @media (min-width: 1024px) {
    .context__connect__text {
      width: 750px;
      font-size: 40px;
      line-height: 46px;
    }
  }

  .context__connect__text a {
    position: relative;
    display: inline-block;

    &:first-child {
      color: var(--orange);
    }

    &:last-child {
      color: var(--purple);
    }

    &:first-child::after,
    &:last-child::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      right: 0;
      left: auto;
      width: 0;
      border-bottom: 1px solid currentColor;
      transition: width 0.6s ease-out;
    }
  }

  .context__connect__text a:last-child:hover::after,
  .context__connect__text a:first-child:hover::after {
    width: 100%;
    right: auto;
    left: 0;
  }
`;
