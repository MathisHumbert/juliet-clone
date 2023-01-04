import styled from 'styled-components';

export default function ImageCarousel() {
  return (
    <Wrapper>
      <div className='image__carousel__container'>
        <div className='image__carousel__inner'>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-1.jpg'
              alt='carousel-1'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-2.jpg'
              alt='carousel-2'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-3.jpg'
              alt='carousel-3'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-4.jpg'
              alt='carousel-4'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-5.jpg'
              alt='carousel-5'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-1.jpg'
              alt='carousel-1'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-2.jpg'
              alt='carousel-2'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-3.jpg'
              alt='carousel-3'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-4.jpg'
              alt='carousel-4'
              className='image__carousel__img'
            />
          </figure>
          <figure className='image__carousel__visual'>
            <img
              src='/img/carousel-5.jpg'
              alt='carousel-5'
              className='image__carousel__img'
            />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 10px;
  pointer-events: auto;

  @media (min-width: 768px) {
    padding-bottom: 20px;
  }

  .image__carousel__container {
    height: var(--col2-g);
    position: relative;
    width: 100vw;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .image__carousel__container {
      height: var(--col6-g);
    }
  }

  .image__carousel__inner {
    position: absolute;
    top: 0;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    animation: 30s linear infinite imageCarousel;
  }

  .image__carousel__visual {
    position: relative;
    display: block;
    width: var(--col2-g);
    width: var(--col2-g);
    margin-right: 20px;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .image__carousel__visual {
      width: var(--col6-g);
      width: var(--col6-g);
      margin-right: 20px;
    }
  }

  .image__carousel__img {
    display: block;
    width: 100%;
    height: var(--col2-g);
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .image__carousel__img {
      height: var(--col6-g);
    }
  }

  @keyframes imageCarousel {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;
