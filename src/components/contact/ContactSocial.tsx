import { MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';
import { Player } from '@lottiefiles/react-lottie-player';

import SocialLottie from '../../lottie/dark-footer.json';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function HomeBlogSocial() {
  const blogSocialRef = useRef(null);
  const blogSocialMainTitleRef = useRef(null);
  const liLottieRef = useRef(null);
  const inLottieRef = useRef(null);

  useEffect(() => {
    const socialImages = document.querySelectorAll('.contact__social__img');

    const title = new SplitType(blogSocialMainTitleRef.current!, {
      types: 'chars',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.chars!, {
      types: 'chars',
      tagName: 'span',
    });

    const tl = gsap.timeline();

    tl.to(
      subtitle.chars,
      { y: 0, duration: 1, ease: 'text-in', stagger: 0.08 },
      0
    ).to(
      socialImages,
      {
        opacity: 1,
        top: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'fade-in',
      },
      1
    );

    ScrollTrigger.create({
      trigger: blogSocialRef.current,
      start: 'center bottom',
      animation: tl,
      onEnter: () => document.body.classList.add('dark'),
      onLeaveBack: () => document.body.classList.remove('dark'),
    });
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
    <Wrapper ref={blogSocialRef}>
      <div className='contact__social__container'>
        <h5 className='contact__social__title--sub'>
          <span>Follow us</span>
        </h5>
        <a
          href='https://www.instagram.com/julietcreative/'
          target='_blank'
          className='contact__social__title--main'
          ref={blogSocialMainTitleRef}
        >
          @julietcreative
        </a>
        <div className='contact__social__images'>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-3.jpg'
              alt='social-1'
              className='contact__social__img'
            />
          </figure>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-1.jpg'
              alt='social-2'
              className='contact__social__img'
            />
          </figure>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-7.jpg'
              alt='social-3'
              className='contact__social__img'
            />
          </figure>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-8.jpg'
              alt='social-4'
              className='contact__social__img'
            />
          </figure>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-5.jpg'
              alt='social-5'
              className='contact__social__img'
            />
          </figure>
          <figure className='contact__social__visual'>
            <img
              src='/img/social-9.jpg'
              alt='social-6'
              className='contact__social__img'
            />
          </figure>
        </div>
        <div className='contact__social__links'>
          <div className='lootie__container'>
            <a
              href='/https://www.instagram.com/julietcreative/'
              target='_blank'
              className='contact__social__link first'
              onMouseEnter={() => onLinkEnter(inLottieRef)}
              onMouseLeave={() => onLinkLeave(inLottieRef)}
            >
              In
              <Player
                src={SocialLottie}
                ref={inLottieRef}
                keepLastFrame={true}
                loop={false}
                className='contact__social__lottie'
              />
            </a>
            <a
              href='/https://www.linkedin.com/company/juliet-creative/'
              target='_blank'
              className='contact__social__link'
              onMouseEnter={() => onLinkEnter(liLottieRef)}
              onMouseLeave={() => onLinkLeave(liLottieRef)}
            >
              Li
              <Player
                src={SocialLottie}
                ref={liLottieRef}
                keepLastFrame={true}
                loop={false}
                className='contact__social__lottie'
              />
            </a>
          </div>
          <h6 className='contact__social__subtilte left'>
            <a href='https://twitter.com/Mathis1Humbert' target='_blank'>
              Cloned by mathis humbert
            </a>
          </h6>
          <h6 className='contact__social__subtilte right'>
            This is a clone site
          </h6>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  pointer-events: auto;

  .contact__social__container {
    height: 100vh;
    padding: 0 var(--margin);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    color: var(--black);
    transition: color 0.6s ease-out;
  }

  .contact__social__title--sub {
    margin-bottom: 30px;
    font-size: 21px;
    line-height: 21px;
    min-height: 21px;
    text-transform: uppercase;
    z-index: 4;

    span {
      display: inline-block;
      font-family: Aeonik;
      font-weight: 400;
    }
  }

  .contact__social__title--main {
    display: block;
    font-size: 7.95vw;
    font-family: 'Apoc';
    font-weight: 300;
    letter-spacing: -0.025em;
    line-height: 120%;
    text-transform: uppercase;
    z-index: 4;
  }

  .contact__social__title--main span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    vertical-align: bottom;
  }

  .contact__social__title--main span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(100%);
  }

  .contact__social__visual {
    position: absolute;
    margin-bottom: 1rem;
    transition: transform 5.5s cubic-bezier(0.07, 0.84, 0, 0.99);
  }

  .contact__social__visual {
    &:nth-child(1) {
      top: calc(50% - 4.76vw);
      left: 17.86vw;
      width: 6.6vw;
      height: 5.79vw;
    }

    &:nth-child(2) {
      top: calc(50% - 6.19vw);
      left: 24.64vw;
      width: 13.33vw;
      height: 11.73vw;
    }

    &:nth-child(3) {
      top: calc(50% - 12.02vw);
      left: 38.04vw;
      width: 13.27vw;
      height: 11.61vw;
      z-index: 3;
    }

    &:nth-child(4) {
      top: calc(50% - 4.76vw);
      left: 50.83vw;
      width: 13.57vw;
      height: 11.9vw;
      z-index: 2;
    }

    &:nth-child(5) {
      top: calc(50% - 9.89vw);
      left: 61.9vw;
      width: 13.51vw;
      height: 11.85vw;
    }

    &:nth-child(6) {
      top: calc(50% - 6.49vw);
      left: 76.73vw;
      width: 6.6vw;
      height: 5.79vw;
    }
  }

  .contact__social__img {
    display: block;
    width: 100%;
    height: inherit;
    object-fit: cover;
    opacity: 0;
    position: relative;
    top: 40px;
  }

  .contact__social__title--main:hover
    + .contact__social__images
    .contact__social__visual {
    &:nth-child(1) {
      transform: translate(2.68vw, -11.96vw);
    }

    &:nth-child(2) {
      transform: translate(-14.88vw, 12.56vw);
    }

    &:nth-child(3) {
      transform: translate(-3.69vw, -9.05vw);
    }

    &:nth-child(4) {
      transform: translate(-0.83vw, 14.94vw);
    }

    &:nth-child(5) {
      transform: translate(13.57vw, -8.04vw);
    }

    &:nth-child(6) {
      transform: translate(-1.31vw, 16.01vw);
    }
  }

  .contact__social__links {
    position: absolute;
    left: 0;
    bottom: 88px;
    width: 100%;
    padding: 0 var(--margin);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .contact__social__links {
      bottom: 60px;
      flex-direction: row;
      gap: 0;
    }
  }

  .contact__social__subtilte {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .contact__social__subtilte.left {
    order: 0;
    margin-right: 0;

    a {
      margin-right: 0;
      position: relative;
      display: inline-block;

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
        bottom: -4px;
        left: auto;
        right: 0;
        width: 0;
        display: block;
        border-bottom: 1px solid var(--white);
        transition: width 0.6s ease-out;
      }
    }
  }

  @media (min-width: 768px) {
    .contact__social__subtilte.left {
      order: -1;
      margin-right: 4.1vw;

      a {
        margin-right: 45px;
        position: relative;
        display: inline-block;
      }
    }
  }

  .contact__social__subtilte.right {
    flex: 1;
    text-align: right;
  }

  .contact__social__link {
    position: relative;
    display: inline-block;
    font-size: 21px;
    line-height: 21px;
    min-height: 21px;
    font-weight: 400;
    text-transform: uppercase;

    &:hover .contact__social__lottie {
      opacity: 1;
    }

    &.first {
      margin-right: 30px;
    }
  }

  @media (min-width: 768px) {
    .contact__social__link.first {
      margin-right: 45px;
    }
  }

  .contact__social__lottie {
    display: block;
    height: calc(100% + 4px);
    left: -10px;
    opacity: 0;
    position: absolute;
    top: -3px;
    transition: opacity 0.4s ease-out;
    width: calc(100% + 20px);
  }
`;
