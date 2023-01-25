import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';

gsap.registerPlugin(CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  img: string;
  shape: string;
};

export default function AboutTeamItem({
  firstName,
  lastName,
  role,
  img,
  shape,
}: Props) {
  const { isPageLoaded } = usePage();
  const wrapperRef = useRef(null);
  const figureRef = useRef(null);

  useEffect(() => {
    if (isPageLoaded) return;

    gsap.fromTo(
      wrapperRef?.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'fade-in',
        scrollTrigger: {
          trigger: figureRef?.current,
          start: 'center bottom',
        },
      }
    );
  }, [isPageLoaded]);

  return (
    <Wrapper icon={shape} ref={wrapperRef}>
      <button className='about__team__item'>
        <figure className='about__item__figure' ref={figureRef}>
          <img src={img} alt='' className='about__item__img' />
        </figure>
        <h3 className='about__item__title'>
          <strong>{firstName}&nbsp;</strong>
          <br />
          <span>{lastName}</span>
        </h3>
        <p className='about__item__text'>{role}</p>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ icon: string }>`
  width: var(--col3-g);
  max-width: var(--col3-g);
  list-style-type: none;
  z-index: 3;

  .about__team__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about__item__figure {
    display: flex;
    justify-content: center;
    mask-image: ${(props) => `url(${props.icon})`};
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-bottom: 30px;
  }

  .about__item__img {
    width: var(--col3-g);
    height: calc(var(--col3-g) * 0.9);
    display: block;
    object-fit: cover;
  }

  .about__item__title {
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;

    br {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .about__item__title br {
      display: block;
    }
  }

  .about__item__title strong {
    font-size: 36px;
    line-height: 40px;
    font-weight: 400;
  }

  .about__item__title span {
    font-family: 'Apoc';
    font-weight: 300;
  }

  .about__item__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
  }
`;
