import React from 'react';
import styled from 'styled-components';

const IdeaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 0;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;
const IdeaPicture = styled.div`
  flex: 1;
  gap: 1rem;
  display: flex;
  margin: 1rem 0;

  h4 {
    margin: 0;
  }
`;
const PictureSize = styled.img`
  width: 25px;
`;
const TextBox = styled.div`
  flex: 1;

  p {
    width: 27ch;
  }
`;

export const Ideas = ({ summary, title, picture }: IIdeas): JSX.Element => {
  return (
    <IdeaContainer>
      <IdeaPicture>
        <PictureSize src={picture} alt={title} />
        <p className={'idea-title'}>{title}</p>
      </IdeaPicture>
      <TextBox>
        <p className={'idea-text'}>{summary}</p>
      </TextBox>
    </IdeaContainer>
  );
};
