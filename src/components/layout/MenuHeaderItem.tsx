import styled from 'styled-components';

type Props = {
  id: number;
  text: string;
  infiniteText: string;
};

export default function MenuHeaderItem({ id, text, infiniteText }: Props) {
  return (
    <Wrapper className='menu__nav__item'>
      <a href='/' className='menu__nav__link'>
        <div className='menu__nav__title'>
          <span className='menu__nav__title--sub'>0{id}</span>
          <span className='menu__nav__title--main'>{text}</span>
        </div>
        <div className='menu__nav__infinite'>
          <p>{infiniteText}</p>
        </div>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  list-style-type: none;
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
  }

  .menu__nav__title {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 300;
    position: relative;
    padding-top: 22px;
    padding-bottom: 6px;
    margin-top: -22px;
    margin-bottom: -6px;
    margin-bottom: 3vw;
  }

  @media (min-width: 900px) {
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
    }
  }

  .menu__nav__title--sub {
    position: absolute;
    top: calc(1.4vw + 22px);
    font-size: 14px;
    pointer-events: none;
  }

  @media (min-width: 900px) {
    .menu__nav__title--sub {
      font-size: 18px;
    }
  }

  .menu__nav__infinite {
    display: none;
    position: absolute;
    top: 0;
    opacity: 0;
    text-transform: uppercase;
    font-family: Aeonik;
    animation: 270s linear infinite reverse infiniteText;
    animation-play-state: paused;

    p {
      font-size: 6.191vw;
      line-height: 106.5%;
      white-space: pre;
    }
  }

  @media (min-width: 900px) {
    .menu__nav__infinite {
      display: flex;
    }
  }

  .menu__nav__title:hover + .menu__nav__infinite {
    opacity: 1;
    animation-play-state: running;
  }

  @keyframes infiniteText {
    0% {
      -webkit-transform: translate3d(-200%, 0, 0);
      transform: translate3d(-200%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(00%, 0, 0);
      transform: translate3d(00%, 0, 0);
    }
  }
`;
