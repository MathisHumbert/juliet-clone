import React from 'react';
import styled from 'styled-components';

import FlowerLogo from '../shared/logo/FlowerLogo';

export default function AboutHero() {
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
              <button>Show Reel 2022©</button>
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
          <button>Show Reel 2022©</button>
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
  margin-bottom: 30px;
  pointer-events: auto;

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
    left: 8.8vw;
    top: 50%;
    transform: translateY(-50%);
    width: 29.87vw;
    height: 30px;
    border: 1px solid var(--black);
    border-radius: 200px;
    font-size: 12px;
    line-height: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-family: Aeonik;
    font-weight: 400;
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
