import React from 'react';
import styled from 'styled-components';
import Logo from '../shared/Logo';
export default function Header() {
  return (
    <Wrapper>
      <div className='header__wrapper'>
        <div className='header__container'>
          <button className='header__menu'>
            <span>Menu</span>
            <span>Menu</span>
          </button>
          <a className='header__logo'>
            <Logo />
          </a>
          <a className='header__contact'>
            <span>Contact</span>
            <span>Contact</span>
          </a>
        </div>
      </div>
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
