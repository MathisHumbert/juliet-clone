import React, { useRef } from 'react';
import styled from 'styled-components';
import { links } from '../../utils/mockData';

export default function MenuHeader() {
  const menuRef = useRef<HTMLElement>(null);

  const onCloseClick = () => {
    menuRef.current?.classList.remove('menu--open');
  };

  return (
    // @ts-ignore
    <Wrapper className='menu menu--open' ref={menuRef}>
      <div className='menu__wrapper'>
        <button className='menu__button__close' onClick={onCloseClick}>
          <p>close</p>
          <svg
            viewBox='0 0 31 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke='#F5F4F5'
              stroke-width='2.571'
              d='M22.895 7.61 8.352 22.153M23.014 21.823 8.47 7.28'
            />
          </svg>
        </button>
        <nav className='menu__nav'>
          <ul className='menu__nav__container'>
            {links.map((link) => (
              <li className='menu__nav__item' key={link.id}>
                <a href='/' className='menu__nav__link'>
                  <div className='menu__nav__title'>
                    <span className='menu__nav__title--sub'>0{link.id}</span>
                    <span className='menu__nav__title--main'>{link.text}</span>
                  </div>
                  <div className='menu__nav__infinite'>
                    <p>{link.infiniteText}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='menu__video'>
          <button className='menu__video__button'></button>{' '}
          <iframe
            id='reel-video'
            src='https://player.vimeo.com/video/683943644?autoplay=1&background=1&title=0&byline=0&portrait=0'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <img
        src='/icon/background.svg'
        alt='background'
        className='menu__background'
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--vh100);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  background: var(--purple);

  &.menu--open {
    opacity: 1;
    pointer-events: auto;
  }

  .menu__wrapper {
    z-index: 3;
    width: 100%;
    height: var(--vh100);
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
    object-fit: cover;
    z-index: 2;
  }

  .menu__button__close {
    position: absolute;
    top: 59px;
    left: var(--margin);
    height: 37px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--white);
    border-radius: 1000px;

    &:hover svg {
      animation: 1s cubic-bezier(0.76, 0, 0.24, 1) forwards rotateSvg;
    }

    svg {
      width: 16px;
      height: 16px;
    }

    p {
      margin-top: 6px;
      font-size: 24px;
      text-transform: uppercase;
      color: var(--white);
    }
  }

  .menu__video {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 83px;
    height: 86px;
    mask-image: url('/icon/icon_flower.svg');
    mask-position: center;
    mask-repeat: no-repeat;

    iframe {
      height: 100%;
      left: 50%;
      pointer-events: none;
      position: absolute;
      width: calc(83px * (1 / 0.5625));
      transform: translateX(-50%);
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

  .menu__nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--white);
  }

  .menu__nav__item {
    list-style-type: none;

    &:nth-child(1) .menu__nav__title {
      margin-left: 31.73vw;
    }

    &:nth-child(2) .menu__nav__title {
      margin-left: 40.71vw;
    }

    &:nth-child(3) .menu__nav__title {
      margin-left: 35.43vw;
    }

    &:nth-child(4) .menu__nav__title {
      margin-left: 40.71vw;
    }

    &:nth-child(5) .menu__nav__title {
      margin-left: 31.73vw;
    }

    &:nth-child(6) .menu__nav__title {
      margin-left: 24.94vw;
    }

    &:nth-child(odd) .menu__nav__title--sub {
      left: -48px;
    }

    &:nth-child(even) .menu__nav__title--sub {
      right: -48px;
    }
  }

  .menu__nav__link {
    pointer-events: none;
    position: relative;
  }

  .menu__nav__title {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 300;
    position: relative;
    padding-top: 22px;
    padding-bottom: 6px;
    margin-top: -22px;
    margin-bottom: -6px;
    pointer-events: auto;

    &:hover {
      opacity: 0;
    }
  }

  .menu__nav__title--main {
    font-size: 6.191vw;
    line-height: 106.5%;
    font-family: Apoc;
  }

  .menu__nav__title--sub {
    position: absolute;
    top: calc(1.4vw + 22px);
    font-size: 18px;
    pointer-events: none;
  }

  .menu__nav__infinite {
    position: absolute;
    top: 22px;
    display: flex;
    opacity: 0;
    text-transform: uppercase;
    font-family: Aeonik;
    animation: 270s linear infinite reverse infiniteText;
    animation-play-state: paused;

    p {
      font-size: 6.191vw;
      line-height: 106.5%;
      white-space: pre;
    }
  }

  .menu__nav__title:hover + .menu__nav__infinite {
    opacity: 1;
    animation-play-state: running;
  }

  @keyframes rotateSvg {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes infiniteText {
    0% {
      -webkit-transform: translate3d(-200%, 0, 0);
      transform: translate3d(-200%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(00%, 0, 0);
      transform: translate3d(00%, 0, 0);
    }
  }
`;
