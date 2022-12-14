import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';

import torontoLottie from '../../lottie/toronto.json';
import losAngelesLottie from '../../lottie/los-angeles.json';
import julietLottie from '../../lottie/juliet.json';
import HomeAboutImage from './HomeAboutImage';

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('animate-in', '0.25, 1, 0.5, 1');

export default function HomeAbout() {
  const homeAboutRef = useRef(null);
  const homeAboutHeaderRef = useRef(null);
  const julietLottieRef = useRef<Player | null>(null);
  const torontoLottieRef = useRef<Player | null>(null);
  const losAngelesLottieRef = useRef<Player | null>(null);

  useEffect(() => {
    const homeAboutTitle = document.querySelectorAll('.animate--in');
    const homeAboutButton = document.querySelectorAll('.fade--in');

    ScrollTrigger.create({
      trigger: homeAboutRef.current,
      start: 'center bottom',
      end: 'bottom bottom',
      markers: true,
      onEnter: () => {
        console.log('enter');
        document.body.classList.add('dark');
      },
      onLeaveBack: () => {
        console.log('leave');
        document.body.classList.remove('dark');
      },
    });

    const tl = gsap.timeline();

    tl.fromTo(
      homeAboutHeaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'fade-in' }
    )
      .fromTo(
        homeAboutTitle,
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.08, ease: 'animate-in' },
        0
      )
      .add(() => {
        julietLottieRef.current?.play();
        torontoLottieRef.current?.play();
        losAngelesLottieRef.current?.play();
      })
      .fromTo(
        homeAboutButton,
        { xPercent: 20, yPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          yPercent: -50,
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
        },
        1.3
      );

    ScrollTrigger.create({
      trigger: homeAboutRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      animation: tl,
    });
  }, []);

  const onEnter = (className: string) => {
    const torontoImg = document.querySelector(className);

    gsap.to(torontoImg, { opacity: 1 });
  };

  const onLeave = (className: string) => {
    const torontoImg = document.querySelector(className);

    gsap.to(torontoImg, { opacity: 0 });
  };

  return (
    <Wrapper ref={homeAboutRef}>
      <div className='home__about__container'>
        <h2 className='home__about__header' ref={homeAboutHeaderRef}>
          <span>
            <span>About</span> Juliet
          </span>
        </h2>
        <h3 className='home__about__title'>
          <span className='home__about__title--text'>
            <span className='animate--in'>Born</span>
          </span>
          <span className='home__about__title--text'>
            <span className='animate--in'>In</span>
          </span>
          <span className='home__about__title--text'>
            <span className='animate--in'>The</span>
          </span>
          <span className='home__about__title--text'>
            <span className='animate--in'>Digital</span>
          </span>
          <span className='home__about__title--text'>
            <span className='animate--in'>Age,</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='juliet__lottie__container'>
            <span className='home__about__title--text'>
              <span className='animate--in'>Juliet</span>
            </span>
            <Player
              src={julietLottie}
              ref={julietLottieRef}
              keepLastFrame={true}
              loop={false}
              className='juliet__lottie'
            />
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>Is </span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>An </span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>Independent</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>Creative</span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>Agency</span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>With</span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>Offices</span>
          </span>
          <span className='home__about__title--text animate--in'>
            <span className='animate--in'>In</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--lottie'>
            <button
              className='toronto__lottie__button fade--in'
              onMouseEnter={() => onEnter('.toronto__img')}
              onMouseLeave={() => onLeave('.toronto__img')}
            >
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
            <span
              className='toronto__lottie__container'
              onMouseEnter={() => onEnter('.toronto__img')}
              onMouseLeave={() => onLeave('.toronto__img')}
            >
              <Player
                src={torontoLottie}
                ref={torontoLottieRef}
                keepLastFrame={true}
                loop={false}
                className='toronto__lottie animate--in'
              />
            </span>
          </span>
          <span className='home__about__title--text'>
            <span className='animate--in'> And</span>
          </span>
        </h3>
        <h3 className='home__about__title'>
          <span className='home__about__title--lottie'>
            <button
              className='losangeles__lottie__button fade--in'
              onMouseEnter={() => onEnter('.losangeles__img')}
              onMouseLeave={() => onLeave('.losangeles__img')}
            >
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
            <span
              className='losangeles__lottie__container'
              onMouseEnter={() => onEnter('.losangeles__img')}
              onMouseLeave={() => onLeave('.losangeles__img')}
            >
              <Player
                src={losAngelesLottie}
                ref={losAngelesLottieRef}
                keepLastFrame={true}
                loop={false}
                className='losangeles__lottie animate--in'
              />
            </span>
          </span>
        </h3>
      </div>
      <HomeAboutImage />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 60px;
  text-transform: uppercase;
  color: var(--color);
  position: relative;
  z-index: 4;

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

  .losangeles__lottie__container::before {
    content: ' ';
    position: absolute;
    left: initial;
    right: 0;
    top: 50%;
    width: 14.6vw;
    border-top: 1px solid var(--black);
  }

  .losangeles__lottie {
    width: 71vw;
  }

  @media (min-width: 1024px) {
    .losangeles__lottie__container::before {
      left: 0;
      right: initial;
      top: 50%;
      width: 21.9vw;
    }

    .losangeles__lottie {
      width: 46.75vw;
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
