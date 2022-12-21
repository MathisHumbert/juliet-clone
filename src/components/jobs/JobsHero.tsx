import React from 'react';
import styled from 'styled-components';

export default function JobsHero() {
  return (
    <Wrapper>
      <div className='jobs__hero__container'>
        <h1 className='jobs__hero__title'>
          <span>
            <sub>Let's</sub>
          </span>
          <span>
            <sub>Work</sub>
          </span>
          <span>
            <sub>Together</sub>
          </span>
          <small>We're hiring</small>
        </h1>
        <div className='jobs__hero__text'>
          <p>
            We want Juliet to <strong>represent the world we live in</strong>,
            with talent that’s diverse in background and skill sets.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: var(--padding-top);
  z-index: 2;
  pointer-events: auto;

  .jobs__hero__container {
    min-height: 100%;
    padding: 0 var(--margin);
  }
`;
