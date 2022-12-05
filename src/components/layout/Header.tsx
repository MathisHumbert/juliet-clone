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

  return (
    <Wrapper>
      <div className='header__wrapper'>
        <div className='header__container'>
          <button className='header__menu'>
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
    padding: 50px 0;
    margin: 0 var(--margin);
  }

  .header__logo svg {
    height: 58px;
  }

  .header__menu,
  .header__contact {
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 32px;
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
