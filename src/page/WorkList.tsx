import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger } from 'gsap/all';

import usePage from '../context/PageContext';
import LoaderLayout from '../components/layout/LoaderLayout';
import WorkListItem from '../components/workList/WorkListItem';
import { workListItem } from '../utils/mockData';

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create('fade-in', '0.5, 1, 0.89, 1');
CustomEase.create('text-in', '0.25, 1, 0.5, 1');

export default function WorkList() {
  const { isPageLoaded } = usePage();
  const workListRef = useRef(null);

  useEffect(() => {
    const footer = document.querySelector('.footer');

    footer?.classList.add('dark', 'small');
  }, []);

  useEffect(() => {
    if (!isPageLoaded) return;

    const workListItems = gsap.utils.toArray(
      '.work__list__item'
    ) as HTMLLIElement[];

    let lastElement: { li: HTMLLIElement; content: HTMLDivElement } | null;
    let windowHeight = window.innerHeight;

    const onClick = (e: Event) => {
      // @ts-ignore
      const {
        li,
      }: {
        li: HTMLLIElement;
      } = e.target;

      const content = li.querySelector(
        '.list__item__content'
      ) as HTMLDivElement;
      const contentInner = li.querySelector(
        '.list__item__content__inner'
      )! as HTMLDivElement;
      const img = li.querySelector('.list__item__content__img');
      const title = li.querySelector('.list__item__info__title');
      const button = li.querySelector('.list__item__info__button');
      const text = li.querySelector('.list__item__info__text');

      const tl = gsap.timeline({
        defaults: { ease: 'fade-in', duration: 0.8 },
        onStart: () => {
          li.classList.add('active');

          if (lastElement) {
            lastElement.li.classList.remove('active');
            gsap.to(lastElement.content, {
              height: 0,
              duration: 0.4,
              ease: 'power1.inOut',
            });
          }

          lastElement = { li, content };
        },
        onComplete: () => {
          gsap.set(content, {
            height: 'auto',
          });
        },
      });

      const lastElementId = lastElement?.li.getAttribute('data-id');
      const id = li.getAttribute('data-id');

      if (lastElementId === id) {
        li.classList.remove('active');
        lastElement = null;

        return gsap.to(content, {
          height: 0,
          duration: 0.4,
          ease: 'power1.inOut',
        });
      }

      tl.to(content, {
        height: contentInner.offsetHeight,
        duration: 0.4,
        ease: 'power1.inOut',
      })
        .fromTo(
          img,
          {
            clipPath: 'polygon(0 0,100% 0,100% 0,0 0)',
            scale: 1,
          },
          { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' },
          0
        )
        .fromTo(img, { scale: 1 }, { scale: 1.1, duration: 1.6 }, 0)
        .fromTo(
          title,
          { opacity: 0, translateY: 40 },
          { opacity: 1, translateY: 0 },
          0
        )
        .fromTo(
          button,
          { opacity: 0, translateY: 40 },
          { opacity: 1, translateY: 0 },
          0.2
        )
        .fromTo(
          text,
          { opacity: 0, translateY: 40 },
          { opacity: 1, translateY: 0 },
          0.4
        );
    };

    workListItems.forEach((li, index) => {
      const bar = li.querySelector('.list__item__bar');
      const title = li.querySelector('.list__item__header span sub');

      if (li.getBoundingClientRect().top < windowHeight) {
        gsap.to(bar, {
          width: '100%',
          duration: 0.6,
          ease: 'power1.inOut',
          delay: index * 0.2,
        });

        gsap.to(title, {
          y: 0,
          duration: 1,
          ease: 'text-in',
          delay: index * 0.2 + 0.4,
        });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: li,
            start: 'top bottom',
          },
        });

        tl.to(bar, {
          width: '100%',
          duration: 0.6,
          ease: 'power1.inOut',
        }).to(
          title,
          {
            y: 0,
            duration: 1,
            ease: 'text-in',
          },
          0.4
        );
      }

      const button = li.querySelector(
        '.list__item__header__button'
      ) as HTMLButtonElement;
      // @ts-ignore
      button.li = li;

      button.addEventListener('click', onClick);
    });

    () => {
      workListItems.forEach((li) => {
        const button = li.querySelector(
          '.list__item__header__button'
        ) as HTMLButtonElement;

        button.removeEventListener('click', onClick);
      });
    };
  }, [isPageLoaded]);

  return (
    <LoaderLayout>
      <Wrapper ref={workListRef}>
        <div className='work__list__container'>
          <ul className='work__list'>
            {workListItem.map((item) => (
              <WorkListItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </Wrapper>
    </LoaderLayout>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;
  padding-top: var(--padding-top);
  padding-bottom: 120px;
  background: var(--white);

  .work__list__container {
    padding: 0 var(--margin);
    min-height: 100%;
  }
`;
