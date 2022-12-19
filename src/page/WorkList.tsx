import React from 'react';
import styled from 'styled-components';
import WorkListItem from '../components/workList/WorkListItem';

import { workListItem } from '../utils/mockData';

export default function WorkList() {
  return (
    <Wrapper>
      <div className='work__list__container'>
        <ul className='work__list'>
          {workListItem.map((item) => (
            <WorkListItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;
  padding-top: var(--padding-top);
  padding-bottom: 120px;

  .work__list__container {
    padding: 0 var(--margin);
    min-height: 100%;
  }
`;
