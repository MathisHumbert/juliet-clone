import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import usePage from '../../context/PageContext';

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('bar-in', '0.65, 0, 0.35, 1');

type Props = {
  id: number;
  category: string;
  img: string;
  mask: string;
  title: string;
  date: string;
  size: string;
};

export default function CommunityArticle({
  id,
  category,
  img,
  mask,
  title,
  date,
  size,
}: Props) {
  const { isPageLoaded, isDesktop } = usePage();
  const articleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    if (isDesktop) {
      gsap.to(linkRef?.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        delay: id === 1 ? 0 : 0.2,
        scrollTrigger: {
          trigger: articleRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
        },
      });

      gsap.to(articleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        delay: id === 1 ? 0 : 0.2,
      });

      gsap.to(articleRef?.current, {
        '--height': '100%',
        scrollTrigger: {
          trigger: articleRef.current,
          start: 'top bottom-=200px',
          end: 'bottom+=200px bottom',
          scrub: 1,
        },
        onComplete: () => {
          if (id === 2 || id === 4) {
            gsap.to(articleRef?.current, {
              '--width': `${id === 2 ? 200 : 300}%`,
              duration: 1.3,
              delay: 0,
              ease: 'bar-in',
              onComplete: () => gsap.killTweensOf(articleRef?.current),
            });
          } else {
            gsap.killTweensOf(articleRef?.current);
          }
        },
      });
    } else {
      gsap.to(linkRef?.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        delay: id === 1 ? 0 : 0.2,
        scrollTrigger: {
          trigger: articleRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
        },
      });

      gsap.to(articleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        delay: id === 1 ? 0 : 0.2,
      });
    }
  }, [isPageLoaded]);

  return (
    <Wrapper
      icon={mask}
      pid={id}
      className={id === 1 ? `community__article dark` : `community__article`}
      ref={articleRef}
    >
      <a className='community__article__link' ref={linkRef}>
        <div className='community__article__top'>
          <figure
            className={
              size === 'large'
                ? 'community__article__visual large'
                : 'community__article__visual small'
            }
          >
            <img src={img} alt={title} className='communty__article__img' />
            <div className='looped__text'>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -</div>
            </div>
          </figure>
        </div>
        <div className='community__article__bottom'>
          <h5 className='category__article__category'>{category}</h5>
          <h4 className='category__article__title'>{title}</h4>
          <h5 className='category__article__juliet'>By: Juliet</h5>
          <h5 className='category__article__date'>{date}</h5>
        </div>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ icon: string; pid: number }>`
  list-style-type: none;
  color: var(--black);
  background: var(--white);
  position: relative;
  opacity: 0;
  will-change: opacity;

  &:hover .community__article__visual::after {
    opacity: 1;
  }

  &:hover .looped__text div {
    opacity: 1;
    animation-play-state: running !important;
  }

  &:last-child {
    display: none;
  }

  @media (min-width: 768px) {
    &:last-child {
      display: block;
      color: var(--white);

      figure {
        display: none;
      }
    }

    &:nth-child(1) {
      flex: 1;
      width: 100%;
    }

    &:nth-child(2),
    &:nth-child(3) {
      flex: 1;
      width: 50%;
    }

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      flex: 1;
      max-width: calc(100% / 3);
    }

    &:not(:first-child)::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      height: var(--height);
      border-left: 1px solid var(--black);
    }

    &:nth-child(3),
    &:nth-child(6) {
      &::after {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        height: var(--height);
        border-left: 1px solid var(--black);
      }
    }

    &:nth-child(2)::after,
    &:nth-child(4)::after {
      content: ' ';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: var(--width);
      border-top: 1px solid var(--black);
      z-index: 10;
    }
  }

  &.dark {
    color: var(--white);
    background: var(--black);
  }

  .community__article__link {
    display: block;
    position: relative;
    padding: 61px 15px 15px;
    border-left: 1px solid var(--black);
    border-right: 1px solid var(--black);
    border-top: 1px solid var(--black);
    border-bottom: ${(props) =>
      props.pid === 5 || props.pid === 1 ? '1px solid var(--black)' : 'none'};
    transform: translateY(40px);
    opacity: 0;
    will-change: transform, opacity;
  }

  @media (min-width: 768px) {
    .community__article__link {
      padding: 81px 30px 30px;
      border: none;
    }

    &.dark .community__article__link {
      padding: 30px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    &.dark .community__article__link div:first-child {
      margin-right: var(--gutter);
      padding: 80px calc(var(--col1-g) / 2);
    }

    &.dark .community__article__link div:last-child {
      display: flex;
      justify-content: center;
      flex: 1;
      width: 100%;
      padding-left: calc(var(--col1-g) / 2 + var(--gutter));
      position: relative;
    }
  }

  .community__article__top,
  .community__article__bottom {
    display: flex;
    flex-direction: column;
  }

  .community__article__visual {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
    mask-image: ${(props) => `url(${props.icon})`};
    mask-size: contain;
    mask-repeat: no-repeat;

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

    &.large {
      width: var(--grid);
      height: calc(var(--grid) * 0.58);
    }

    &.small {
      width: calc(var(--col2g) + var(--gutter));
      height: calc((var(--col2g) + var(--gutter)) * 0.86);
    }
  }

  @media (min-width: 768px) {
    .community__article__visual {
      &.large {
        width: var(--col5-g);
        height: calc(var(--col5-g) * 0.58);
      }

      &.small {
        width: calc((var(--grid) / 3) - 60px);
        height: calc((var(--grid) / 3) - 60px * 0.86);
      }
    }

    &.dark .community__article__visual {
      margin-bottom: 0;
    }
  }

  .communty__article__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  h5 {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .category__article__category {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  @media (min-width: 768px) {
    .category__article__category {
      position: absolute;
      top: 30px;
      left: 30px;
    }

    &.dark .category__article__category {
      top: 0;
      left: calc(var(--col1-g) / 2 + var(--gutter));
    }
  }

  @media (min-width: 768px) {
    &.dark .category__article__date {
      position: absolute;
      bottom: 0;
      left: calc(var(--col1-g) / 2 + var(--gutter));
    }
  }

  .category__article__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
  }

  &.dark .category__article__title {
    font-size: 40px;
    line-height: 40px;
  }

  @media (min-width: 768px) {
    &.dark .category__article__title {
      font-size: 20px;
      line-height: 25px;
    }
  }

  .category__article__juliet {
    margin-bottom: 15px;
  }

  .looped__text {
    width: 100%;
    height: 100%;
    display: none;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .looped__text {
      display: flex;
      align-items: center;
    }
  }

  .community__article__visual.small .looped__text div {
    transform: translateY(-100%);
  }

  .community__article__visual.big .looped__text div {
    transform: translateY(0);
  }

  .looped__text div {
    font-size: 4.375vw;
    letter-spacing: -0.04em;
    line-height: 114.29%;
    font-weight: 300;
    white-space: nowrap;
    color: var(--white);
    z-index: 100;
    opacity: 0;
    transition: opacity 0.6s ease-out;
    animation-play-state: paused !important;
  }
`;
