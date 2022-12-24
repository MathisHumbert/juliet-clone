import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

gsap.registerPlugin(CustomEase);
CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function JobsHero() {
  const smallTitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(
      '.section__container'
    )! as HTMLDivElement;
    const titles = document.querySelectorAll('.jobs__hero__title span sub');

    const height = container.offsetHeight;

    const tl = gsap.timeline();

    tl.fromTo(
      titles,
      { yPercent: 100 },
      { yPercent: 0, duration: 1, ease: 'text-in', stagger: 0.08 }
    )
      .fromTo(
        smallTitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'fade-in' },
        0.3
      )
      .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'fade-in' },
        0.6
      );

    gsap.to(smallTitleRef.current, {
      rotate: height * 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className='jobs__hero__container'>
        <h1 className='jobs__hero__title'>
          <span>
            <sub>Let’s&nbsp;</sub>
          </span>
          <span>
            <sub>Work</sub>
          </span>
          <br />
          <span>
            <sub>Together</sub>
          </span>
          <small ref={smallTitleRef}>
            <p>We're hiring</p>
          </small>
        </h1>
        <div className='jobs__hero__text' ref={textRef}>
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
    width: 100vw;
    overflow: hidden;
  }

  .jobs__hero__title {
    position: relative;
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
  }

  .jobs__hero__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
    text-align: center;

    &:nth-child(1),
    &:nth-child(2) {
      font-size: 14.8vw;
      line-height: 90%;
      font-weight: 300;
      font-family: 'Apoc';
    }

    &:nth-child(4) {
      font-size: 16.38vw;
      line-height: 81%;
    }
  }

  @media (min-width: 1024px) {
    .jobs__hero__title {
      margin-bottom: 60px;
    }

    .jobs__hero__title span {
      &:nth-child(1),
      &:nth-child(2) {
        font-size: 8.667vw;
        line-height: 89%;
      }

      &:nth-child(4) {
        font-size: 9.28vw;
        line-height: 82%;
      }
    }
  }

  .jobs__hero__title span sub {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    will-change: transform;
  }

  .jobs__hero__title small {
    position: absolute;
    top: 35%;
    left: 37%;
    display: block;
    padding: 4px;
    background: var(--orange);
    transform: rotate(-5.3deg);
    will-change: transform, opacity;

    p {
      font-size: 3.72vw;
      line-height: 114%;
      font-weight: 400;
      margin-top: 6px;
    }
  }

  @media (min-width: 1024px) {
    .jobs__hero__title small {
      padding: 8px;

      p {
        font-size: 1.548vw;
        margin-top: 2px;
      }
    }
  }

  .jobs__hero__text {
    position: relative;
    padding: 0 24px;
    text-align: center;
    z-index: 3;

    p {
      font-size: 24px;
      line-height: 32px;
      font-weight: 300;
    }

    strong {
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    .jobs__hero__text {
      padding: 0 calc(var(--col5) / 2);
    }
  }

  @media (min-width: 1024px) {
    .jobs__hero__text p {
      font-size: 40px;
      line-height: 46px;
    }
  }
`;
