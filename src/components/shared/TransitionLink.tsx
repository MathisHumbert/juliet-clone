import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePage from '../../context/PageContext';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function TransitionLink({ href, ...props }: Props) {
  const navigate = useNavigate();
  const { activePageLoaded, resetPageLoaded, activePageTransition } = usePage();
  const { children } = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    resetPageLoaded();
    activePageTransition();
    navigate(href);
  };

  return <>{React.cloneElement(children as any, { onClick: handleClick })}</>;
}
