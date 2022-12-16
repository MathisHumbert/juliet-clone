import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';

import HomeBlogHeading from './HomeBlogHeading';
import { homeBlogScrollItems } from '../../utils/mockData';
import HomeBlogItem from './HomeBlogItem';

gsap.registerPlugin(Draggable);

export default function HomeBlogDragg() {
  const blogDragRef = useRef(null);
  const blogDragItemContainerRef = useRef(null);

  useEffect(() => {
    const draggableInstance = Draggable.create(
      blogDragItemContainerRef.current,
      {
        type: 'x',
        bounds: blogDragRef.current,
        edgeResistance: 0.65,
        autoScroll: 1.5,
        lockAxis: true,
        throwProps: true,
      }
    );
  }, []);

  return (
    <Wrapper>
      <div className='home__blog__container'>
        <HomeBlogHeading isDesktop={false} />
        <div className='home__blog__dragg' ref={blogDragRef}>
          <ul
            className='home__blog__drag__item__container'
            ref={blogDragItemContainerRef}
          >
            {homeBlogScrollItems.map((item) => (
              <HomeBlogItem key={item.id} {...item} isDesktop={false} />
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .home__blog__dragg {
    overflow: hidden;
  }

  .home__blog__drag__item__container {
    padding-bottom: 60px;
    width: fit-content;
    display: flex;

    padding-left: var(--margin);
    position: relative;
    -webkit-overflow-scrolling: touch;

    li:nth-child(1) .blog__item__visual {
      top: 4vw;
      transform: rotate(-16.13deg);
    }

    li:nth-child(2) .blog__item__visual {
      top: 0;
      transform: rotate(-20.7deg);
    }

    li:nth-child(3) .blog__item__visual {
      top: 3vw;
      transform: rotate(-4.43deg);
    }

    li:nth-child(4) .blog__item__visual {
      top: 0.5vw;
      transform: rotate(-11.18deg);
    }

    li:nth-child(5) {
      margin-right: 0;
      .blog__item__visual {
        top: 3.5vw;
      }
    }
  }
`;
