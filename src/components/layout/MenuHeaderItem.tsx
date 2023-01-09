import styled from 'styled-components';
import TransitionLink from '../shared/TransitionLink';

type Props = {
  id: number;
  text: string;
  infiniteText: string[];
  href: string;
};

export default function MenuHeaderItem({
  id,
  text,
  infiniteText,
  href,
}: Props) {
  return (
    <Wrapper className='menu__nav__item'>
      {id === 6 ? (
        <a href={href} target='_blank' className='menu__nav__link'>
          <div className='menu__nav__title'>
            <span className='menu__nav__title--main' data-id={`0${id}`}>
              {text}
            </span>
          </div>
          <div className='looped__text'>
            {infiniteText.map((text, index) => (
              <div key={index}>{text}</div>
            ))}
          </div>
        </a>
      ) : (
        <TransitionLink href={href} hideNav>
          <a className='menu__nav__link'>
            <div className='menu__nav__title'>
              <span className='menu__nav__title--main' data-id={`0${id}`}>
                {text}
              </span>
            </div>
            <div className='looped__text'>
              {infiniteText.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
            </div>
          </a>
        </TransitionLink>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  list-style-type: none;
  height: 100%;
  overflow: hidden;

  &:nth-child(1) .menu__nav__title {
    margin-left: 28.8vw;
  }

  &:nth-child(2) .menu__nav__title {
    margin-left: 21.07vw;
  }

  &:nth-child(3) .menu__nav__title {
    margin-left: 8.1vw;
  }

  &:nth-child(4) .menu__nav__title {
    margin-left: 35.6vw;
  }

  &:nth-child(5) .menu__nav__title {
    margin-left: 23vw;
  }

  &:nth-child(6) .menu__nav__title {
    margin-left: 9.4vw;
    margin-bottom: 0;
  }

  &:nth-child(odd) .menu__nav__title--sub {
    left: -22px;
  }

  &:nth-child(even) .menu__nav__title--sub {
    right: -22px;
  }

  @media (min-width: 900px) {
    &:nth-child(1) .menu__nav__title {
      margin-left: 31.73vw;
    }

    &:nth-child(2) .menu__nav__title {
      margin-left: 40.71vw;
    }

    &:nth-child(3) .menu__nav__title {
      margin-left: 35.43vw;
    }

    &:nth-child(4) .menu__nav__title {
      margin-left: 40.71vw;
    }

    &:nth-child(5) .menu__nav__title {
      margin-left: 31.73vw;
    }

    &:nth-child(6) .menu__nav__title {
      margin-left: 24.94vw;
    }

    &:nth-child(odd) .menu__nav__title--sub {
      left: -48px;
    }

    &:nth-child(even) .menu__nav__title--sub {
      right: -48px;
    }
  }

  .menu__nav__link {
    pointer-events: none;
    position: relative;
    display: block;
    margin-bottom: 3vw;
  }

  .menu__nav__title {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 300;
    position: relative;
    display: inline-block;
    margin-top: -22px;
    margin-bottom: -6px;
    will-change: transform;
  }

  @media (min-width: 900px) {
    .menu__nav__link {
      margin-bottom: 0;
    }

    .menu__nav__title {
      margin-bottom: 0;

      &:hover {
        opacity: 0;
      }
    }
  }

  .menu__nav__title--main {
    font-size: 14.4vw;
    line-height: 90%;
    font-family: Apoc;
    display: inline-block;
    padding-top: 24px;
    padding-bottom: 6px;

    &::before {
      content: attr(data-id);
      position: absolute;
      left: -22px;
      top: calc(1.4vw + 22px);
      font-size: 14px;
      font-family: 'Aeonik';
      font-weight: 400;
      line-height: 100%;
    }
  }

  @media (min-width: 768px) {
    .menu__nav__title--main {
      font-size: 13vw;
      line-height: 90%;
    }
  }

  @media (min-width: 900px) {
    .menu__nav__title--main {
      font-size: 6.191vw;
      line-height: 106.5%;

      &::before {
        top: calc(1.4vw + 22px);
        font-size: 18px;
        left: -48px;
      }
    }
  }

  .looped__text {
    position: absolute;
    left: 0;
    opacity: 0;
    display: none;
    width: 100%;
    overflow: hidden;
    text-transform: uppercase;
    font-family: Aeonik;

    div {
      animation-play-state: paused;
      font-size: 6.191vw;
      line-height: 106.5%;
      white-space: pre;
    }
  }

  @media (min-width: 900px) {
    .looped__text {
      display: block;
    }
  }

  .menu__nav__title:hover + .looped__text {
    opacity: 1;

    div {
      animation-play-state: running;
    }
  }
`;
