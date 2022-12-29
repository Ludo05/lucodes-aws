import React from 'react';
import styled from 'styled-components';
import { IMG_URI } from '../../constants/config';
import img from './arrow.svg';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  padding: 0.4rem;
  border-radius: 24px;
  background: beige;
  transition: all 500ms;
  transition-delay: 1s;
  margin: 2rem;

  &:hover {
    height: 200px;
    transform: scale(1.2);
  }
`;

const Vis = styled.p`
  opacity: 1;
  transition: all 300ms ease-in-out;
  transition-delay: 2s;
  color: black !important;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const TitleContainer = styled.div`
  border-radius: 12px;
  flex-direction: column;
  display: flex;
  padding: 10px;
  align-items: center;
  width: 95%;
  height: 95%;
  transition: all 500ms;
  transition-delay: 1s;

  ${Container}:hover & {
    background: beige;
  }
`;

const SVG = styled.img`
  width: 100%;
  overflow-y: hidden;
  opacity: 0;
  transition: all 500ms;
  transition-delay: 1.1s;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const ServiceCard = ({ title }: { title: string }) => {
  return (
    <Container>
      <TitleContainer>
        <Vis>{title}</Vis>
        <SVG src={IMG_URI + 'connect.svg'} alt={'accelerate'} />
      </TitleContainer>
    </Container>
  );
};

export default ServiceCard;
