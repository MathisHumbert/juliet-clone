import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePage from '../../context/PageContext';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  href: string;
  hideNav?: boolean;
  children: React.ReactNode;
};

export default function TransitionLink({
  href,
  hideNav = false,
  ...props
}: Props) {
  const navigate = useNavigate();
  const { resetPageLoaded, activePageTransition, lenis } = usePage();
  const { children } = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    resetPageLoaded();
    activePageTransition();
    gsap.killTweensOf('*');
    lenis?.stop();

    gsap.to('.transition__container', {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.2,
      ease: 'power1.easeOut',
      onComplete: () => {
        if (hideNav) {
          const menu = document.querySelector('.menu')!;
          const menuNav = document.querySelector('.menu__nav');
          const menuBackground = document.querySelector('.menu__background');
          const menuButtonClose = document.querySelector(
            '.menu__button__close'
          );
          const menuVideo = document.querySelector('.menu__video');

          menu.classList.remove('menu--open');
          gsap.set([menuBackground, menuButtonClose, menuVideo, menuNav], {
            opacity: 0,
          });
          gsap.set(menu, { background: 'transparent' });

          setTimeout(() => {
            navigate(href);
          }, 300);
        } else {
          navigate(href);
        }
      },
    });
  };

  return <>{React.cloneElement(children as any, { onClick: handleClick })}</>;
}
