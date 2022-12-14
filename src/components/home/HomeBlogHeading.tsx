import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function HomeBlogHeading() {
  const trackingBarContainerRef = useRef(null);
  const trackingBarRef = useRef(null);

  useEffect(() => {});

  return (
    <Wrapper>
      <h2 className='blog__heading__title'>
        <span className='blog__heading__title--main'>Juliet X</span>
        <span className='blog__heading__title--sub'>Community</span>
      </h2>
      <span className='tracking__bar__container' ref={trackingBarContainerRef}>
        <div className='tracking__bar' ref={trackingBarRef}></div>
      </span>
      <a href='/' className='blog__heading__button'>
        <span className='infinite__text__container'>
          <span className='infinite__text'>
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +{' '}
          </span>
          <span className='infinite__text'>
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +
            VIEW ALL + VIEW ALL + VIEW ALL + VIEW ALL +{' '}
          </span>
        </span>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: calc((100vh - 27vw - 84px - 10px - 104px - 10px) / 2);
  width: 100%;
  padding-left: var(--col1);

  .blog__heading__title {
    text-align: left;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .blog__heading__title {
      margin-right: var(--col1);
    }
  }

  .blog__heading__title--main {
    font-size: 22px;
    line-height: 22px;
    display: block;
  }

  .blog__heading__title--sub {
    font-size: 20px;
    line-height: 25px;
    display: block;
    font-family: 'Apoc';
  }

  @media (min-width: 1024px) {
    .blog__heading__title--main {
      font-size: 38px;
      line-height: 36px;
    }

    .blog__heading__title--sub {
      font-size: 35px;
      line-height: 42px;
    }
  }

  .tracking__bar__container {
    height: 60px;
    width: 100%;
    display: flex;
    z-index: 10;
  }

  .tracking__bar {
    display: block;
    height: 100%;
    width: 1px;
    background: var(--white);
  }

  @media (min-width: 768px) {
    .tracking__bar__container {
      height: 120px;
    }
  }

  .blog__heading__button {
    position: absolute;
    top: 12px;
    right: var(--margin);
    width: 11.25vw;
    height: 60px;
    font-size: 21px;
    line-height: 60px !important;
    border: 1px solid var(--white);
    border-radius: 200px;
    overflow: hidden;
  }
`;
