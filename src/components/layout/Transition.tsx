import styled from 'styled-components';

import FlowerLogo from '../shared/logo/FlowerLogo';

export default function Transition() {
  return (
    <Wrapper className='transition__container'>
      <span>
        <FlowerLogo />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  z-index: 1000;
  opacity: 0;
  pointer-events: 'none';

  span {
    display: block;
  }

  svg {
    width: 7.3vw;
    animation: 3s linear infinite forwards flowerRotate;

    path {
      fill: #343434;
    }
  }

  @keyframes flowerRotate {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
