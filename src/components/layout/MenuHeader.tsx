import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

import usePage from '../../context/PageContext';
import { links } from '../../utils/mockData';
import menuBackgroundLottie from '../../lottie/menu-background.json';
import MenuHeaderItem from './MenuHeaderItem';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic', '0.76, 0, 0.24, 1');

const MenuHeader = React.forwardRef(
  (props, ref: React.ForwardedRef<Player | null>) => {
    const { lenis } = usePage();
    const menuRef = useRef<HTMLElement>(null);
    const menuBackgroundRef = useRef<HTMLImageElement>(null);
    const menuButtonCloseRef = useRef<HTMLButtonElement>(null);
    const menuVideoRef = useRef<HTMLDivElement>(null);
    const menuNavRef = useRef<HTMLElement>(null);

    const onCloseClick = () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'cubic' },
        onStart: () => {
          // @ts-ignore
          ref?.current.pause();
        },
        onComplete: () => {
          menuRef?.current?.classList.remove('menu--open');
          lenis?.start();
        },
      });

      tl.to(
        [
          menuBackgroundRef?.current,
          menuButtonCloseRef?.current,
          menuVideoRef?.current,
        ],
        {
          opacity: 0,
          duration: 1,
        }
      )
        .to(menuRef?.current, { background: 'transparent' }, 0)
        .to(menuNavRef?.current, { opacity: 0 }, 0);
    };

    return (
      // @ts-ignore
      <Wrapper className='menu' ref={menuRef}>
        <div className='menu__wrapper'>
          <button
            className='menu__button__close'
            onClick={onCloseClick}
            ref={menuButtonCloseRef}
          >
            <p>close</p>
            <svg
              viewBox='0 0 31 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke='#F5F4F5'
                strokeWidth='2.571'
                d='M22.895 7.61 8.352 22.153M23.014 21.823 8.47 7.28'
              />
            </svg>
          </button>
          <nav className='menu__nav' ref={menuNavRef}>
            <ul className='menu__nav__container'>
              {links.map((link) => (
                <MenuHeaderItem key={link.id} {...link} />
              ))}
            </ul>
          </nav>
          <div className='menu__video' ref={menuVideoRef}>
            <button className='menu__video__button'></button>{' '}
            <iframe
              id='reel-video'
              src='https://player.vimeo.com/video/683943644?autoplay=1&background=1&title=0&byline=0&portrait=0'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
            ></iframe>
          </div>
        </div>
        <div className='menu__background' ref={menuBackgroundRef}>
          <Player
            src={menuBackgroundLottie}
            ref={ref}
            loop={true}
            className='menu__background__lootie'
          />
        </div>
      </Wrapper>
    );
  }
);
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  will-change: background;

  &.menu--open {
    opacity: 1;
    pointer-events: auto;

    .menu__nav__title {
      pointer-events: auto;
    }

    .menu__button__close {
      pointer-events: auto;
    }

    .menu__video {
      pointer-events: auto;
    }
  }

  .menu__wrapper {
    z-index: 3;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    will-change: opacity;
  }

  .menu__background__lootie {
    width: 400%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    .menu__background__lootie {
      width: 200%;
      height: 100%;
    }
  }

  .menu__nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--white);
    will-change: opacity;
  }

  .menu__button__close {
    position: absolute;
    top: 22px;
    left: 8px;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--white);
    border-radius: 1000px;
    pointer-events: none;
    will-change: opacity;

    &:hover svg {
      animation: 1s cubic-bezier(0.76, 0, 0.24, 1) forwards rotateSvg;
    }

    svg {
      width: 14px;
      height: 14px;
    }

    p {
      margin-top: 2px;
      font-size: 16px;
      text-transform: uppercase;
      color: var(--white);
    }
  }

  @media (min-width: 900px) {
    .menu__button__close {
      left: 30px;
    }
  }

  @media (min-width: 1024px) {
    .menu__button__close {
      top: 59px;
      height: 37px;

      svg {
        width: 16px;
        height: 16px;
      }

      p {
        margin-top: 6px;
        font-size: 24px;
      }
    }
  }

  .menu__video {
    position: absolute;
    bottom: 30px;
    right: 15px;
    width: 49px;
    height: 51px;
    mask-image: url('/icon/shape-flower.svg');
    mask-position: center;
    mask-repeat: no-repeat;
    pointer-events: none;
    will-change: opacity;

    iframe {
      height: 100%;
      left: 50%;
      pointer-events: none;
      position: absolute;
      width: calc(83px * (1 / 0.5625));
      transform: translateX(-50%);
    }
  }

  @media (min-width: 1024px) {
    .menu__video {
      bottom: 40px;
      right: 40px;
      width: 83px;
      height: 86px;
    }
  }

  .menu__video__button {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: var(--white);
    opacity: 0;
    padding: 0 10px;
  }

  @keyframes rotateSvg {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default MenuHeader;
