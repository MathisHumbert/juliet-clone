import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import styled from 'styled-components';

import FlowerLogo from '../shared/logo/FlowerLogo';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export default function HomeHero() {
  const heroLogoMaskRef = useRef(null);
  const heroButtonRef = useRef(null);

  let isFlowerAnimating = false;

  useEffect(() => {
    const titles = document.querySelectorAll('.hero__title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          ease: 'cubic-text',
        },
        delay
      );
    });

    tl.to(
      heroLogoMaskRef.current,
      {
        scaleX: 0,
        ease: 'power1.out',
      },
      0.8
    ).to(
      heroButtonRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      1.2
    );
  }, []);

  const onFlowerLogoEnter = () => {
    const flowerLogoSvg = document.querySelector('.hero__flower');

    if (isFlowerAnimating) return;

    isFlowerAnimating = true;

    gsap.to(flowerLogoSvg, {
      rotateY: 360,
      duration: 3,
      ease: 'linear',
      onComplete: () => {
        isFlowerAnimating = false;
        gsap.set(flowerLogoSvg, { rotateY: 0 });
      },
    });
  };

  return (
    <Wrapper>
      <div className='hero__container'>
        <h1 className='hero__title'>
          <span className='hero__title--sub'>
            <span>You&nbsp;</span>
          </span>
          <span className='hero__title--sub' onMouseEnter={onFlowerLogoEnter}>
            <span>
              <FlowerLogo />
            </span>
          </span>
          <span className='hero__title--sub'>
            <span>&nbsp;Can</span>
          </span>
          <span className='hero__title--sub'>
            <span>&nbsp;Only</span>
          </span>
          <span className='hero__title--sub'>
            <span>Build&nbsp;</span>
          </span>
          <span className='hero__title--sub'>
            <span>Brands&nbsp;</span>
          </span>
        </h1>
        <h1 className='hero__title'>
          <span className='hero__title--sub'>
            <span>People&nbsp;</span>
          </span>
          <span className='hero__title--sub'>
            <span>Love</span>
          </span>
        </h1>
        <h1 className='hero__title'>
          <span className='hero__title--sub'>
            <span className='bold'>By Loving</span>
          </span>
          <span className='hero__title--sub'>
            <span>&nbsp;Your</span>
          </span>
        </h1>
        <h1 className='hero__title'>
          <span className='hero__title--sub'>
            <span>Audience</span>
          </span>
          <button className='hero__title--button' ref={heroButtonRef}>
            <span className='infinite__text__container'>
              <span className='infinite__text'>
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©{' '}
              </span>
              <span className='infinite__text'>
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
                Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              </span>
            </span>
          </button>
        </h1>
        <div className='hero__logo'>
          <div className='hero__logo__mask' ref={heroLogoMaskRef}></div>
          <img src='/icon/like-crazy.svg' alt='like-crazy' />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: var(--padding-top) 0 90px;

  @media (min-width: 1024px) {
    padding: 180px 0;
  }

  .hero__container {
    padding: 0 var(--margin);
    padding-bottom: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__title {
    font-family: 'Apoc';
    font-size: 14.8vw;
    line-height: 90%;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    position: relative;
  }

  @media (min-width: 1024px) {
    .hero__title {
      font-size: 8.667vw;
      line-height: 89%;

      &:nth-child(4) {
        text-align: left;
        padding-left: calc(21.19vw - var(--gutter));
        align-self: flex-start;
      }
    }
  }

  .hero__title--sub {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    vertical-align: bottom;
  }

  .hero__title--sub span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    display: inline-block;
    transform: translateY(100%);
    will-change: transform;

    &.bold {
      font-size: 16.38vw;
      line-height: 81%;
      font-family: Aeonik;
      font-weight: 500;
      color: var(--orange);
    }
  }

  .hero__title--sub svg {
    width: 11vw;
  }

  @media (min-width: 1024px) {
    .hero__title--sub svg {
      width: 6.9vw;
    }

    .hero__title--sub span.bold {
      font-size: 9.28vw;
      line-height: 82%;
    }
  }

  .hero__title--button {
    position: absolute;
    bottom: -34.2vw;
    left: calc(50% - 83px);
    width: 166px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-family: Aeonik;
    font-weight: 400;
    text-transform: uppercase;
    border: 1px solid var(--black);
    border-radius: 200px;
    overflow: hidden;
    margin-left: 40px;
    margin-right: -40px;
    opacity: 0;

    &:hover .infinite__text {
      animation-play-state: paused;
    }
  }

  @media (min-width: 1024px) {
    .hero__title--button {
      bottom: inherit;
      left: inherit;
      top: 50%;
      right: 16.37vw;
      width: 14.4vw;
      height: 40px;
      transform: translateY(-75%);
      line-height: 40px;
      font-size: 21px;
    }
  }

  .hero__logo {
    position: relative;
    transform: translateY(-0.5vw) rotate(4.24deg);
    overflow: hidden;
    width: fit-content;
    height: fit-content;
  }

  .hero__logo img {
    width: 92.8vw;
    height: 100%;
    object-fit: contain;
  }

  .hero__logo__mask {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--white);
    z-index: 10;
    width: 100%;
    height: 100%;
    transform: scaleX(100%);
    transform-origin: 100% 0%;
  }

  @media (min-width: 1024px) {
    .hero__logo img {
      width: 52.23vw;
    }

    .hero__logo__mask {
      width: 52.23vw;
    }
  }
`;
