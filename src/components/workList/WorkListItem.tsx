import React from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  mainTitle: string;
  subTitle: string;
  text: string;
  img: string;
  href: string;
};

export default function WorkListItem({
  id,
  mainTitle,
  subTitle,
  text,
  img,
  href,
}: Props) {
  return (
    <Wrapper>
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
        <div className='list__item__content__inner'>
          <a href={href} className='list__item__content__link'>
            <figure className='list__item__content__visual'>
              <span>
                <img
                  src={img}
                  alt={mainTitle}
                  className='list__item__content__img'
                />
              </span>
            </figure>
            <div className='list__item__content__info'>
              <h5 className='list__item__info__title'>{subTitle}</h5>
            </div>
            <button className='list__item__info__button'>
              <span>Read More </span>
            </button>
            <p className='list__item__info__text'>{text}</p>
          </a>
        </div>
      </div>
      <div className='list__item__bar'></div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  position: relative;
  padding-top: 30px;
  padding-bottom: 15px;
  list-style-type: none;

  .list__item__bar {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    border-bottom: 1px solid var(--black);
  }

  .list__item__content {
    position: relative;
    display: none;
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
    /* opacity: 0; */
    padding-top: 22px;
    padding-bottom: 6px;
  }

  .list__item__header__button {
    display: block;
    position: relative;
    font-size: 8.342vw;
    font-weight: 300;
    line-height: 8.342vw;
    padding-left: 4.582vw;
    font-family: 'Apoc';
  }

  .list__item__header__button:hover {
    font-size: 9.2vw;
    font-weight: 500;
    font-family: 'Aeonik';
    letter-spacing: -0.035em;
  }

  .list__item__header__button::before {
    content: attr(data-id);
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: 2.25vw;
    font-weight: 400;
    font-family: 'Aeonik';
    letter-spacing: normal;
    line-height: 100%;
  }
`;
