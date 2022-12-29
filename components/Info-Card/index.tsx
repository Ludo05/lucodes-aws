import React, { useState } from 'react';
import { CardContainer, CardImage, CardImgContainer } from '../styles/info-card.styled';


const InfoCard = ({ content: { img, contact, title } }: IInfoCard) => {
  const [hover, setHover] = useState(false);
  const addHoverLighting = () => {
    setHover(true);
    return;
  };
  return (
    <CardContainer hover={hover} onMouseOver={addHoverLighting}>
      <CardImgContainer>
        <CardImage src={img} alt={'connect'} />
      </CardImgContainer>
      <h3>{title}</h3>
      <p>{contact}</p>
    </CardContainer>
  );
};

export default InfoCard;
