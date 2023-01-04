import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import useOnScreen from '../../utils/useOnScreen';
import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

type Props = {
  id: number;
  mainTitle: string;
  subTitleText: string;
  subTitleDate: string;
  img: string;
  icon: string;
  href: string;
  isDesktop: boolean;
};

export default function HomeBlogItem({
  id,
  mainTitle,
  subTitleText,
  subTitleDate,
  img,
  icon,
  href,
  isDesktop,
}: Props) {
  const { isPageLoaded } = usePage();
  const [animationDone, setAnimationDone] = useState(false);
  const [text, setText] = useState<HTMLElement[]>([]);

  const blogItemRef = useRef(null);
  const blogItemMainTitleRef = useRef(null);
  const blogItemSubTitleRef = useRef(null);
  const blogItemVisualRef = useRef(null);

  let onScreen = isDesktop ? useOnScreen(blogItemRef, 0.5) : false;

  useEffect(() => {
    if (!isPageLoaded) return;

    const title = new SplitType(blogItemMainTitleRef?.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });

    setText(subtitle.words!);
  }, [isPageLoaded]);

  useEffect(() => {
    if (!isPageLoaded) return;

    if (!isDesktop) {
      gsap.killTweensOf(blogItemSubTitleRef?.current);
      gsap.killTweensOf(blogItemVisualRef?.current);
      gsap.killTweensOf(text);
    }

    if (animationDone || !onScreen) return;

    setAnimationDone(true);

    const tl = gsap.timeline();

    tl.to([blogItemSubTitleRef?.current, blogItemVisualRef?.current], {
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: 'fade-in',
    }).to(text, { y: 0, duration: 1, ease: 'text-in', stagger: 0.08 }, 0);
  }, [onScreen, isDesktop, isPageLoaded]);

  return (
    <Wrapper
      className={onScreen ? 'home__blog__item scrolled' : 'home__blog__item'}
      icon={icon}
      placeBot={id % 2 === 1}
      ref={blogItemRef}
    >
      <a href={href}>
        <h6 className='blog__item__title--sub' ref={blogItemSubTitleRef}>
          <span>{subTitleText}</span>
          <span>{subTitleDate}</span>
        </h6>
        <h3
          className='blog__item__title--main'
          data-id={`0${id}`}
          ref={blogItemMainTitleRef}
        >
          {mainTitle}
        </h3>
        <figure
          className='blog__item__visual'
          data-icon={icon}
          ref={blogItemVisualRef}
        >
          <img src={img} alt={mainTitle} className='blog__item__img' />
        </figure>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ icon: string; placeBot: boolean }>`
  width: calc(100vw + 45px);
  margin-right: calc(var(--col1) * 0.8);
  list-style-type: none;
  padding-left: var(--gutter);

  @media (min-width: 768px) {
    width: fit-content;
    margin-right: var(--col1);
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    width: var(--col9-g);
  }

  a {
    display: block;
    min-height: var(--col2g);
    height: 100%;
    width: calc(100vw + 45px);
    position: relative;
    pointer-events: none;
    padding-left: 0;
    padding-top: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    a {
      min-height: var(--col3g);
      width: var(--col7-g);
      padding-top: ${(props) => (props.placeBot ? '14vw' : '2.25vw')};
    }
  }

  @media (min-width: 1024px) {
    a {
      min-height: var(--col3g);
      width: 100%;
      padding-left: 66px;
    }
  }

  .blog__item__title--sub {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    margin-bottom: 30px;
    pointer-events: auto;
    font-weight: 400;
    opacity: 1;
    padding-left: 45px;
  }

  @media (min-width: 768px) {
    .blog__item__title--sub {
      padding-left: 0;
    }
  }

  @media (min-width: 1024px) {
    .blog__item__title--sub {
      opacity: 0;
    }
  }

  .blog__item__title--sub span:first-child {
    position: relative;
    margin-right: 30px;

    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 100%;
      display: block;
      border-bottom: 1px solid var(--white);
    }
  }

  .blog__item__title--sub span:last-child {
    color: var(--darkgrey);
  }

  .blog__item__title--main {
    pointer-events: auto;
    position: relative;
    display: block;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    font-family: 'Apoc';
    text-transform: uppercase;
    max-width: 43vw;
    margin-left: 45px;
    z-index: 2;
  }

  .blog__item__title--main span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .blog__item__title--main span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    .blog__item__title--main {
      margin-left: 0;
      max-width: 27vw;
    }
  }

  @media (min-width: 1024px) {
    .blog__item__title--main {
      font-size: 3.93vw;
      line-height: 109%;
    }

    .blog__item__title--main span span {
      transform: translateY(100%);
    }
  }

  .blog__item__title--main::before {
    content: attr(data-id);
    position: absolute;
    font-size: 20px;
    left: -45px;
    font-family: 'Aeonik';
    font-weight: 400;
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (min-width: 1024px) {
    .blog__item__title--main::before {
      left: -66px;
      font-size: 28px;
      opacity: 0;
    }
  }

  &.scrolled .blog__item__title--main::before {
    opacity: 1;
  }

  .blog__item__visual {
    position: absolute;
    right: 0;
    height: var(--col2g);
    width: var(--col2g);
    display: flex;
    justify-content: center;
    pointer-events: auto;
    margin-bottom: 1rem;
    mask-image: ${(props) => `url(${props.icon})`};
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    opacity: 1;
  }

  @media (min-width: 768px) {
    .blog__item__visual {
      height: var(--col3g);
      width: var(--col3g);
    }
  }

  @media (min-width: 1024px) {
    .blog__item__visual {
      opacity: 0;
    }
  }

  .blog__item__img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;
