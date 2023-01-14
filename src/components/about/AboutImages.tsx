import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';
import MaskFlowerLogo from '../shared/logo/MaskFlowerLogo';

gsap.registerPlugin(CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function AboutImages() {
  const { isPageLoaded } = usePage();

  useEffect(() => {
    if (!isPageLoaded) return;

    const container = document.querySelector(
      '.section__container'
    )! as HTMLDivElement;
    const figures = document.querySelectorAll('.about__images__visual');

    const height = container.offsetHeight;
    const parallax = [0.05, 0.1, 0.15, 0.2];

    figures.forEach((figure, index) => {
      const img = figure.querySelector('img');
      const svg = figure.querySelector('svg');

      gsap.to(figure, {
        y: (-height * parallax[index]) / 4,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      gsap.to([img, svg], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: 'fade-in',
        scrollTrigger: {
          trigger: figure,
          start: 'center bottom',
          end: 'bottom bottom',
        },
      });
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='about__images__container'>
        <figure className='about__images__visual'>
          <img
            src='/img/about-images-1.jpg'
            alt='about-img-1'
            className='about__images__img'
          />
          <MaskFlowerLogo />
        </figure>
        <figure className='about__images__visual'>
          <img
            src='/img/about-images-2.jpg'
            alt='about-img-2'
            className='about__images__img'
          />
        </figure>
        <figure className='about__images__visual'>
          <img
            src='/img/about-images-3.jpg'
            alt='about-img-3'
            className='about__images__img'
          />
        </figure>
        <figure className='about__images__visual'>
          <img
            src='/img/about-images-4.jpg'
            alt='about-img-4'
            className='about__images__img'
          />
          <MaskFlowerLogo />
        </figure>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 90px;
  pointer-events: auto;
  margin-top: 0;

  @media (min-width: 1024px) {
    margin-top: -3vw;
  }

  .about__images__container {
    padding: 0 var(--margin);
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .about__images__container {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }

  .about__images__visual {
    position: relative;
    width: var(--col3-g);
    z-index: 1;
    will-change: transform;

    &:nth-child(1) {
      height: calc(var(--col3-g) * 0.75);

      svg {
        right: calc(var(--gutter) * -1);
        bottom: -4px;

        path {
          fill: var(--turks) !important;
        }
      }
    }

    &:nth-child(2) {
      width: var(--col2-g);
      height: calc(var(--col2-g) * 0.89);
    }

    &:nth-child(3) {
      height: calc(var(--col3-g) * 0.7);
    }

    &:nth-child(4) {
      height: calc(var(--col3-g) * 0.65);

      svg {
        left: calc(var(--gutter) * -2);
        bottom: -15px;

        path {
          fill: var(--purple) !important;
        }
      }
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &:nth-child(even) {
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) {
    .about__images__visual {
      &:nth-child(1) {
        width: var(--col4-g);
        height: calc(var(--col4-g) * 0.75);
        margin-left: var(--col3);
        margin-right: var(--col1g);
        margin-bottom: 60px;

        svg {
          right: var(--col3);
          bottom: -40px;
        }
      }

      &:nth-child(2) {
        width: var(--col3-g);
        height: calc(var(--col3-g) * 0.89);
        margin-bottom: 120px;
        margin-top: 180px;
      }

      &:nth-child(3) {
        width: var(--col5-g);
        height: calc(var(--col5-g) * 0.7);
        margin-top: -140px;
        margin-right: var(--col1-g);
      }

      &:nth-child(4) {
        width: var(--col6-g);
        height: calc(var(--col6-g) * 0.65);

        svg {
          left: inherit;
          right: var(--col1g);
          bottom: -30px;
        }
      }
    }
  }

  .about__images__img {
    z-index: 1;
    position: relative;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: translateY(40px);
    opacity: 0;
    will-change: transform, opacity;
  }

  svg {
    position: absolute;
    width: 39px;
    z-index: 2;
    transform: translateY(40px);
    opacity: 0;
    will-change: transform, opacity;
  }

  @media (min-width: 1024px) {
    svg {
      width: 82px;
    }
  }
`;
