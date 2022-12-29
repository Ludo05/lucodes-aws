import React from 'react';
import { TopHeader } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { AbsoluteContainer } from './components/styles/absolute-container.styled';

type ITemplate = {
  children: JSX.Element | JSX.Element[];
  toggle?: boolean;
  upperColour?: boolean;
};

const Template: React.FC<ITemplate> = ({ children, upperColour }) => {
  return (
    <>
      <TopHeader header={upperColour} />
      <AbsoluteContainer>{children}</AbsoluteContainer>
      <Footer />
    </>
  );
};

export default Template;
