import React from 'react';
import styled from 'styled-components';

export default function AboutScrollers() {
  return (
    <Wrapper>
      <div className='about__scrollers__scrolling'>
        <div className='looped__text'>
          <div>
            <strong>Be part of the actual</strong>&nbsp;comunnity&nbsp;
          </div>
          <div>
            <strong>Be part of the actual</strong>&nbsp;comunnity&nbsp;
          </div>
          <div>
            <strong>Be part of the actual</strong>&nbsp;comunnity&nbsp;
          </div>
          <div>
            <strong>Be part of the actual</strong>&nbsp;comunnity&nbsp;
          </div>
          <div>
            <strong>Be part of the actual</strong>&nbsp;comunnity
          </div>
        </div>
      </div>
      <div className='about__scrollers__scrolling'>
        <div className='looped__text'>
          <div>
            <strong>Get out of the marketing</strong>&nbsp;echo chamber&nbsp;
          </div>
          <div>
            <strong>Get out of the marketing</strong>&nbsp;echo chamber&nbsp;
          </div>
          <div>
            <strong>Get out of the marketing</strong>&nbsp;echo chamber&nbsp;
          </div>
          <div>
            <strong>Get out of the marketing</strong>&nbsp;echo chamber&nbsp;
          </div>
          <div>
            <strong>Get out of the marketing</strong>&nbsp;echo chamber
          </div>
        </div>
      </div>
      <div className='about__scrollers__scrolling'>
        <div className='looped__text'>
          <div>
            <strong>Diversity makes the work better</strong>&nbsp;Diversity
            makes the work better&nbsp;
          </div>
          <div>
            <strong>Diversity makes the work better</strong>&nbsp;Diversity
            makes the work better&nbsp;
          </div>
          <div>
            <strong>Diversity makes the work better</strong>&nbsp;Diversity
            makes the work better&nbsp;
          </div>
          <div>
            <strong>Diversity makes the work better</strong>&nbsp;Diversity
            makes the work better&nbsp;
          </div>
          <div>
            <strong>Diversity makes the work better</strong>&nbsp;Diversity
            makes the work better
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;
  max-width: 100vw;
  overflow: hidden;

  .about__scrollers__scrolling {
    position: relative;
    width: 100vw;
    height: 60px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    .about__scrollers__scrolling {
      height: 96px;
    }
  }

  .about__scrollers__scrolling:first-child {
    background: var(--turks);
    color: var(--black);
    transform: rotate(0.27deg);

    .looped__text div {
      animation: loopTextLeft 10s steps(400, jump-end);
      animation-iteration-count: infinite;
    }
  }

  .about__scrollers__scrolling:nth-child(2) {
    background: var(--orange);
    color: var(--black);
    transform: rotate(1.43deg);
    z-index: 2;

    .looped__text div {
      animation: loopTextRight 12s steps(400, jump-end);
      animation-iteration-count: infinite;
    }
  }

  .about__scrollers__scrolling:last-child {
    background: var(--purple);
    color: var(--white);
    transform: rotate(-1.73deg);

    .looped__text div {
      animation: loopTextLeft 15s steps(400, jump-end);
      animation-iteration-count: infinite;
    }
  }

  .looped__text div {
    font-size: 32px;
    line-height: 60px;
    font-family: 'Apoc';
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 1vw;

    strong {
      font-weight: 400;
      font-family: 'Aeonik';
    }
  }

  @media (min-width: 1024px) {
    .looped__text div {
      font-size: 52px;
      line-height: 96px;
    }
  }
`;
