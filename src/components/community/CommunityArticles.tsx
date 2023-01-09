import React from 'react';
import styled from 'styled-components';

import { communityArticles } from '../../utils/mockData';
import CommunityArticle from './CommunityArticle';

export default function CommunityArticles() {
  return (
    <Wrapper>
      <div className='community__articles__container'>
        <ul className='community__article__items'>
          {[...communityArticles].map((article) => (
            // @ts-ignore
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
  max-width: 100vw;
  overflow: hidden;

  .community__articles__container {
    padding: 0 var(--margin);
  }

  .community__article__items {
    display: block;
  }

  @media (min-width: 768px) {
    .community__article__items {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
