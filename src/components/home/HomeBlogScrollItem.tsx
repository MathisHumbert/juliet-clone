import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import useOnScreen from '../../utils/useOnScreen';

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
};

export default function HomeBlogScrollItem({
  id,
  mainTitle,
  subTitleText,
  subTitleDate,
  img,
  icon,
}: Props) {
  const [animationDone, setAnimationDone] = useState(false);
  const [text, setText] = useState<HTMLElement[]>([]);

  const scrollItemRef = useRef(null);
  const scrollItemMainTitleRef = useRef(null);
  const scrollItemSubTitleRef = useRef(null);
  const scrollItemVisualRef = useRef(null);

  const onScreen = useOnScreen(scrollItemRef, 0.5);

  useEffect(() => {
    const title = new SplitType(scrollItemMainTitleRef.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });

    setText(subtitle.words!);
  }, []);

  useEffect(() => {
    if (animationDone || !onScreen) return;

    setAnimationDone(true);

    const tl = gsap.timeline();

    tl.to([scrollItemSubTitleRef.current, scrollItemVisualRef.current], {
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: 'fade-in',
    }).to(text, { y: 0, duration: 1, ease: 'text-in', stagger: 0.08 }, 0);
  }, [onScreen]);

  return (
    <Wrapper
      className={
        onScreen
          ? 'home__blog__scroll__item scrolled'
          : 'home__blog__scroll__item'
      }
      icon={icon}
      placeBot={id % 2 === 1}
      ref={scrollItemRef}
    >
      <a href='/'>
        <h6 className='scroll__item__title--sub' ref={scrollItemSubTitleRef}>
          <span>{subTitleText}</span>
          <span>{subTitleDate}</span>
        </h6>
        <h3
          className='scroll__item__title--main'
          data-id={`0${id}`}
          ref={scrollItemMainTitleRef}
        >
          {mainTitle}
        </h3>
        <figure
          className='scroll__item__visual'
          data-icon={icon}
          ref={scrollItemVisualRef}
        >
          <img src={img} alt={mainTitle} className='scroll__item__img' />
        </figure>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ icon: string; placeBot: boolean }>`
  min-width: var(--col9-g);
  margin-right: var(--col1);
  list-style-type: none;

  a {
    display: block;
    min-height: var(--col3g);
    width: 100%;
    position: relative;
    pointer-events: none;
    padding-left: 66px;
    padding-top: ${(props) => (props.placeBot ? '14.4vw' : '2.25vw')};
  }

  .scroll__item__title--sub {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    margin-bottom: 30px;
    pointer-events: auto;
    font-weight: 400;
    opacity: 0;
  }

  .scroll__item__title--sub span:first-child {
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

  .scroll__item__title--sub span:last-child {
    color: var(--darkgrey);
  }

  .scroll__item__title--main {
    pointer-events: auto;
    position: relative;
    display: block;
    font-size: 3.93vw;
    line-height: 109%;
    font-weight: 400;
    font-family: 'Apoc';
    text-transform: uppercase;
    max-width: 26vw;
  }

  .scroll__item__title--main span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
  }

  .scroll__item__title--main span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(100%);
  }

  .scroll__item__title--main::before {
    content: attr(data-id);
    position: absolute;
    left: -66px;
    font-size: 28px;
    font-family: 'Aeonik';
    font-weight: 400;
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &.scrolled .scroll__item__title--main::before {
    opacity: 1;
  }

  .scroll__item__visual {
    position: absolute;
    right: 0;
    height: var(--col3g);
    width: var(--col3g);
    display: flex;
    justify-content: center;
    pointer-events: auto;
    margin-bottom: 1rem;
    mask-image: ${(props) => `url(${props.icon})`};
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    opacity: 0;
  }

  .scroll__item__img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;
