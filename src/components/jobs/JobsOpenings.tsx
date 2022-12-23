import React from 'react';
import styled from 'styled-components';

export default function JobsOpenings() {
  return (
    <Wrapper>
      <div className='jobs__openings__container'>
        <div className='jobs__openings__intro'>
          <h2 className='jobs__opening__heading'>
            <span>
              <sub>Curent&nbsp;</sub>
            </span>
            <span>
              <sub>Openings</sub>
            </span>
          </h2>
          <div className='jobs__openings_text'>
            <p>
              We’re always interested in meeting smart, kind, and creative
              individuals with a desire to love their audience like crazy. Is
              that you?&nbsp;
              <a>Introduce yourself</a>.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 60px;
  pointer-events: auto;

  @media (min-width: 1024px) {
    margin-bottom: 90px;
  }

  .jobs__openings__container {
    padding: 0 var(--margin);
    min-height: 100%;
  }

  .jobs__openings__intro {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .jobs__openings__intro {
      margin-bottom: 180px;
    }
  }

  .jobs__opening__heading {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 1024px) {
    .jobs__opening__heading {
      font-size: 112px;
    }
  }

  .jobs__opening__heading span {
    display: block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;

    &:first-child {
      font-size: 44px;
    }

    &:last-child {
      font-weight: 300;
      font-family: 'Apoc';
    }
  }

  @media (min-width: 1024px) {
    .jobs__opening__heading span {
      display: inline-block;

      &:first-child {
        font-size: 122px;
      }
    }
  }

  .jobs__opening__heading sub {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
  }

  .jobs__openings_text {
    width: var(--col6-g);
    text-align: center;
    max-width: 100%;
    padding: 0 16vw;

    p {
      font-size: 16px;
      line-height: 22px;
    }

    &:hover a::after {
      left: auto;
      right: 0;
      width: 0;
    }

    a {
      display: inline-block;
      position: relative;

      &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        right: auto;
        width: 100%;
        border-bottom: 1px solid var(--black);
        transition: width 0.4s ease-out;
      }
    }
  }

  @media (min-width: 758px) {
    .jobs__openings_text {
      padding: 0;
    }
  }

  @media (min-width: 1024px) {
    .jobs__openings_text {
      p {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;
