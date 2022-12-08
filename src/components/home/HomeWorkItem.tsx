import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import SplitType from 'split-type';
import styled from 'styled-components';

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
  const workItemTitleRef = useRef(null);
  const workItemFooterRef = useRef(null);
  const workItemTextLeftRef = useRef(null);
  const workItemTextRightRef = useRef(null);
  const workItemBarRef = useRef(null);

  useEffect(() => {
    const title = new SplitType(workItemTitleRef.current!, {
      types: 'words',
      wordClass: 'work__item__title__item',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });

    const text = new SplitType(workItemTextRightRef.current!, {
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
          trigger: workItemTitleRef.current,
          start: 'bottom bottom',
        },
      }
    );

    gsap.fromTo(
      [text.words, workItemTextLeftRef.current, workItemBarRef.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-opacity',
        scrollTrigger: {
          trigger: workItemFooterRef.current,
          start: 'bottom bottom',
        },
      }
    );
  }, []);

  console.log(last);

  return (
    <Wrapper>
      <a href='/'>
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
            <div className='work__item__visual__mask'>
              <iframe
                src={src}
                frameBorder='0'
                allow='autoplay; fullscreen; picture-in-picture'
                allowFullScreen={true}
                className='work__item__visual'
              ></iframe>
            </div>
          )}
          <div className='infinite__text__container'>
            <p className='infinite__text'>
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case -{' '}
            </p>
            <p className='infinite__text'>
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case - View case - View case -
              View case - View case - View case - View case - View case - View
              case - View case - View case - View case -{' '}
            </p>
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
  }

  .work__item__header {
    padding-top: 66px;
    position: sticky;
    background: var(--white);
    top: 0;
    z-index: 6;
  }

  .work__item__title {
    padding-left: 57px;
    margin-bottom: 20px;
    font-size: 8.667vw;
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
      font-size: 38px;
      font-family: 'Aeonik';
      font-weight: 400;
      line-height: 100%;
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
    margin-bottom: 30px;
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
    }
  }

  .work__item__visual {
    display: block;
    width: 100%;
    height: calc(var(--grid) * 0.5625);
    object-fit: cover;
    pointer-events: none;
  }

  .work__item__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
  }

  .work__item__footer__left {
    font-size: 21px;
    line-height: 21px;
    min-height: 21px;
    text-transform: uppercase;
    font-weight: 400;
    pointer-events: auto;
  }

  .work__item__footer__right {
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

  .work__item__bar {
    width: 100%;
    height: 1px;
    background: var(--black);
  }

  .infinite__text__container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }

  .infinite__text {
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

    .infinite__text__container p {
      opacity: 1;
    }

    .infinite__text {
      animation-play-state: running !important;
    }
  }
`;
