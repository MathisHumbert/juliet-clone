import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';

import usePage from '../../context/PageContext';
import { aboutClients } from '../../utils/mockData';

gsap.registerPlugin(CustomEase);

CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

export default function AboutClients() {
  const { isPageLoaded } = usePage();
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    if (isPageLoaded) return;

    const images = document.querySelectorAll('.about__client__img');

    gsap.fromTo(
      images,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'fade-in',
        stagger: 0.1,
        scrollTrigger: {
          trigger: imagesRef?.current,
          start: 'top bottom',
        },
      }
    );
    gsap.fromTo(
      titleRef?.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'fade-in',
        scrollTrigger: {
          trigger: titleRef?.current,
          start: 'top bottom',
        },
      }
    );
  }, [isPageLoaded]);

  return (
    <Wrapper>
      <div className='about__clients__container'>
        <h5 className='about__clients__title' ref={titleRef}>
          Our Clients
        </h5>
        <div className='about__client__images' ref={imagesRef}>
          {aboutClients.map((item) => (
            <img
              src={item.img}
              alt={`client-${item.id}`}
              key={item.id}
              className='about__client__img'
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 60px 0;
  pointer-events: auto;

  .about__clients__container {
    padding: 0 var(--margin);
  }

  .about__clients__title {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-family: 'Apoc';
    font-weight: 400;
    margin-bottom: 60px;
    will-change: opacity;
  }

  .about__client__images {
    display: flex;
    flex-wrap: wrap;
  }

  .about__client__img {
    width: 50%;
    margin-bottom: 30px;
    will-change: opacity, transform;
  }

  @media (min-width: 768px) {
    .about__client__img {
      width: 25%;
      margin-bottom: 60px;

      &:last-child,
      &:nth-child(15),
      &:nth-child(14),
      &:nth-child(13) {
        margin-bottom: 0;
      }
    }
  }
`;
