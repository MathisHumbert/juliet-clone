import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import FlowerLogo from '../shared/logo/FlowerLogo';

export default function HomeFooter() {
  const dynamicContainerRef = useRef<HTMLSpanElement>(null);
  const dynamicTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(dynamicContainerRef.current, {
      width: dynamicTextRef.current?.getBoundingClientRect().width,
    });
  }, []);

  return (
    <Wrapper className='home__footer'>
      <div className='home__footer__container'>
        <div className='home__footer__intro'>
          <h2 className='home__footer__intro__title'>
            Good Things{' '}
            <span>
              <FlowerLogo /> Happen
            </span>
          </h2>
          <h2 className='home__footer__intro__title'>
            <span>When You Say</span>
            <span className='home__footer__intro__title--dynamic'>
              “
              <span
                className='home__footer__dynamic__container'
                ref={dynamicContainerRef}
              >
                <span
                  className='home__footer__dynamic__text'
                  ref={dynamicTextRef}
                >
                  Bonjour
                </span>
              </span>
              ”
            </span>
          </h2>
        </div>
        <div className='home__footer__links'>
          <div className='home__footer__location'>
            <h3 className='home__footer__title'>Toronto</h3>
            <a href='/' className='home__footer__link'>
              1306 Queen St E, Toronto, ON M4L 1C4
            </a>
          </div>
          <div className='home__footer__location'>
            <h3 className='home__footer__title'>Los Angeles</h3>{' '}
            <a href='/' className='home__footer__link'>
              1926 E Maple Ave El Segundo, CA 90245
            </a>
          </div>
          <div className='home__footer__social'>
            <h3 className='home__footer__title'>Follow Us</h3>{' '}
            <a href='/' className='home__footer__link first'>
              In
            </a>
            <a href='/' className='home__footer__link'>
              Li
            </a>
          </div>
          <div className='home__footer__rights'>
            <a href='/' className='home__footer__link--sub '>
              Privacy Policy
            </a>
            <h6 className='home__footer__title--sub'>
              All Rights Reserved 2022©
            </h6>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: var(--white);
  color: var(--black);
  opacity: 1;
  z-index: -1;

  @media (min-width: 1024px) {
    position: sticky;
    opacity: 0;
    bottom: 0;
  }

  .home__footer__container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 60px var(--margin);
  }

  @media (min-width: 1024px) {
    .home__footer__container {
      padding: 90px var(--margin) 45px;
    }
  }

  .home__footer__intro {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    .home__footer__intro {
      margin-bottom: 90px;
    }
  }

  @media (min-width: 1024px) {
    .home__footer__intro {
      margin-bottom: 120px;
    }
  }

  .home__footer__intro__title {
    font-size: 9.94vw;
    line-height: 110%;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    .home__footer__intro__title {
      font-size: 6.67vw;
      line-height: 100%;
    }
  }

  .home__footer__intro__title:first-child {
    font-weight: 300;
    font-family: 'Apoc';

    span {
      display: inline-block;
    }

    svg {
      width: 7.8vw;
    }
  }

  .home__footer__intro__title:last-child {
    font-size: 11vw;
  }

  @media (min-width: 768px) {
    .home__footer__intro__title:first-child svg {
      width: 5.3vw;
    }
  }

  @media (min-width: 1024px) {
    .home__footer__intro__title:first-child svg {
      width: 5.3vw;
    }

    .home__footer__intro__title:last-child {
      font-size: 7.265vw;
    }
  }

  .home__footer__intro__title--dynamic {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    color: var(--orange);
    cursor: pointer;
    pointer-events: auto;
  }

  .home__footer__dynamic__container {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .home__footer__dynamic__text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .home__footer__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 50px;
  }

  @media (min-width: 768px) {
    .home__footer__links {
      align-items: flex-end;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 60px;
    }
  }

  @media (min-width: 1120px) {
    .home__footer__links {
      flex-wrap: nowrap;
      row-gap: 0;
    }
  }

  .home__footer__title {
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
    .home__footer__title {
      margin-bottom: 15px;
      text-align: inherit;
    }
  }

  @media (min-width: 1024px) {
    .home__footer__title {
      font-size: 35px;
      line-height: 42px;
    }
  }

  .home__footer__link {
    display: inline-block;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    pointer-events: auto;
    max-width: 21vw;
    text-align: center;
  }

  @media (min-width: 768px) {
    .home__footer__link {
      text-align: inherit;
    }
  }

  @media (min-width: 1024px) {
    .home__footer__link {
      font-size: 21px;
      line-height: 21px;
    }
  }

  .home__footer__location {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    .home__footer__location {
      margin-right: var(--col1-g);
    }
  }

  .home__footer__social {
    margin-right: 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .home__footer__title {
      width: 100%;
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 25px;
    }

    .home__footer__link {
      text-transform: uppercase;
      text-align: center;
      font-size: 21px;
      line-height: 21px;

      &.first {
        margin-right: 30px;
      }
    }
  }

  @media (min-width: 768px) {
    .home__footer__social {
      margin-right: var(--col1-g);
      justify-content: inherit;

      .home__footer__title {
        margin-bottom: 31px;
        font-size: 20px;
        line-height: 25px;
      }

      .home__footer__link {
        text-align: inherit;
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  @media (min-width: 1024px) {
    .home__footer__social {
      .home__footer__title {
        margin-bottom: 36px;
        font-size: 35px;
        line-height: 42px;
      }

      .home__footer__link {
        text-align: inherit;
        font-size: 21px;
        line-height: 21px;
      }
    }
  }

  .home__footer__rights {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;

    a,
    h6 {
      font-size: 16px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 400;
      white-space: pre;
    }
  }

  @media (min-width: 768px) {
    .home__footer__rights {
      min-width: 100%;
      flex: 1;
      justify-content: flex-end;
      text-align: right;
    }
  }

  @media (min-width: 1120px) {
    .home__footer__rights {
      width: fit-content;
      min-width: inherit;
    }
  }
`;
