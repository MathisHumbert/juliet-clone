import React from 'react';
import styled from 'styled-components';

import { communityArticles } from '../../utils/mockData';
import CommunityArticle from './CommunityArticle';

export default function CommunityArticles() {
  return (
    <Wrapper>
      <div className='community__articles__container'>
        <ul className='community__article__items'>
          {communityArticles.map((article) => (
            <CommunityArticle key={article.id} {...article} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  pointer-events: auto;
  padding-bottom: 15px;

  .community__articles__container {
    padding: 0 var(--margin);
  }
`;
