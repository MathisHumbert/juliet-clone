import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { footerDynamicWords } from '../../utils/mockData';
import FlowerLogo from '../shared/logo/FlowerLogo';

export default function ContactHero() {
  const dynamicContainerRef = useRef<HTMLSpanElement>(null);
  const dynamicTextRef = useRef<HTMLSpanElement>(null);

  let isFlowerAnimating = false;

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      onStart: () => {
        let name =
          footerDynamicWords[
            Math.ceil(Math.random() * footerDynamicWords.length - 1)
          ];
        dynamicTextRef.current!.innerHTML = name;

        gsap.to(dynamicContainerRef.current, {
          opacity: 1,
          width: dynamicTextRef.current!.offsetWidth,
          duration: 0.6,
          ease: 'fade-in',
        });
      },
      onRepeat: () => {
        gsap.to(dynamicContainerRef.current, {
          opacity: 0,
          width: '0px',
          duration: 0.6,
          ease: 'fade-in',
          onComplete: () => {
            let name =
              footerDynamicWords[
                Math.ceil(Math.random() * footerDynamicWords.length - 1)
              ];
            dynamicTextRef.current!.innerHTML = name;
          },
        });

        gsap.to(dynamicContainerRef.current, {
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          ease: 'fade-in',
          width: () => {
            return dynamicTextRef.current!.offsetWidth;
          },
        });
      },
    });

    tl.to(dynamicContainerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'fade-in',
    });

    dynamicContainerRef.current?.addEventListener('mouseenter', () =>
      tl.pause()
    );

    dynamicContainerRef.current?.addEventListener('mouseleave', () =>
      tl.play()
    );

    return () => {
      dynamicContainerRef.current?.removeEventListener('mouseenter', () =>
        tl.pause()
      );

      dynamicContainerRef.current?.removeEventListener('mouseleave', () =>
        tl.play()
      );
    };
  }, []);

  const onFlowerLogoEnter = () => {
    const flowerLogoSvg = document.querySelector('.flower__logo');

    if (isFlowerAnimating) return;

    isFlowerAnimating = true;

    gsap.to(flowerLogoSvg, {
      rotateY: 360,
      duration: 3,
      ease: 'linear',
      onComplete: () => {
        isFlowerAnimating = false;
        gsap.set(flowerLogoSvg, { rotateY: 0 });
      },
    });
  };

  return (
    <Wrapper>
      <div className='context__hero__container'>
        <h1 className='context__hero__title'>
          <span>
            <span>Good&nbsp;</span>
          </span>
          <span>
            <span>Things&nbsp;</span>
          </span>
          <br className='context__hero__title--separator' />
          <span onMouseEnter={onFlowerLogoEnter}>
            <span>
              <FlowerLogo />
            </span>
          </span>
          <span>
            <span>&nbsp;Happen</span>
          </span>
        </h1>
        <h1 className='context__hero__title'>
          <strong>
            <span>
              <span>When&nbsp;</span>
            </span>
            <span>
              <span>You&nbsp;</span>
            </span>
            <span>
              <span>Say</span>
            </span>
          </strong>
        </h1>
        <h1 className='context__hero__title'>
          <span>
            <span>
              <strong>
                <span className='context__hero__title--dynamic'>
                  “
                  <span
                    className='context__dynamic__container'
                    ref={dynamicContainerRef}
                  >
                    <span
                      className='context__dynamic__text'
                      ref={dynamicTextRef}
                    ></span>
                  </span>
                  ”
                </span>
              </strong>
            </span>
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
    margin-bottom: 120px;
  }

  .context__hero__container {
    padding: 0 var(--margin);
  }

  .context__hero__title {
    font-size: 10.68vw;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Apoc';
    font-weight: 300;
  }

  .context__hero__title strong {
    font-size: 11.5vw;
    line-height: 90%;

    font-family: 'Aeonik';
  }

  @media (min-width: 1024px) {
    .context__hero__title {
      font-size: 6.67vw;
    }

    .context__hero__title strong {
      font-size: 7.265vw;
    }
  }

  h1 span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  h1 span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
  }

  h1 span span svg {
    width: 5.3vw;
    width: 7.8vw;
  }

  @media (min-width: 1024px) {
    h1 span span svg {
      width: 5.3vw;
      transform: translateY(0.5vw);
    }
  }

  .context__hero__title--separator {
    display: inline-block;
  }

  @media (min-width: 1024px) {
    .context__hero__title--separator {
      display: none;
    }
  }

  .context__hero__title--dynamic {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--orange);
    cursor: pointer;
    pointer-events: auto;
  }

  .context__dynamic__container {
    display: block;
    /* overflow: hidden; */
    position: relative;

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
      bottom: 0;
      left: auto;
      right: 0;
      width: 0;
      transform: translateY(-100%);
      display: block;
      border-bottom: 6px solid var(--orange);
      transition: width 0.6s ease-out;
    }
  }

  .context__dynamic__text {
    padding-top: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10px);
  }
`;
