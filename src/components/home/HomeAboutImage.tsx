import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styled from 'styled-components';

export default function HomeAboutImage() {
  const homeAboutBackgroundRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: homeAboutBackgroundRef.current,
      start: 'top botoom',
      endTrigger: 'html',
      onEnter: () => {
        gsap.set(homeAboutBackgroundRef.current, { position: 'fixed' });
      },
      onLeaveBack: () => {
        gsap.set(homeAboutBackgroundRef.current, { position: 'absolute' });
      },
    });
  }, []);

  return (
    <Wrapper ref={homeAboutBackgroundRef}>
      <img
        src='/img/toronto-background.jpeg'
        alt='toronto-location'
        className='toronto__img'
      />
      <img
        src='/img/los-angeles-background.jpeg'
        alt='los-angeles-location'
        className='losangeles__img'
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  pointer-events: none;

  img {
    height: var(--vh100);
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 0.6s ease-out;
    width: 100%;
  }
`;
