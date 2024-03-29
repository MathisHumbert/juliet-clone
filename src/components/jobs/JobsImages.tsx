import { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

import usePage from '../../context/PageContext';
import MaskFlowerLogo from '../shared/logo/MaskFlowerLogo';

export default function JobsImages() {
  const { isPageLoaded } = usePage();

  useEffect(() => {
    if (!isPageLoaded) return;

    const container = document.querySelector(
      '.section__container'
    )! as HTMLDivElement;
    const images = document.querySelectorAll('.job__images__img');
    const figures = document.querySelectorAll('.job__images__visual');

    const height = container.offsetHeight;
    const parallax = [0.05, 0.1, 0.15, 0.1, 0.12, 0.05];

    gsap.to(images, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'fade-in',
      delay: 0.6,
      stagger: 0.2,
    });

    gsap.to('.jobs__images__container svg', {
      opacity: 1,
      ease: 'fade-in',
      delay: 1.2,
      stagger: 0.6,
    });

    figures.forEach((figure, index) => {
      gsap.to(figure, {
        y: (-height * parallax[index]) / 4,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='jobs__images__container'>
        <figure className='job__images__visual'>
          <img src='/img/jobs-1.jpg' alt='jobs1' className='job__images__img' />
        </figure>
        <figure className='job__images__visual'>
          <img src='/img/jobs-2.jpg' alt='jobs2' className='job__images__img' />
          <MaskFlowerLogo />
        </figure>
        <figure className='job__images__visual'>
          <img src='/img/jobs-3.jpg' alt='jobs3' className='job__images__img' />
        </figure>
        <figure className='job__images__visual'>
          <img src='/img/jobs-4.jpg' alt='jobs4' className='job__images__img' />
        </figure>
        <figure className='job__images__visual'>
          <img src='/img/jobs-5.jpg' alt='jobs5' className='job__images__img' />{' '}
          <MaskFlowerLogo />
        </figure>
        <figure className='job__images__visual'>
          <img src='/img/jobs-6.jpg' alt='jobs6' className='job__images__img' />
        </figure>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 58.4vw;
  margin-bottom: 60px;
  margin-top: -40px;
  z-index: 1;
  pointer-events: auto;
  position: relative;
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: 768px) {
    height: var(--col6);
    margin-bottom: 180px;
    margin-top: -15vw;
  }

  .jobs__images__container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 var(--margin);
    min-height: 100%;
    overflow: hidden;
  }

  .job__images__visual {
    position: absolute;
    margin-bottom: 1rem;
    will-change: transform;

    img {
      position: relative;
      display: block;
      object-fit: cover;
      width: 100%;
      transform: translateY(40px);
      opacity: 0;
      will-change: transform, opacity;
    }

    &:nth-child(1) {
      width: 28.2vw;
      left: 0;
      z-index: 2;

      img {
        height: calc(28.2vw * 1.2);
      }
    }

    &:nth-child(2) {
      left: 19.2vw;
      top: 28.8vw;
      width: 16vw;

      img {
        height: calc(16vw * 1.2);
      }

      svg {
        bottom: -14px;
        right: -11px;

        path {
          fill: var(--turks) !important;
        }
      }
    }

    &:nth-child(3) {
      right: 19.7vw;
      top: 36.8vw;
      width: 36.8vw;

      img {
        height: calc(36.8vw * 0.59);
      }
    }

    &:nth-child(4) {
      right: 0;
      top: 21.9vw;
      width: 25vw;

      img {
        height: calc(25vw * 1.16);
      }
    }

    &:nth-child(5) {
      display: none;

      svg {
        bottom: -43px;
        right: -57px;

        path {
          fill: var(--orange) !important;
        }
      }
    }

    &:nth-child(6) {
      display: none;

      img {
        height: calc((var(--col4-g) - var(--gutter)) * 0.59);
      }
    }
  }

  @media (min-width: 768px) {
    .job__images__visual {
      &:nth-child(1) {
        width: calc(var(--col3-g) - var(--gutter));
        right: var(--col10g);
        left: inherit;
        z-index: 2;

        img {
          height: calc((var(--col3-g) - var(--gutter)) * 1.2);
        }
      }

      &:nth-child(2) {
        left: var(--col1-g);
        top: calc(var(--col3-g) - var(--gutter));
        width: calc(var(--col1g) + var(--gutter));

        img {
          height: calc((var(--col1g) + var(--gutter)) * 1.2);
        }

        svg {
          bottom: -43px;
          right: -37px;
        }
      }

      &:nth-child(3) {
        left: var(--col3);
        top: var(--col4);
        width: var(--col3g);

        img {
          height: calc(var(--col3g) * 0.59);
        }
      }

      &:nth-child(4) {
        left: var(--col6);
        top: calc(var(--col3-g) - var(--gutter));
        width: var(--col2g);

        img {
          height: calc(var(--col2g) * 1.16);
        }
      }

      &:nth-child(5) {
        left: var(--col9-g);
        top: calc(var(--col3-g) - var(--gutter));
        width: var(--col2);
        z-index: 2;
        display: block;

        img {
          height: calc(var(--col2) * 0.98);
        }

        svg {
          bottom: -43px;
          right: -57px;
        }
      }

      &:nth-child(6) {
        left: var(--col10g);
        top: var(--col1-g);
        width: calc(var(--col4-g) - var(--gutter));
        display: block;

        img {
          height: calc((var(--col4-g) - var(--gutter)) * 0.59);
        }
      }
    }
  }

  svg {
    position: absolute;
    width: 39px;
    opacity: 0;
    will-change: opacity;
  }

  @media (min-width: 768px) {
    svg {
      width: 82px;
    }
  }
`;
