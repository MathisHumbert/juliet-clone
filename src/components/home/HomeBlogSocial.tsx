import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SplitType from 'split-type';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import useOnScreen from '../../utils/useOnScreen';

gsap.registerPlugin(CustomEase, ScrollTrigger);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function HomeBlogSocial() {
  const [animationDone, setAnimationDone] = useState(false);
  const [text, setText] = useState<HTMLElement[]>([]);

  const blogSocialRef = useRef(null);
  const blogSocialMainTitleRef = useRef(null);

  const onScreen = useOnScreen(blogSocialRef, 0.5);

  useEffect(() => {
    const scrollBlogContainer = document.querySelector(
      '.home__blog__scroll__item__container'
    );
    const homeBlogHeading = document.querySelector('.home__blog__heading');

    const blogHeadingButton = document.querySelector('.blog__heading__button');

    const title = new SplitType(blogSocialMainTitleRef.current!, {
      types: 'chars',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.chars!, {
      types: 'chars',
      tagName: 'span',
    });

    setText(subtitle.chars!);

    const tl = gsap.timeline();

    tl.to(homeBlogHeading, { xPercent: -30 }).to(
      blogHeadingButton,
      { opacity: 0 },
      0
    );

    ScrollTrigger.create({
      trigger: blogSocialRef.current,
      start: () =>
        `+=${
          scrollBlogContainer!.getBoundingClientRect().width! +
          window.innerWidth / 2
        } top`,
      end: () => `+=${window.innerWidth / 2}`,
      scrub: true,
      animation: tl,
    });
  }, []);

  useEffect(() => {
    if (animationDone || !onScreen) return;

    const blogSocialImages = document.querySelectorAll('.blog__social__img');

    setAnimationDone(true);

    const tl = gsap.timeline();

    tl.to(text, { y: 0, duration: 1, ease: 'text-in', stagger: 0.08 }, 0).to(
      blogSocialImages,
      {
        opacity: 1,
        top: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'fade-in',
      },
      1
    );
  }, [onScreen]);

  return (
    <Wrapper ref={blogSocialRef}>
      <div className='blog__social__container'>
        <h5 className='blog__social__title--sub'>
          <span>Follow us</span>
        </h5>
        <a
          href='/'
          className='blog__social__title--main'
          ref={blogSocialMainTitleRef}
        >
          @julietcreative
        </a>
        <div className='blog__social__images'>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-1.jpg'
              alt='blog-1'
              className='blog__social__img'
            />
          </figure>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-2.jpg'
              alt='blog-2'
              className='blog__social__img'
            />
          </figure>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-3.jpg'
              alt='blog-3'
              className='blog__social__img'
            />
          </figure>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-4.jpg'
              alt='blog-4'
              className='blog__social__img'
            />
          </figure>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-5.jpg'
              alt='blog-5'
              className='blog__social__img'
            />
          </figure>
          <figure className='blog__social__visual'>
            <img
              src='/img/blog-social-6.jpg'
              alt='blog-6'
              className='blog__social__img'
            />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;

  .blog__social__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .blog__social__title--sub {
    margin-bottom: 30px;
    font-size: 21px;
    line-height: 21px;
    min-height: 21px;
    text-transform: uppercase;
    z-index: 4;

    span {
      display: inline-block;
      font-family: Aeonik;
      font-weight: 400;
    }
  }

  .blog__social__title--main {
    display: block;
    font-size: 7.95vw;
    font-family: 'Apoc';
    font-weight: 300;
    letter-spacing: -0.025em;
    line-height: 120%;
    text-transform: uppercase;
    z-index: 4;
  }

  .blog__social__title--main span {
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    overflow: hidden;
    vertical-align: bottom;
  }

  .blog__social__title--main span span {
    display: block;
    padding-top: 22px;
    padding-bottom: 6px;
    transform: translateY(100%);
  }

  .blog__social__visual {
    position: absolute;
    margin-bottom: 1rem;
    transition: transform 5.5s cubic-bezier(0.07, 0.84, 0, 0.99);
  }

  .blog__social__visual {
    &:nth-child(1) {
      top: calc(50% - 4.76vw);
      left: 17.86vw;
      width: 6.6vw;
      height: 5.79vw;
    }

    &:nth-child(2) {
      top: calc(50% - 6.19vw);
      left: 24.64vw;
      width: 13.33vw;
      height: 11.73vw;
    }

    &:nth-child(3) {
      top: calc(50% - 12.02vw);
      left: 38.04vw;
      width: 13.27vw;
      height: 11.61vw;
      z-index: 3;
    }

    &:nth-child(4) {
      top: calc(50% - 4.76vw);
      left: 50.83vw;
      width: 13.57vw;
      height: 11.9vw;
      z-index: 2;
    }

    &:nth-child(5) {
      top: calc(50% - 9.89vw);
      left: 61.9vw;
      width: 13.51vw;
      height: 11.85vw;
    }

    &:nth-child(6) {
      top: calc(50% - 6.49vw);
      left: 76.73vw;
      width: 6.6vw;
      height: 5.79vw;
    }
  }

  .blog__social__img {
    display: block;
    width: 100%;
    height: inherit;
    object-fit: cover;
    opacity: 0;
    position: relative;
    top: 40px;
  }

  .blog__social__title--main:hover
    + .blog__social__images
    .blog__social__visual {
    &:nth-child(1) {
      transform: translate(2.68vw, -11.96vw);
    }

    &:nth-child(2) {
      transform: translate(-14.88vw, 12.56vw);
    }

    &:nth-child(3) {
      transform: translate(-3.69vw, -9.05vw);
    }

    &:nth-child(4) {
      transform: translate(-0.83vw, 14.94vw);
    }

    &:nth-child(5) {
      transform: translate(13.57vw, -8.04vw);
    }

    &:nth-child(6) {
      transform: translate(-1.31vw, 16.01vw);
    }
  }
`;
