import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import MainLogo from '../shared/MainLogo';
import MenuHeader from './MenuHeader';

export default function Header() {
  const mainLogoRef = useRef<HTMLAnchorElement>(null);

  const onMainLogoEnter = () => {
    const color = mainLogoRef.current?.getAttribute('data-color');
    const mainLogoSvg = mainLogoRef.current?.firstChild?.firstChild;

    const nextColor =
      color === '#a6e2e3'
        ? '#8566f6'
        : color === '#8566f6'
        ? '#ed7c50'
        : '#a6e2e3';

    mainLogoRef.current?.setAttribute('data-color', nextColor);
    gsap.to(mainLogoSvg!, { fill: color!, duration: 0.2, ease: 'power1.out' });
  };

  const onMainLogoLeave = () => {
    const mainLogoSvg = mainLogoRef.current?.firstChild?.firstChild;

    gsap.to(mainLogoSvg!, {
      fill: '#282829',
      duration: 0.2,
      ease: 'power1.out',
    });
  };

  const onOpenClick = () => {
    const headerMenu = document.querySelector('.menu')!;
    const headerMenuBackground = document.querySelector('.menu__background');
    const headerMenuCloseButton = document.querySelector(
      '.menu__button__close'
    );
    const headerMenuTitles = document.querySelectorAll('.menu__nav__title');
    const headerMenuVideo = document.querySelector('.menu__video');
    const headerMenuNav = document.querySelector('.menu__nav');

    const tl = gsap.timeline({
      onStart: () => {
        headerMenu.classList.add('menu--open');
        gsap.set([headerMenuBackground, headerMenuCloseButton], { opacity: 0 });
        gsap.set(headerMenuTitles, { yPercent: -100 });
        gsap.set(headerMenuNav, { opacity: 1 });
      },
    });

    tl.to(headerMenuBackground, {
      opacity: 1,
      duration: 1,
    })
      .to(
        headerMenu,
        { backgroundColor: '#8566f6', opacity: 1, duration: 1 },
        0
      )
      .to(
        [headerMenuCloseButton, headerMenuVideo],
        { opacity: 1, duration: 1 },
        0.6
      )
      .to(headerMenuTitles, { yPercent: 0, duration: 1, stagger: 0.08 }, 0.4);
  };

  return (
    <Wrapper>
      <div className='header__wrapper'>
        <div className='header__container'>
          <button className='header__menu' onClick={onOpenClick}>
            <span>Menu</span>
            <span>Menu</span>
          </button>
          <a
            className='header__logo'
            data-color='#a6e2e3'
            ref={mainLogoRef}
            onMouseEnter={onMainLogoEnter}
            onMouseLeave={onMainLogoLeave}
          >
            <MainLogo />
          </a>
          <a className='header__contact'>
            <span>Contact</span>
            <span>Contact</span>
          </a>
        </div>
      </div>
      <MenuHeader />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .header__wrapper {
    background: none;
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin: 0 var(--margin);
  }

  @media (min-width: 1024px) {
    .header__container {
      padding: 50px 0;
    }
  }

  .header__logo svg {
    height: 32px;
  }

  @media (min-width: 1024px) {
    .header__logo svg {
      height: 58px;
    }
  }

  .header__menu,
  .header__contact {
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    .header__menu,
    .header__contact {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .header__menu span,
  .header__contact span {
    display: inline-block;
    transition: transform 0.4s ease-out;

    &:last-child {
      position: absolute;
      left: 0;
      transform: translateY(110%) rotate(10deg);
    }
  }

  .header__menu:hover span,
  .header__contact:hover span {
    &:first-child {
      transform: translateY(-110%);
    }
    &:last-child {
      transform: translateY(0%);
    }
  }
`;
