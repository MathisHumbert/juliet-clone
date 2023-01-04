import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('text-in', '0.25, 1, 0.5, 1');
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('image-in', '0.12, 0, 0.39, 0');

export default function ContactLocations() {
  const { isPageLoaded } = usePage();
  const separatorBar = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    gsap.fromTo(
      separatorBar?.current,
      { width: 0 },
      {
        width: '100%',
        duration: 0.6,
        ease: 'power1.easeOut',
        scrollTrigger: {
          trigger: separatorBar?.current,
          start: 'top bottom',
        },
      }
    );

    const locationsItems = document.querySelectorAll(
      '.contact__locations__item'
    );

    locationsItems.forEach((item) => {
      const title = item.querySelector('.locations__item__title span span');
      const text = item.querySelector('.locations__item__text');
      const button = item.querySelector('.locations__item__button');
      const bar = item.querySelector('.locations__item__bar');
      const img = item.querySelector('.locations__item__img');

      const tl = gsap.timeline({
        delay: 0.9,
        scrollTrigger: { trigger: item, start: 'top bottom' },
      });

      tl.to(title, { y: 0, duration: 1, ease: 'text-in' })
        .to(text, { y: 0, opacity: 1, ease: 'fade-in', duration: 0.8 }, 0.3)
        .to(
          button,
          { x: 0, opacity: 1, duration: 1, ease: 'power1.easeOut' },
          0.6
        )
        .to(bar, { width: '100%', duration: 0.6, ease: 'power1.easeOut' }, 0.9)
        .to(
          img,
          {
            clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)',
            duration: 0.8,
            ease: 'image-in',
          },
          0.3
        )
        .to(
          img,

          {
            scale: 1,
            duration: 1.6,
            ease: 'image-in',
          },
          0.3
        );

      ScrollTrigger.create({
        trigger: item,
        start: 'center bottom',
        animation: tl,
      });
    });
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='contact__loactions__container'>
        <div className='contact__locations__item'>
          <h2 className='locations__item__title'>
            <span>
              <span>Toronto</span>
            </span>
          </h2>
          <div className='locations__item__header'>
            <p className='locations__item__text'>
              1306 Queen St E, <br /> Toronto, ON M4L 1C4
            </p>
            <a
              href='https://www.google.com/maps/place/Juliet+Creative/@43.6628022,-79.3284228,16.23z/data=!4m5!3m4!1s0x89d4cb316cce3c63:0x5ddc36d93b914800!8m2!3d43.663973!4d-79.328101'
              target='_blank'
              className='locations__item__button'
            >
              <div className='looped__text'>
                <div>Map it&nbsp;</div>
                <div>Map it&nbsp;</div>
                <div>Map it&nbsp;</div>
                <div>Map it</div>
              </div>
            </a>
            <div className='locations__item__bar'></div>
          </div>
          <figure className='locations__item__visual'>
            <img
              src='/img/toronto-office-contact.jpg'
              alt='toronto-office'
              className='locations__item__img'
            />
          </figure>
          <div className='locations__item__separator' ref={separatorBar}></div>
        </div>
        <div className='contact__locations__item'>
          <h2 className='locations__item__title'>
            <span>
              <span>Los Angles</span>
            </span>
          </h2>
          <div className='locations__item__header'>
            <p className='locations__item__text'>
              1926 E Maple Ave <br /> El Segundo, CA 90245
            </p>
            <a
              href='https://www.google.com/maps/place/1926+E+Maple+Ave,+El+Segundo,+CA+90245,+USA/@33.9266641,-118.3943383,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b6b53a601559:0x5ad0d247c5fab4a5!8m2!3d33.9266641!4d-118.3921496'
              target='_blank'
              className='locations__item__button'
            >
              <div className='looped__text'>
                <div>Map it&nbsp;</div>
                <div>Map it&nbsp;</div>
                <div>Map it&nbsp;</div>
                <div>Map it</div>
              </div>
            </a>
            <div className='locations__item__bar'></div>
          </div>
          <figure className='locations__item__visual'>
            <img
              src='/img/la-office-contact.jpg'
              alt='la-office'
              className='locations__item__img'
            />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 90px;
  pointer-events: auto;
  min-height: 100%;
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 180px;
  }

  .contact__loactions__container {
    padding: 0 var(--margin);
    display: block;
  }

  @media (min-width: 768px) {
    .contact__loactions__container {
      display: flex;
      justify-content: space-between;
    }
  }

  .contact__locations__item {
    width: 100%;
    position: relative;

    &:first-child {
      padding-bottom: 15px;
    }

    &:last-child {
      padding-top: 15px;
    }
  }

  @media (min-width: 768px) {
    .contact__locations__item {
      width: var(--col6-g);

      &:first-child {
        padding-bottom: 0;
      }

      &:last-child {
        padding-top: 0;
      }
    }
  }

  .locations__item__title {
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    .locations__item__title {
      font-size: 3.93vw;
      line-height: 109%;
      margin-bottom: 30px;
    }
  }

  .locations__item__title span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .locations__item__title span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(100%);
    will-change: transform;
  }

  .locations__item__header {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (min-width: 768px) {
    .locations__item__header {
      align-items: center;
    }
  }

  .locations__item__text {
    font-size: 16px;
    line-height: 22px;
    opacity: 0;
    transform: translateY(40px);
    will-change: transform, opacity;
  }

  @media (min-width: 1024px) {
    .locations__item__text {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .locations__item__button {
    display: block;
    position: relative;
    width: 90px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-transform: uppercase;
    border: 1px solid var(--black);
    border-radius: 200px;
    overflow: hidden;
    transform: translateX(40px);
    opacity: 0;
    will-change: transform, opacity;

    &:hover .looped__text div {
      animation-play-state: paused;
    }

    .looped__text {
      margin-top: 2px;
    }
  }

  @media (min-width: 768px) {
    .locations__item__button {
      width: 100px;
      height: 40px;
      line-height: 40px;
    }
  }

  @media (min-width: 1024px) {
    .locations__item__button {
      width: 120px;
      font-size: 21px;
    }
  }

  .locations__item__bar {
    position: absolute;
    bottom: 0;
    width: 0;
    left: 0;
    border-bottom: 1px solid var(--black);
    display: none;
    will-change: width;
  }

  @media (min-width: 768px) {
    .locations__item__bar {
      display: block;
    }
  }

  .locations__item__visual {
    display: block;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .locations__item__img {
    display: block;
    object-fit: cover;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transform: scale(1.1);
    will-change: transform, clip-path;
  }

  .locations__item__separator {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    border-bottom: 1px solid var(--black);
    display: block;
  }

  @media (min-width: 768px) {
    .locations__item__separator {
      display: none;
    }
  }
`;
