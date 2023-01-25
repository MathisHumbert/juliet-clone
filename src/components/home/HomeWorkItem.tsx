import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import SplitType from 'split-type';
import styled from 'styled-components';

import usePage from '../../context/PageContext';

gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create('cubic-title', '0.25, 1, 0.5, 1');
CustomEase.create('cubic-opacity', '0.5, 1, 0.89, 1');

type Props = {
  id: number;
  title: string;
  src: string;
  type: string;
  text_left: string;
  text_right: string;
  last: boolean;
};

export default function HomeWorkItem({
  id,
  title,
  src,
  type,
  text_left,
  text_right,
  last,
}: Props) {
  const { isPageLoaded } = usePage();
  const workItemTitleRef = useRef(null);
  const workItemFooterRef = useRef(null);
  const workItemTextLeftRef = useRef(null);
  const workItemTextRightRef = useRef(null);
  const workItemBarRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;
    const title = new SplitType(workItemTitleRef?.current!, {
      types: 'words',
      wordClass: 'work__item__title__item',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });

    const text = new SplitType(workItemTextRightRef?.current!, {
      types: 'words',
      tagName: 'span',
    });

    gsap.fromTo(
      subtitle.words,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'cubic-title',
        scrollTrigger: {
          trigger: workItemTitleRef?.current,
          start: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      [text.words, workItemTextLeftRef?.current, workItemBarRef?.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-opacity',
        scrollTrigger: {
          trigger: workItemFooterRef?.current,
          start: 'bottom bottom',
        },
      }
    );
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <a>
        <header className='work__item__header'>
          <h3
            className='work__item__title'
            data-id={`0${id}`}
            ref={workItemTitleRef}
          >
            {title}
          </h3>
        </header>
        <figure className='work__item__visual__container'>
          {type === 'img' ? (
            <img src={src} alt={title} className='work__item__visual' />
          ) : (
            <iframe
              src={src}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen={true}
              className='work__item__visual'
            ></iframe>
          )}
          <div className='looped__text'>
            <div>View case -&nbsp;</div>
            <div>View case -&nbsp;</div>
            <div>View case -&nbsp;</div>
            <div>View case -&nbsp;</div>
            <div>View case -&nbsp;</div>
            <div>View case -&nbsp;</div>
            <div>View case -</div>
          </div>
        </figure>
        <footer className='work__item__footer' ref={workItemFooterRef}>
          <p className='work__item__footer__left' ref={workItemTextLeftRef}>
            {text_left}
          </p>
          <p className='work__item__footer__right' ref={workItemTextRightRef}>
            {text_right}
          </p>
        </footer>
        {!last && <div className='work__item__bar' ref={workItemBarRef}></div>}
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  position: relative;
  list-style-type: none;

  a {
    display: block;
    pointer-events: none;
    position: relative;
    margin-top: 15px;
  }

  .work__item__header {
    padding-top: 0;

    transition: background 0.6s ease-out;
    background: var(--white);
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .work__item__header {
      padding-top: 66px;
      position: sticky;
      top: 0;
    }
  }

  .work__item__title {
    padding-left: 30px;
    margin-bottom: 15px;
    font-size: 12.26vw;
    line-height: 89%;
    text-transform: uppercase;
    font-family: 'Apoc';
    font-weight: 300;
    position: relative;
    pointer-events: auto;

    &::before {
      content: attr(data-id);
      position: absolute;
      left: 0;
      top: 0.4vw;
      font-size: 16px;
      font-family: 'Aeonik';
      font-weight: 400;
      line-height: 100%;
    }
  }

  @media (min-width: 1024px) {
    .work__item__title {
      font-size: 8.667vw;
      padding-left: 57px;
      margin-bottom: 20px;

      &::before {
        font-size: 38px;
      }
    }
  }

  .work__item__title__item {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;

    span {
      padding-top: 22px;
      padding-bottom: 6px;
    }
  }

  .work__item__visual__container {
    width: 100%;
    margin-bottom: 15px;
    position: relative;
    pointer-events: auto;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
      background: rgba(0, 0, 0, 0.6);
      transition: opacity 0.6s ease-out;
      opacity: 0;
      z-index: 1;
    }
  }

  @media (min-width: 1024px) {
    .work__item__visual__container {
      margin-bottom: 30px;
    }
  }

  .work__item__visual {
    display: block;
    width: 100%;
    height: calc(var(--grid) * 0.5625);
    object-fit: cover;
    pointer-events: none;
  }

  .work__item__visual__container iframe {
    width: 100%;
    height: calc(var(--grid) * 0.5625);
  }

  .work__item__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
  }

  .work__item__footer__left {
    font-size: 16px;
    line-height: 16px;
    min-height: 21px;
    text-transform: uppercase;
    font-weight: 400;
    pointer-events: auto;
  }

  @media (min-width: 1024px) {
    .work__item__footer__left {
      font-size: 21px;
      line-height: 21px;
    }
  }

  .work__item__footer__right {
    display: none;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
    pointer-events: auto;

    span:not(:last-child) {
      &::after {
        content: ' / ';
      }
    }
  }

  @media (min-width: 768px) {
    .work__item__footer__right {
      display: block;
    }
  }

  .work__item__bar {
    width: 100%;
    height: 1px;
    background: var(--black);
  }

  .looped__text {
    z-index: 2;
  }

  .looped__text div {
    font-size: 4.375vw;
    letter-spacing: -0.04em;
    line-height: 114.29%;
    color: var(--white);
    font-weight: 300;
    opacity: 0;
    transition: opacity 0.6s ease-out;
    animation-play-state: paused !important;
  }

  .work__item__visual__container:hover {
    &::after {
      opacity: 1;
    }

    .looped__text div {
      opacity: 1;
      animation-play-state: running !important;
    }
  }
`;
