import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import usePage from '../../context/PageContext';

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');

type Props = {
  id: number;
  category: string;
  img: string;
  mask: string;
  title: string;
  date: string;
};

export default function CommunityArticle({
  id,
  category,
  img,
  mask,
  title,
  date,
}: Props) {
  const { isPageLoaded } = usePage();
  const articleRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (!isPageLoaded) return;

    gsap.to(linkRef?.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'fade-in',
      delay: id === 1 ? 0 : 0.2,
      scrollTrigger: {
        trigger: articleRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        onEnter: () => console.log(`enter ${id}`),
      },
    });
  }, [isPageLoaded]);

  return (
    <Wrapper icon={mask} pid={id} ref={articleRef}>
      <a className='community__article__link' ref={linkRef}>
        <div>
          <figure className='community__article__visual'>
            <img src={img} alt={title} className='communty__article__img' />
            {/* <div className='looped__text'>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -&nbsp;</div>
              <div>Read more -</div>
            </div> */}
          </figure>
        </div>
        <div>
          <h5 className='category__article__category'>{category}</h5>
          <h4 className='category__article__title'>{title}</h4>
          <h5 className='category__article__juliet'>By: Juliet</h5>
          <h5 className='category__article__date'>{date}</h5>
        </div>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.li<{ icon: string; pid: number }>`
  list-style-type: none;
  color: ${(props) => (props.pid === 1 ? 'var(--white)' : 'var(--black)')};
  background: ${(props) => (props.pid === 1 ? 'var(--black)' : 'var(--white)')};

  .community__article__link {
    display: block;
    position: relative;
    padding: 61px 15px 15px;
    border-left: 1px solid var(--black);
    border-right: 1px solid var(--black);
    border-top: 1px solid var(--black);
    border-bottom: ${(props) =>
      props.pid === 5 || props.pid === 1 ? '1px solid var(--black)' : 'none'};
    transform: translateY(40px);
    opacity: 0;
    will-change: transform, opacity;
  }

  .community__article__link div {
    display: flex;
    flex-direction: column;
  }

  .community__article__visual {
    position: relative;
    display: block;

    width: ${(props) =>
      props.pid === 4 || props.pid === 5
        ? 'calc(var(--col2g) + var(--gutter))'
        : 'var(--grid)'};
    height: ${(props) =>
      props.pid === 4 || props.pid === 5
        ? 'calc((var(--col2g) + var(--gutter)) * 0.86)'
        : 'calc(var(--grid) * 0.58)'};
    margin: 0 auto;
    margin-bottom: 30px;
    mask-image: ${(props) => `url(${props.icon})`};
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  .communty__article__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  h5 {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .category__article__category {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .category__article__title {
    font-size: ${(props) => (props.pid === 1 ? '40px' : '20px')};
    line-height: ${(props) => (props.pid === 1 ? '40px' : '205x')};
    margin-bottom: 30px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: 'Apoc';
  }

  .category__article__juliet {
    margin-bottom: 15px;
  }
`;
