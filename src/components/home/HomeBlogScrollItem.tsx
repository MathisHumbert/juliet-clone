import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import styled from 'styled-components';

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
  const scrollItemMainTitleRef = useRef(null);
  useEffect(() => {
    const title = new SplitType(scrollItemMainTitleRef.current!, {
      types: 'words',
      tagName: 'span',
    });

    const subtitle = new SplitType(title.words!, {
      types: 'words',
      tagName: 'span',
    });
  }, []);

  return (
    <Wrapper
      className='home__blog__scroll__item'
      icon={icon}
      placeBot={id % 2 === 1}
    >
      <a href='/'>
        <h6 className='scroll__item__title--sub'>
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
        <figure className='scroll__item__visual' data-icon={icon}>
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
  }

  .scroll__item__title--main::before {
    content: attr(data-id);
    position: absolute;
    left: -66px;
    font-size: 28px;
    font-family: 'Aeonik';
    font-weight: 400;
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
  }

  .scroll__item__img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;
