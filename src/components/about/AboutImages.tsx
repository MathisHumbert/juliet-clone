import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import usePage from '../../context/PageContext';
import MaskFlowerLogo from '../shared/logo/MaskFlowerLogo';

export default function AboutImages() {
  // const { isPageLoaded } = usePage();

  // useEffect(() => {
  //   if (!isPageLoaded) return;

  //   const container = document.querySelector(
  //     '.section__container'
  //   )! as HTMLDivElement;
  //   const images = document.querySelectorAll('.about__images__img');
  //   const figures = document.querySelectorAll('.about__images__visual');

  //   const height = container.offsetHeight;
  //   const parallax = [0.05, 0.1, 0.15, 0.1, 0.12, 0.05];

  //   gsap.to(images, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.8,
  //     ease: 'fade-in',
  //     delay: 0.6,
  //     stagger: 0.2,
  //   });

  //   gsap.to('.jobs__images__container svg', {
  //     opacity: 1,
  //     ease: 'fade-in',
  //     delay: 1.2,
  //     stagger: 0.6,
  //   });

  //   figures.forEach((figure, index) => {
  //     gsap.to(figure, {
  //       y: (-height * parallax[index]) / 4,
  //       scrollTrigger: {
  //         trigger: container,
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: 1,
  //       },
  //     });
  //   });
  // }, [isPageLoaded]);

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

  .about__images__container {
    padding: 0 var(--margin);
    display: flex;
    flex-direction: column;
  }

  .about__images__visual {
    width: var(--col3-g);

    &:nth-child(1) {
      height: calc(var(--col3-g) * 0.75);
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
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &:nth-child(even) {
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) {
  }

  .about__images__img {
    position: relative;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* transform: translateY(40px);
    opacity: 0;
    will-change: transform, opacity; */
  }
`;
