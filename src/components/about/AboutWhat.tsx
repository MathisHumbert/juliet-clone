import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';
import { aboutWhat } from '../../utils/mockData';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('img-in', '0.12, 0, 0.39, 0');

export default function AboutWhat() {
  const { isPageLoaded } = usePage();
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const itemsRef = useRef(null);
  const verticalBarRef = useRef(null);
  const horizontalBarRef = useRef(null);

  useEffect(() => {
    if (isPageLoaded) return;

    ScrollTrigger.create({
      trigger: wrapperRef?.current,
      start: 'top+=400px bottom',
      end: 'bottom bottom',
      onEnter: () => document.body.classList.remove('dark'),
      onLeaveBack: () => document.body.classList.add('dark'),
    });

    const aboutWhatItems = document.querySelectorAll('.about__what__item');

    aboutWhatItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, transform: 40 },
        {
          opacity: 1,
          transform: 0,
          duration: 0.8,
          ease: 'fade-in',
          delay: 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'center bottom',
          },
        }
      );
    });

    gsap.fromTo(
      titleRef?.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        scrollTrigger: {
          trigger: titleRef?.current,
          start: 'top bottom',
        },
      }
    );

    gsap.fromTo(
      textRef?.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'fade-in',
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef?.current,
          start: 'top bottom',
        },
      }
    );

    const imgTl = gsap.timeline({ defaults: { ease: 'img-in' } });

    imgTl
      .fromTo(
        imgRef?.current,
        {
          clipPath: 'polygon(0 0,100% 0,100% 0,0 0)',
        },
        {
          clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
          duration: 0.8,
        }
      )
      .fromTo(
        imgRef?.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 1.6,
        },
        0
      );

    ScrollTrigger.create({
      trigger: imgRef?.current,
      start: 'center bottom',
      animation: imgTl,
    });

    gsap.to(verticalBarRef?.current, {
      height: 'calc(100% - 71px)',
      ease: 'linear',
      scrollTrigger: {
        trigger: itemsRef?.current,
        start: 'top bottom-=200px',
        end: 'bottom+=200px bottom',
        scrub: 1,
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.killTweensOf(verticalBarRef?.current);
      },
    });

    gsap.to(horizontalBarRef?.current, {
      width: 'calc(100% - var(--margin) * 2)',
      duration: 0.6,
      ease: 'power1.easeOut',
      scrollTrigger: {
        trigger: wrapperRef?.current,
        start: 'bottom bottom',
      },
    });
  }, [isPageLoaded]);

  return (
    <Wrapper ref={wrapperRef}>
      <div className='about__what__container'>
        <div className='about__what__bio'>
          <h2 className='about__bio__title' ref={titleRef}>
            The What
          </h2>
          <p className='about__bio__text' ref={textRef}>
            <strong>
              We are a full-service creative agency with a focus on strategy,
              connections planning, creative, and production.{' '}
            </strong>
            Here are just a few of our other unique capabilities and
            partnerships.
          </p>
          <figure className='about__bio__figure'>
            <img
              src='/img/about-bio.png'
              alt='about-bio'
              className='about__bio__img'
              ref={imgRef}
            />
          </figure>
        </div>
        <ul className='about__what__items' ref={itemsRef}>
          <div
            className='about__what__bar--vertical'
            ref={verticalBarRef}
          ></div>
          {aboutWhat.map(({ id, title, text }) => (
            <li className='about__what__item' key={id}>
              <h3 className='about__what__item__title'>{title}</h3>
              <p className='about__what__item__text'>{text}</p>
            </li>
          ))}
        </ul>
        <div
          className='about__what__bar--horizontal'
          ref={horizontalBarRef}
        ></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;

  .about__what__container {
    position: relative;
    padding: 45px var(--margin) 60px;
  }

  @media (min-width: 1024px) {
    .about__what__container {
      padding: 60px var(--margin) 30px;
      display: flex;
    }
  }

  .about__what__bio {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) {
    .about__what__bio {
      min-width: var(--col6);
      max-width: var(--col6);
      justify-content: space-between;
    }
  }

  .about__bio__title {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 30px;
    will-change: opacity;
  }

  @media (min-width: 1024px) {
    .about__bio__title {
      font-size: 21px;
      line-height: 21px;
      margin-bottom: 60px;
    }
  }

  .about__bio__text {
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 60px;
    will-change: opacity, transform;

    strong {
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    .about__bio__text {
      font-size: 40px;
      line-height: 46px;
      margin-bottom: 180px;
      width: var(--col5-g);
    }
  }

  .about__bio__figure {
    align-self: center;
    margin-bottom: 1rem;
  }

  .about__bio__img {
    width: var(--col2-g);
    will-change: clip-path, transform;
  }

  @media (min-width: 768px) {
    .about__bio__img {
      width: var(--col4-g);
    }
  }

  .about__what__items {
    padding: 0 36px;
    list-style-type: none;
  }

  @media (min-width: 1024px) {
    .about__what__items {
      padding: 71px 0 0 0;
      width: var(--col6-g);
      list-style-type: none;
      position: relative;
    }
  }

  .about__what__item {
    will-change: opacity, transform;
  }

  .about__what__item:not(:last-child) {
    margin-bottom: 45px;
  }

  @media (min-width: 1024px) {
    .about__what__item {
      padding-left: var(--col1);
    }

    .about__what__item:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  .about__what__item__title {
    font-size: 40px;
    line-height: 100%;
    margin-bottom: 15px;
    position: relative;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';

    &::before {
      content: '+';
      position: absolute;
      left: -36px;
      font-size: 25px;
      line-height: 36px;
    }
  }

  @media (min-width: 1024px) {
    .about__what__item__title {
      font-size: 40px;
      line-height: 46px;
      margin-bottom: 30px;

      &::before {
        left: -40px;
        font-size: 35px;
        line-height: 36px;
      }
    }
  }

  .about__what__item__text {
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    .about__what__item__text {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .about__what__item:nth-child(odd) .about__what__item__title::before {
    color: var(--purple);
  }

  .about__what__item:nth-child(even) .about__what__item__title::before {
    color: var(--turks);
  }

  .about__what__item:nth-child(2) .about__what__item__title::before {
    color: var(--orange) !important;
  }

  .about__what__bar--vertical,
  .about__what__bar--horizontal {
    display: none;
    transition: background 0.6s ease-out;
  }

  .about__what__bar--horizontal {
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 1px;
    background: var(--black);
    will-change: width;
  }

  @media (min-width: 1024px) {
    .about__what__bar--vertical {
      display: block;
      position: absolute;
    }

    .about__what__bar--vertical {
      height: 0;
      width: 1px;
      background: var(--black);
      will-change: height;
    }

    .about__what__bar--horizontal {
      bottom: 0;
      width: 0;
      height: 1px;
      background: var(--black);
      will-change: width;
    }
  }
`;
