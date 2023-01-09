import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import ArrowLogo from '../shared/logo/ArrowLogo';

type Props = {
  id: number;
  mainTitle: string;
  subTitle: string;
  text: string;
  img: string;
  href: string;
};

gsap.registerPlugin(CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function WorkListItem({
  id,
  mainTitle,
  subTitle,
  text,
  img,
}: Props) {
  const workItemRef = useRef<HTMLLIElement>(null);
  const workItemSubTitleRef = useRef(null);
  const workItemTextRef = useRef(null);
  const workItemImgRef = useRef(null);
  const workItemSpanImgRef = useRef(null);
  const workItemButtonRef = useRef(null);

  useEffect(() => {
    new SplitType(workItemTextRef?.current!, {
      types: 'words',
      tagName: 'span',
    });
  }, []);

  const onMouseEnter = () => {
    const color = workItemRef?.current?.getAttribute('data-color');

    const nextColor = color === '#8566f6' ? '#ed7c50' : '#8566f6';

    gsap.set([workItemButtonRef?.current, workItemSubTitleRef?.current], {
      color: nextColor,
    });
    gsap.to(workItemSpanImgRef?.current, {
      scale: 1.05,
      duration: 1.6,
      ease: 'fade-in',
    });

    workItemRef?.current?.setAttribute('data-color', nextColor);
  };

  const onMouseLeave = () => {
    gsap.set([workItemButtonRef?.current, workItemSubTitleRef?.current], {
      color: '#282829',
    });

    gsap.to(workItemSpanImgRef?.current, {
      scale: 1,
      duration: 1.6,
      ease: 'fade-in',
    });
  };

  return (
    <Wrapper
      className='work__list__item'
      data-id={id}
      ref={workItemRef}
      data-color='#ed7c50'
    >
      <div className='list__item__header'>
        <span>
          <sub>
            <button
              className='list__item__header__button'
              data-id={`${id > 9 ? id : `0${id}`}`}
            >
              {mainTitle}
            </button>
          </sub>
        </span>
      </div>
      <div className='list__item__content'>
        <div className='list__item__content__wrapper'>
          <div className='list__item__content__inner'>
            <a
              className='list__item__content__link'
              // @ts-ignore
            >
              <figure
                className='list__item__content__visual'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <span ref={workItemSpanImgRef}>
                  <img
                    src={img}
                    alt={mainTitle}
                    className='list__item__content__img'
                    ref={workItemImgRef}
                  />
                </span>
              </figure>
              <div className='list__item__content__info'>
                <h5
                  className='list__item__info__title'
                  ref={workItemSubTitleRef}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {subTitle}
                </h5>
                <button
                  className='list__item__info__button'
                  ref={workItemButtonRef}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <span>
                    Read More <ArrowLogo />
                  </span>
                </button>
                <p className='list__item__info__text' ref={workItemTextRef}>
                  {text}
                </p>{' '}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='list__item__bar'></div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  position: relative;
  padding-top: 30px;
  padding-bottom: 0;
  list-style-type: none;

  @media (min-width: 1024px) {
    padding-bottom: 15px;
  }

  .list__item__bar {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    border-bottom: 1px solid var(--black);
  }

  .list__item__header {
    margin-bottom: 15px;
  }

  .list__item__header span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    position: relative;
    vertical-align: bottom;
    white-space: normal;
  }

  .list__item__header span sub {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(100%);
    will-change: transform;
  }

  .list__item__header__button {
    display: block;
    position: relative;
    font-size: 12.26vw;
    font-weight: 300;
    line-height: 91%;
    padding-left: 27px;
    font-family: 'Apoc';
    text-align: left;
  }

  @media (min-width: 1024px) {
    .list__item__header__button {
      font-size: 8.342vw;
      line-height: 8.342vw;
      padding-left: 4.582vw;
    }
  }

  .list__item__header__button:hover,
  &.active .list__item__header__button {
    font-size: 12.26vw;
    font-weight: 500;
    font-family: 'Aeonik';
    letter-spacing: -0.035em;
  }

  @media (min-width: 1024px) {
    .list__item__header__button:hover,
    &.active .list__item__header__button {
      font-size: 9.2vw;
    }
  }

  .list__item__header__button::before {
    content: attr(data-id);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 400;
    font-family: 'Aeonik';
    letter-spacing: normal;
    line-height: 100%;
  }

  @media (min-width: 1024px) {
    .list__item__header__button::before {
      font-size: 2.25vw;
    }
  }

  .list__item__content {
    position: relative;
    height: 0;
    overflow: hidden;
    will-change: height;
  }

  .list__item__content__inner {
    padding-bottom: 30px;
    will-change: height;
  }

  .list__item__content__link {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    pointer-events: none;
  }

  @media (min-width: 990px) {
    .list__item__content__link {
      flex-direction: row;
      align-items: center;
    }

    .list__item__content__inner {
      padding-bottom: 15px;
    }
  }

  .list__item__content__visual {
    width: var(--grid);
    margin-right: 0;
    margin-bottom: 30px;
    overflow: hidden;
    pointer-events: auto;

    span {
      display: block;
      transform: scale(1);
      will-change: clip-path, transform;
    }
  }

  .list__item__content__img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: calc(var(--grid) * 0.55);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    will-change: clip-path, transform;
  }

  @media (min-width: 990px) {
    .list__item__content__visual {
      width: var(--col6-g);
      margin-right: var(--col1-g);
      margin-bottom: 1rem;
    }

    .list__item__content__img {
      height: calc(var(--col6-g) * 0.55);
    }
  }

  .list__item__content__info {
    width: var(--col5-g);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .list__item__info__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 30px;
    font-family: 'Apoc';
    font-weight: 400;
    pointer-events: auto;
    will-change: opacity, transform;
  }

  @media (min-width: 1024px) {
    .list__item__info__title {
      font-size: 40px;
      line-height: 46px;
    }
  }

  .list__item__info__button {
    display: block;
    height: 30px;
    padding: 0 12px;
    border: 1px solid currentColor;
    border-radius: 136px;
    line-height: 30px;
    pointer-events: auto;
    will-change: opacity, transform;

    span {
      display: inline-block;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
    }

    svg {
      width: 23px;
      height: 12px;
      margin-left: 6px;
      fill: currentColor;

      path {
        stroke: currentColor;
      }
    }
  }

  @media (min-width: 1024px) {
    .list__item__info__button {
      height: 40px;
      padding: 0 14px;
      line-height: 40px;
    }
  }

  .list__item__info__text {
    position: absolute;
    bottom: 15px;
    display: none;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
    will-change: opacity, transform;

    span:not(:last-child) {
      &::after {
        content: ' / ';
      }
    }
  }

  @media (min-width: 1120px) {
    .list__item__info__text {
      display: block;
    }
  }
`;
