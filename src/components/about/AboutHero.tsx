import { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';
import FlowerLogo from '../shared/logo/FlowerLogo';

gsap.registerPlugin(CustomEase);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function AboutHero() {
  const { isPageLoaded } = usePage();

  useEffect(() => {
    if (!isPageLoaded) return;
    const titles = document.querySelectorAll('.about__hero__title');
    const buttons = document.querySelectorAll('button');

    titles.forEach((title, index) => {
      const subTitle = title.querySelectorAll('span span');

      gsap.to(subTitle, {
        y: 0,
        delay: index * 0.08,
        duration: 1,
        ease: 'text-in',
      });
    });

    gsap.to(buttons, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.easeOut',
      delay: 0.6,
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='about__hero__container'>
        <h1 className='about__hero__title'>
          <span>
            <span>
              Most<div className='spacer'> </div>
            </span>
          </span>
          <span>
            <span>Advertising</span>
          </span>
        </h1>
        <h1 className='about__hero__title'>
          <div>
            <span>
              <span>Gets&nbsp;</span>
            </span>
            <span>
              <span>
                <FlowerLogo />
              </span>
            </span>
          </div>
          <span>
            <span>
              <div className='spacer'> </div>Ignored
            </span>
          </span>
        </h1>
        <h1 className='about__hero__title'>
          <span>
            <span>because</span>
          </span>
          <div className='strong purple'>
            <span>
              <span>
                <div className='spacer'> </div>Most
              </span>
            </span>
            <div>
              <button className='top__button'>
                <div className='looped__text'>
                  <div>Show Reel 2022©&nbsp;</div>
                  <div>Show Reel 2022©&nbsp;</div>
                  <div>Show Reel 2022©</div>
                </div>
              </button>
              <span>
                <span>Advertising</span>
              </span>
            </div>
          </div>
        </h1>
        <h1 className='about__hero__title'>
          <span className='strong orange'>
            <span>Ignores</span>
          </span>
        </h1>
        <h1 className='about__hero__title'>
          <button className='bottom__button'>
            <div className='looped__text'>
              <div>Show Reel 2022©&nbsp;</div>
              <div>Show Reel 2022©&nbsp;</div>
              <div>Show Reel 2022©&nbsp;</div>
              <div>Show Reel 2022©&nbsp;</div>
              <div>Show Reel 2022©</div>
            </div>
          </button>
          <span>
            <span>People</span>
          </span>
        </h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: var(--padding-top);
  margin-bottom: 60px;
  pointer-events: auto;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }

  .about__hero__container {
    padding: 0 var(--margin);
  }

  .about__hero__title {
    font-size: 14.14vw;
    line-height: 100%;
    text-align: center;
    font-family: 'Apoc';
    font-weight: 300;
    text-transform: uppercase;
    position: relative;

    .strong {
      font-size: 15.468vw;
      line-height: 86%;
      font-family: 'Aeonik';
      font-weight: 500;
    }

    .purple {
      color: var(--purple);
    }

    .orange {
      color: var(--orange);
    }

    div {
      display: inline;
    }
  }

  @media (min-width: 1024px) {
    .about__hero__title {
      font-size: 8.667vw;
      line-height: 89%;
      text-align: center;

      .strong {
        font-size: 9.28vw;
        line-height: 82%;
      }
    }
  }

  .about__hero__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .about__hero__title span span {
    display: block;
    padding-top: 24px;
    padding-bottom: 6px;
    white-space: pre;
    transform: translateY(100%);
    will-change: transform;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    .about__hero__title span span {
      padding-top: 26px;
    }
  }

  .about__hero__title:nth-child(3) > span:first-child {
    width: 100%;
    text-align: left;
    padding-left: 1.9vw;
  }

  .about__hero__title:nth-child(3) div > span:first-child {
    width: 100%;
    text-align: left;
    padding-left: 21.3vw;
  }

  .about__hero__title:nth-child(4) > span {
    width: 100%;
    text-align: right;
    padding-right: 5.8vw;
  }

  .about__hero__title:last-child > span {
    width: 100%;
    text-align: right;
    padding-right: 3.2vw;
  }

  @media (min-width: 1024px) {
    .about__hero__title:nth-child(3) > span:first-child,
    .about__hero__title:nth-child(3) div > span:first-child {
      width: fit-content;
      text-align: inherit;
      padding-left: 0;
    }

    .about__hero__title:nth-child(3) div > span:last-child {
      width: 100%;
      padding-left: 22.96vw;
      text-align: center;
    }

    .about__hero__title:nth-child(3) {
      padding-left: 9.4vw;
      text-align: left;
    }

    .about__hero__title:nth-child(4) > span {
      width: 100%;
      text-align: left;
      padding-right: 0;
      padding-left: 22.98vw;
    }

    .about__hero__title:last-child > span {
      padding-right: 18.3vw;
    }
  }

  .about__hero__title svg {
    width: 11vw;
    transform: translateY(5%);
  }

  @media (min-width: 1024px) {
    .about__hero__title svg {
      position: relative;
      width: 6.9vw;
      top: 0.1vw;
      transform: translateY(0);
    }
  }

  .about__hero__title button {
    position: absolute;
    transform: translate(-20%, -50%);
    border: 1px solid var(--black);
    border-radius: 200px;
    text-transform: uppercase;
    font-family: Aeonik;
    font-weight: 400;
    z-index: 2;
    overflow: hidden;
    color: var(--black);
    opacity: 0;
    will-change: transform, opacity;

    .looped__text div {
      margin-top: 3px;
      display: inline-block;
    }

    &:hover .looped__text div {
      animation-play-state: paused;
    }
  }

  .top__button {
    display: none;
    top: 75%;
    left: 18.26vw;
    width: 14.4vw;
    height: 40px;
    line-height: 40px;
    font-size: 21px;
  }

  .bottom__button {
    display: inline-block;
    top: 50%;
    left: 8.8vw;
    width: 29.87vw;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    .top__button {
      display: inline-block;
    }

    .bottom__button {
      display: none;
    }
  }

  .spacer {
    display: none;
  }

  @media (min-width: 1024px) {
    .spacer {
      display: inline-block;
      opacity: 1;
    }
  }
`;
