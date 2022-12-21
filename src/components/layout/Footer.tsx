import { useEffect, useRef, MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { Player } from '@lottiefiles/react-lottie-player';

import FlowerLogo from '../shared/logo/FlowerLogo';
import { footerDynamicWords } from '../../utils/mockData';
import lightFooterLottie from '../../lottie/light-footer.json';
import darkFooterLottie from '../../lottie/dark-footer.json';

gsap.registerPlugin(CustomEase);

CustomEase.create('fade-in', '0.65, 0, 0.35, 1');

export default function Footer() {
  let [lottieSrc, setLottieSrc] = useState(lightFooterLottie);
  const footerRef = useRef<HTMLDivElement>(null);
  const dynamicContainerRef = useRef<HTMLSpanElement>(null);
  const dynamicTextRef = useRef<HTMLSpanElement>(null);
  const inLottieRef = useRef<Player | null>(null);
  const liLottieRef = useRef<Player | null>(null);

  useEffect(() => {
    setLottieSrc(
      footerRef.current?.classList.contains('light')
        ? lightFooterLottie
        : darkFooterLottie
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      onStart: () => {
        let name =
          footerDynamicWords[
            Math.ceil(Math.random() * footerDynamicWords.length - 1)
          ];
        dynamicTextRef.current!.innerHTML = name;

        gsap.to(dynamicContainerRef.current, {
          opacity: 1,
          width: dynamicTextRef.current!.offsetWidth,
          duration: 0.6,
          ease: 'fade-in',
        });
      },
      onRepeat: () => {
        gsap.to(dynamicContainerRef.current, {
          opacity: 0,
          width: '0px',
          duration: 0.6,
          ease: 'fade-in',
          onComplete: () => {
            let name =
              footerDynamicWords[
                Math.ceil(Math.random() * footerDynamicWords.length - 1)
              ];
            dynamicTextRef.current!.innerHTML = name;
          },
        });

        gsap.to(dynamicContainerRef.current, {
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          ease: 'fade-in',
          width: () => {
            return dynamicTextRef.current!.offsetWidth;
          },
        });
      },
    });

    tl.to(dynamicContainerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'fade-in',
    });

    dynamicContainerRef.current?.addEventListener('mouseenter', () =>
      tl.pause()
    );

    dynamicContainerRef.current?.addEventListener('mouseleave', () =>
      tl.play()
    );

    return () => {
      dynamicContainerRef.current?.removeEventListener('mouseenter', () =>
        tl.pause()
      );

      dynamicContainerRef.current?.removeEventListener('mouseleave', () =>
        tl.play()
      );
    };
  }, []);

  const onLinkEnter = (lottieRef: MutableRefObject<Player | null>) => {
    lottieRef.current?.setPlayerDirection(1);
    lottieRef.current?.play();
  };

  const onLinkLeave = (lottieRef: MutableRefObject<Player | null>) => {
    lottieRef.current?.setPlayerDirection(-1);
    lottieRef.current?.play();
  };

  return (
    <Wrapper className='footer' ref={footerRef}>
      <div className='footer__container'>
        <div className='footer__intro'>
          <h2 className='footer__intro__title'>
            Good Things{' '}
            <span>
              <FlowerLogo /> Happen
            </span>
          </h2>
          <h2 className='footer__intro__title'>
            <span>When You Say </span>
            <span className='footer__intro__title--dynamic'>
              “
              <span
                className='footer__dynamic__container'
                ref={dynamicContainerRef}
              >
                <span
                  className='footer__dynamic__text'
                  ref={dynamicTextRef}
                ></span>
              </span>
              ”
            </span>
          </h2>
        </div>
        <div className='footer__links'>
          <div className='footer__location'>
            <h3 className='footer__title'>Toronto</h3>
            <a
              href='https://www.google.com/maps/place/Juliet+Creative/@43.6628022,-79.3284228,16.23z/data=!4m5!3m4!1s0x89d4cb316cce3c63:0x5ddc36d93b914800!8m2!3d43.663973!4d-79.328101'
              target='_blank'
              className='footer__link'
            >
              1306 Queen St E, <br /> Toronto, ON M4L 1C4
            </a>
          </div>
          <div className='footer__location'>
            <h3 className='footer__title'>Los Angeles</h3>{' '}
            <a
              href='/https://www.google.com/maps/place/1926+E+Maple+Ave,+El+Segundo,+CA+90245,+USA/@33.9266641,-118.3943383,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b6b53a601559:0x5ad0d247c5fab4a5!8m2!3d33.9266641!4d-118.3921496'
              target='_blank'
              className='footer__link'
            >
              1926 E Maple Ave <br /> El Segundo, CA 90245
            </a>
          </div>
          <div className='footer__social'>
            <h3 className='footer__title'>Follow Us</h3>{' '}
            <a
              href='/https://www.instagram.com/julietcreative/'
              target='_blank'
              className='footer__link first'
              onMouseEnter={() => onLinkEnter(inLottieRef)}
              onMouseLeave={() => onLinkLeave(inLottieRef)}
            >
              In
              <Player
                src={lottieSrc}
                ref={inLottieRef}
                keepLastFrame={true}
                loop={false}
                className='footer__lottie'
              />
            </a>
            <a
              href='/https://www.linkedin.com/company/juliet-creative/'
              target='_blank'
              className='footer__link'
              onMouseEnter={() => onLinkEnter(liLottieRef)}
              onMouseLeave={() => onLinkLeave(liLottieRef)}
            >
              Li
              <Player
                src={lottieSrc}
                ref={liLottieRef}
                keepLastFrame={true}
                loop={false}
                className='footer__lottie'
              />
            </a>
          </div>
          <div className='footer__rights'>
            <a
              href='https://twitter.com/Mathis1Humbert'
              target='_blank'
              className='footer__link--sub'
            >
              Cloned by Mathis Humbert
            </a>
            <h6 className='footer__title--sub'>This is a clone site</h6>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  z-index: -1;

  &.light {
    background: var(--white);
    color: var(--black);
  }

  &.dark {
    background: var(--black);
    color: var(--white);
  }

  @media (min-width: 1024px) {
    position: sticky;
    bottom: 0;
  }

  .footer__container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 60px var(--margin);
  }

  @media (min-width: 1024px) {
    .footer__container {
      padding: 90px var(--margin) 45px;
    }
  }

  .footer__intro {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    .footer__intro {
      margin-bottom: 90px;
    }

    &.small .footer__intro {
      margin-bottom: 60px;
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    &.small .footer__intro,
    .footer__intro {
      margin-bottom: 120px;
    }
  }

  .footer__intro__title {
    font-size: 9.94vw;
    line-height: 110%;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    &.small .footer__intro__title {
      font-size: 4.4645vw;
      line-height: 103%;
    }
  }

  @media (min-width: 1024px) {
    .footer__intro__title {
      font-size: 6.67vw;
      line-height: 100%;
    }
  }

  .footer__intro__title:first-child {
    font-weight: 300;
    font-family: 'Apoc';

    span {
      display: inline-block;
    }

    svg {
      width: 7.8vw;

      path {
        fill: currentColor;
      }
    }
  }

  .footer__intro__title:last-child {
    font-size: 11vw;
  }

  @media (min-width: 768px) {
    .footer__intro__title:first-child svg {
      width: 5.3vw;
    }

    &.small .footer__intro__title:first-child svg {
      width: 3.5vw;
    }

    &.small .footer__intro__title:last-child {
      font-size: 4.4645vw;
      line-height: 103%;
    }
  }

  @media (min-width: 1024px) {
    .footer__intro__title:first-child svg {
      width: 5.3vw;
    }

    .footer__intro__title:last-child {
      font-size: 7.265vw;
    }
  }

  .footer__intro__title--dynamic {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    color: var(--orange);
    cursor: pointer;
    pointer-events: auto;
  }

  @media (min-width: 768px) {
    &.small .footer__intro__title--dynamic {
      width: fit-content;
    }
  }

  .footer__dynamic__container {
    display: block;
    overflow: hidden;
    position: relative;

    &:hover {
      &::after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: auto;
      right: 0;
      width: 0;
      display: block;
      border-bottom: 6px solid var(--orange);
      transition: width 0.6s ease-out;
    }
  }

  .footer__dynamic__text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 50px;
  }

  @media (min-width: 768px) {
    .footer__links {
      align-items: flex-end;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 60px;
    }
  }

  @media (min-width: 1120px) {
    .footer__links {
      flex-wrap: nowrap;
      row-gap: 0;
    }
  }

  .footer__title {
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    font-family: 'Apoc';
    text-transform: uppercase;
    margin-bottom: 25px;
    white-space: pre;
    text-align: center;
  }

  @media (min-width: 768px) {
    .footer__title {
      margin-bottom: 15px;
      text-align: inherit;
    }
  }

  @media (min-width: 1024px) {
    .footer__title {
      font-size: 35px;
      line-height: 42px;
    }
  }

  .footer__link {
    display: inline-block;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    pointer-events: auto;
    text-align: center;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--orange);
    }
  }

  @media (min-width: 768px) {
    .footer__link {
      text-align: inherit;
    }
  }

  @media (min-width: 1024px) {
    .footer__link {
      font-size: 21px;
      line-height: 21px;
    }
  }

  .footer__location {
    margin-right: 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    .footer__location {
      margin-right: var(--col1-g);
      text-align: inherit;
    }
  }

  .footer__social {
    margin-right: 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .footer__title {
      width: 100%;
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 25px;
    }

    .footer__link {
      text-transform: uppercase;
      text-align: center;
      font-size: 21px;
      line-height: 21px;
      position: relative;

      &:hover {
        color: currentColor;

        .footer__lottie {
          opacity: 1;
        }
      }

      &.first {
        margin-right: 30px;
      }
    }

    .footer__lottie {
      display: block;
      height: calc(100% + 4px);
      left: -10px;
      opacity: 0;
      position: absolute;
      top: -3px;
      transition: opacity 0.4s ease-out;
      width: calc(100% + 20px);
    }
  }

  @media (min-width: 768px) {
    .footer__social {
      margin-right: var(--col1-g);
      justify-content: inherit;

      .footer__title {
        margin-bottom: 31px;
        font-size: 20px;
        line-height: 25px;
      }

      .footer__link {
        text-align: inherit;
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    .footer__social {
      .footer__title {
        margin-bottom: 36px;
        font-size: 35px;
        line-height: 42px;
      }

      .footer__link {
        text-align: inherit;
        font-size: 21px;
        line-height: 21px;
      }
    }
  }

  .footer__rights {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    pointer-events: auto;

    a,
    h6 {
      font-size: 16px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 400;
      white-space: pre;
    }

    .footer__link--sub {
      position: relative;

      &:hover {
        &::after {
          left: 0;
          right: auto;
          width: 100%;
        }
      }

      &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: auto;
        right: 0;
        width: 0;
        border-bottom: 1px solid var(--black);
        transition: width 0.6s ease-out;
      }
    }
  }

  &.dark .footer__link--sub::after {
    border-color: var(--white);
  }

  @media (min-width: 768px) {
    .footer__rights {
      min-width: 100%;
      flex: 1;
      justify-content: flex-end;
      text-align: left;
    }
  }

  @media (min-width: 1120px) {
    .footer__rights {
      width: fit-content;
      min-width: inherit;
      flex: inherit;
    }
  }
`;
