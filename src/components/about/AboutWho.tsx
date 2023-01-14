import React from 'react';
import styled from 'styled-components';

export default function AboutWho() {
  return (
    <Wrapper>
      <div className='about__who__container'>
        <h5 className='about__who__header'>The who</h5>
        <div className='about__who__title'>
          <h2 className='about__who__title--top'>We are 50+ people strong.</h2>
          <h2 className='about__who__title--bottom'>
            We’re strategists, writers, producers, designers, and creative
            chameleons.
          </h2>
        </div>
        <div className='about__who__text'>
          <p>
            We value diversity of opinion, doing over PowerPointing, escaping
            echo chambers, and being part of the actual community not just the
            ad community.
          </p>
          <p>&nbsp;</p>
          <p>
            We’re interested in building all types of brands, and solving all
            types of problems, by loving all types of audiences.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 60px;
  padding-bottom: 90px;

  .about__who__container {
    padding: 0 var(--margin);
  }

  .about__who__header {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
  }
`;
