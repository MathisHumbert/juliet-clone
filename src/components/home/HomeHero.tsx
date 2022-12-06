import styled from 'styled-components';
import FlowerLogo from '../shared/FlowerLogo';

export default function HomeHero() {
  return (
    <Wrapper>
      <div className='hero__container'>
        <h1 className='hero__title'>
          <span className='hero__title--sub'>
            <span>You&nbsp;</span>
          </span>
          <span className='hero__title--sub'>
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
          <button className='hero__title--button'>
            <span>
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
              Show Reel 2022© Show Reel 2022© Show Reel 2022© Show Reel 2022©
            </span>
          </button>
        </h1>
        <div className='hero__logo'>
          <div className='hero__logo__mask'></div>
          <img src='/icon/like-crazy.svg' alt='' />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 180px 0;

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
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    white-space: pre;
    font-family: Aeonik;
    font-weight: 400;
    text-transform: uppercase;
    border: 1px solid var(--black);
    border-radius: 200px;
    overflow: hidden;

    span {
      display: inline-block;
      animation: 100s linear -40s infinite reverse infinitButton;
    }
  }

  @media (min-width: 1024px) {
    .hero__title--button {
      bottom: inherit;
      left: inherit;
      top: 50%;
      right: 16.37vw;
      width: 14.4vw;
      transform: translateY(-75%);
      font-size: 21px;

      span {
        margin-top: 2px;
      }
    }
  }

  .hero__logo {
    position: relative;
    transform: translateY(-0.5vw) rotate(4.24deg);
  }

  img {
    width: 92.8vw;
    height: 100%;
  }

  .hero__logo__mask {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--white);
    z-index: 10;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: 100% 0%;
  }

  @media (min-width: 1024px) {
    img {
      width: 52.23vw;
    }

    .hero__logo__mask {
      width: 52.23vw;
    }
  }

  @keyframes infinitButton {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;
