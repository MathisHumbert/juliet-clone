import { useRef, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import MainLogo from '../shared/logo/MainLogo';
import MenuHeader from './MenuHeader';
import { CustomEase } from 'gsap/all';
import { Player } from '@lottiefiles/react-lottie-player';
import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');
CustomEase.create('cubic-opacity', '0.76, 0, 0.24, 1');

export default function Header() {
  // const { lenis } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const mainLogoRef = useRef<HTMLAnchorElement>(null);
  const menuBackgroundLottieRef = useRef<Player | null>(null);

  // lenis?.on(
  //   'scroll',
  //   ({ scroll, direction }: { scroll: number; direction: number }) => {
  //     if (direction === 1 && scroll > 160 && !scrolled) {
  //       document.body.classList.add('scrolled');
  //       headerRef.current?.classList.add('small');

  //       setScrolled(true);
  //     }

  //     if (direction === -1 && scroll > 160 && scrolled) {
  //       document.body.classList.remove('scrolled');
  //       setScrolled(false);
  //     }

  //     if (direction === -1 && scroll < 160 && scrolled) {
  //       headerRef.current?.classList.remove('small');
  //     }
  //   }
  // );

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
      defaults: { duration: 1 },
      onStart: () => {
        headerMenu.classList.add('menu--open');
        gsap.set([headerMenuBackground, headerMenuCloseButton], { opacity: 0 });
        gsap.set(headerMenuTitles, { yPercent: -100 });
        gsap.set(headerMenuNav, { opacity: 1 });
        menuBackgroundLottieRef.current!.play();
        // lenis?.stop();
      },
    });

    tl.to(headerMenuBackground, {
      opacity: 1,
    })
      .to(
        headerMenu,
        {
          backgroundColor: '#8566f6',
          opacity: 1,
          ease: 'cubic-opacity',
        },
        0
      )
      .to(
        [headerMenuCloseButton, headerMenuVideo],
        { opacity: 1, ease: 'cubic-opacity' },
        0.6
      )
      .to(
        headerMenuTitles,
        { yPercent: 0, stagger: 0.08, ease: 'cubic-text' },
        0.4
      );
  };

  return (
    <Wrapper ref={headerRef}>
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
      <MenuHeader ref={menuBackgroundLottieRef} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
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
    will-change: transform;
    transition: transform 0.4s ease-out, background 0.4s ease-out,
      padding 0.4s ease-out;
  }

  body.scrolled .header__container {
    transform: translateY(-100%);
  }

  body.small .header__container {
    background: var(--white);
  }

  @media (min-width: 1024px) {
    .header__container {
      padding: 50px 0;
    }

    body.small .header__container {
      padding: 12px 0;
      background: var(--white);
    }
  }

  .header__logo svg {
    height: 32px;
    transition: height 0.4s ease-out;
  }

  @media (min-width: 1024px) {
    .header__logo svg {
      height: 58px;
    }

    body.small .header__logo svg {
      height: 38px;
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
