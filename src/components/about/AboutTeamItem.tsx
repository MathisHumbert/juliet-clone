import React from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  img: string;
  shape: string;
};

export default function AboutTeamItem({
  firstName,
  lastName,
  role,
  img,
  shape,
}: Props) {
  return (
    <Wrapper>
      <button className='about__team__item'>
        <figure className='about__item__figure'>
          <img src={img} alt='' className='about__item__img' />
        </figure>
        <h3 className='about__item__title'>
          <strong>{firstName}</strong>
          <span>{lastName}</span>
        </h3>
        <p className='about__item__text'>{role}</p>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.li``;
