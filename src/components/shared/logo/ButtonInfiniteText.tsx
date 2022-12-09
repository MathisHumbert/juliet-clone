import React from 'react';
import styled from 'styled-components';

export default function ButtonInfiniteText({ text }: { text: string }) {
  return (
    <Wrapper>
      <span className='infinite__text__container'>
        <span className='infinite__text'>{text}</span>
        <span className='infinite__text'>{text}</span>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  line-height: 30px;
  font-size: 12px;
  font-family: Aeonik;
  font-weight: 400;
  text-transform: uppercase;
  border: 1px solid var(--black);
  border-radius: 200px;
  overflow: hidden;

  &:hover .infinite__text {
    animation-play-state: paused;
  }

  @media (min-width: 1024px) {
    .hero__title--button {
      line-height: 40px;
      font-size: 21px;
    }
  }
`;
