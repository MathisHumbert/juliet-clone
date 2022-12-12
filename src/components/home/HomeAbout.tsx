import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import torontoLottie from '../../lottie/toronto.json';
import losAngelesLottie from '../../lottie/los-angeles.json';
import julietLottie from '../../lottie/juliet.json';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const homeAboutRef = useRef(null);
  const julietLottieRef = useRef<Player | null>(null);
  const torontoLottieRef = useRef<Player | null>(null);
  const losAngelesLottieRef = useRef<Player | null>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: homeAboutRef.current,
      start: 'center bottom',
      onEnter: () => document.body.classList.add('dark'),
      onLeaveBack: () => document.body.classList.remove('dark'),
    });
  }, []);

  return (
    <Wrapper ref={homeAboutRef}>
      <div className='home__about__container'>
        <h2 className='home__about__header'>
          <span>
            <span>About</span> Juliet
          </span>
        </h2>
        <h3 className='home__about__title'>
          <span className='home__about__title--text'>
            <span>Born</span>
          </span>
          <span className='home__about__title--text'>
            <span>In</span>
          </span>
          <span className='home__about__title--text'>
            <span>The</span>
          </span>
          <span className='home__about__title--text'>
            <span>Digital</span>
          </span>
          <span className='home__about__title--text'>
            <span>Age,</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='juliet__lottie__container'>
            <span className='home__about__title--text'>
              <span>Juliet</span>
            </span>
            <Player
              src={julietLottie}
              ref={julietLottieRef}
              keepLastFrame={true}
              autoplay={true}
              loop={false}
              className='juliet__lottie'
            />
          </span>
          <span className='home__about__title--text'>
            <span>Is </span>
          </span>
          <span className='home__about__title--text'>
            <span>An </span>
          </span>
          <span className='home__about__title--text'>
            <span>Independent</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--text'>
            <span>Creative</span>
          </span>
          <span className='home__about__title--text'>
            <span>Agency</span>
          </span>
          <span className='home__about__title--text'>
            <span>With</span>
          </span>
          <span className='home__about__title--text'>
            <span>Offices</span>
          </span>
          <span className='home__about__title--text'>
            <span>In</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--lottie'>
            <button className='toronto__lottie__button'>
              <span className='infinite__text__container'>
                <span className='infinite__text'>
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W{' '}
                </span>
                <span className='infinite__text'>
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W 43.6532° N, 79.3832° W 43.6532° N,
                  79.3832° W 43.6532° N, 79.3832° W 43.6532° N, 79.3832° W
                  43.6532° N, 79.3832° W{' '}
                </span>
              </span>
            </button>
            <span className='toronto__lottie__container'>
              <Player
                src={torontoLottie}
                ref={torontoLottieRef}
                keepLastFrame={true}
                loop={false}
                className='toronto__lottie'
              />
            </span>
          </span>
          <span className='home__about__title--text'>
            <span> And</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--lottie'>
            <button className='losangeles__lottie__button'>
              <span className='infinite__text__container'>
                <span className='infinite__text'>
                  434.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                </span>
                <span className='infinite__text'>
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                  34.0522° N, 118.2437° W 34.0522° N, 118.2437° W 34.0522° N,
                  118.2437° W 34.0522° N, 118.2437° W 34.0522° N, 118.2437° W
                </span>
              </span>
            </button>
            <span className='losangeles__lottie__container'>
              <Player
                src={losAngelesLottie}
                ref={losAngelesLottieRef}
                keepLastFrame={true}
                loop={false}
                className='losangeles__lottie'
              />
            </span>
          </span>
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 60px;
  text-transform: uppercase;
  color: var(--color);

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 240px;
  }

  .home__about__container {
    padding: 0 var(--margin);
    min-height: 100%;
    position: relative;
  }

  .home__about__header {
    position: relative;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    font-family: 'Apoc';
    display: flex;

    &::after {
      content: ' ';
      display: block;
      position: relative;
      top: 12px;
      width: 100%;
      height: 12px;
      margin-left: 11px;
      border-top: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
  }

  @media (min-width: 1024px) {
    .home__about__header {
      margin-bottom: 30px;
      font-size: 35px;
      line-height: 42px;

      &::after {
        top: 21px;
        width: 100%;
        height: 34px;
        margin-left: 40px;
      }
    }
  }

  .home__about__header span {
    white-space: pre;
  }

  .home__about__header span span {
    font-size: 22px;
    line-height: 22px;
    font-family: 'Aeonik';
  }

  @media (min-width: 1024px) {
    .home__about__header span span {
      font-size: 38px;
      line-height: 36px;
    }
  }

  .home__about__title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    &:nth-child(2) {
      & > span:first-child {
        margin-right: 17.33vw;
      }

      & > span:nth-child(2) {
        margin-right: 17.33vw;
      }
    }

    &:nth-child(3) {
      justify-content: initial;

      & > span:nth-child(2) {
        margin-right: 16vw;
      }

      & > span:last-child {
        margin-left: auto;
      }
    }

    &:nth-child(4) {
      justify-content: initial;

      & > span:first-child {
        margin-right: 0;
        margin-left: 29.3vw;
      }

      & > span:nth-child(2) {
        margin-right: 0;
      }

      & > span:nth-child(3) {
        margin-right: 0;
        margin-left: auto;
      }

      & > span:last-child {
        margin-left: auto;
      }
    }

    &:nth-child(5) {
      justify-content: initial;
      padding-left: 0;

      & > span:last-child {
        padding-left: 35.73vw;
      }
    }

    &:nth-child(6) {
      padding-left: 0;
    }
  }

  @media (min-width: 1024px) {
    .home__about__title {
      &:nth-child(2) {
        & > span:first-child {
          margin-right: 0;
        }

        & > span:nth-child(2) {
          margin-right: 0;
        }
      }

      &:nth-child(3) {
        justify-content: space-between;

        & > span:nth-child(2) {
          margin-right: 0;
        }

        & > span:last-child {
          margin-left: initial;
        }
      }

      &:nth-child(4) {
        & > span:first-child {
          margin-right: 19vw;
          margin-left: 0;
        }

        & > span:nth-child(2) {
          margin-right: 10vw;
        }

        & > span:nth-child(3) {
          margin-right: 20vw;
          margin-left: 0;
        }
      }

      &:nth-child(5) {
        padding-left: calc(22.62vw - var(--gutter));

        & > span:last-child {
          padding-left: 0;
        }
      }

      &:nth-child(6) {
        padding-left: calc(35.91vw - var(--gutter));
      }
    }
  }

  .home__about__title--text {
    position: relative;
    font-size: 9.94vw;
    line-height: 100%;
    font-family: 'Apoc';
    font-weight: 300;
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    vertical-align: bottom;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    .home__about__title--text {
      font-size: 6.67vw;
    }
  }

  .home__about__title--text span {
    white-space: pre;
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
  }

  .juliet__lottie__container {
    position: relative;
    display: inline-block;
  }

  .juliet__lottie__container {
    position: relative;
    margin-right: 6.13vw;
  }

  @media (min-width: 1024px) {
    .juliet__lottie__container {
      flex: 1;
      margin-right: 0;
    }
  }

  .juliet__lottie {
    position: absolute;
    top: 0;
    left: -3%;
    width: 111%;
    height: 113%;
    transform: translateY(-15%);
  }

  @media (min-width: 1024px) {
    .juliet__lottie {
      width: 72%;
      transform: translateY(-20%);
    }
  }

  .home__about__title--lottie {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    vertical-align: bottom;
    overflow: hidden;
  }

  .home__about__title--lottie button {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
    width: 29.3vw;
    font-size: 12px;
    height: 30px;
    line-height: 30px;

    display: inline-block;
    font-family: 'Aeonik';
    font-weight: 400;
    overflow: hidden;
    border-radius: 200px;

    span {
      margin-top: 0px;
    }
  }

  @media (min-width: 768px) {
    .home__about__title--lottie button {
      height: 40px;
      line-height: 40px;
    }
  }

  @media (min-width: 1024px) {
    .home__about__title--lottie button {
      top: 50%;
      width: 11.25vw;
      font-size: 21px;

      span {
        margin-top: 1px;
      }
    }
  }

  .toronto__lottie__container,
  .losangeles__lottie__container {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
  }

  .toronto__lottie__container {
    padding-left: 38.13vw;
  }

  .toronto__lottie {
    width: 51vw;
  }

  @media (min-width: 1024px) {
    .toronto__lottie__container {
      padding-left: 0;
    }

    .toronto__lottie {
      width: 33.7vw;
    }
  }

  .toronto__lottie__button {
    left: 2.93vw;
    border: 1px solid var(--orange);
    color: var(--orange);
  }

  @media (min-width: 1024px) {
    .toronto__lottie__button {
      left: calc(6.79vw - var(--gutter));
    }
  }

  .losangeles__lottie {
    width: 71vw;

    &::before {
      content: ' ';
      position: absolute;
      left: initial;
      right: 0;
      top: 50%;
      width: 14.6vw;
      border-top: 1px solid var(--black);
    }
  }

  @media (min-width: 1024px) {
    .losangeles__lottie {
      width: 46.75vw;

      &::before {
        left: 0;
        right: initial;
        top: 50%;
        width: 21.9vw;
      }
    }
  }

  .losangeles__lottie__button {
    right: calc(2.69vw - var(--gutter));
    border: 1px solid var(--purple);
    color: var(--purple);
    top: initial !important;
    bottom: -100%;
  }

  @media (min-width: 1024px) {
    .losangeles__lottie__button {
      top: 50% !important;
      bottom: initial;
    }
  }
`;
