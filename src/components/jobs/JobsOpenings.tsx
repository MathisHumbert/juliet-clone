import React from 'react';
import styled from 'styled-components';

export default function JobsOpenings() {
  return (
    <Wrapper>
      <div className='jobs__openings__container'>
        <div className='jobs__openings__intro'>
          <h2 className='jobs__opening__heading'>
            <span>
              <sub>Cureent</sub>
            </span>
            <span>
              <sub>Openings</sub>
            </span>
          </h2>
          <div className='jobs__openings_text'>
            <p>
              We’re always interested in meeting smart, kind, and creative
              individuals with a desire to love their audience like crazy. Is
              that you?
              <a>Introduce yourself</a>.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
