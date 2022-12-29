import React from 'react';
import styled from 'styled-components';

const DIVONE = styled.div`
  position: relative;
  margin: 0 0 1rem 6rem;
`;

const DIVTWO = styled.div`
  left: 220px;
  right: 18.68%;
  top: 600.43%;
  bottom: 27.49%;
  width: 286px;
  height: 357px;

  border-radius: 10px;
  background-color: #f2994a;
  box-shadow: -16.0895px 24.1342px 36.6483px rgba(245, 245, 6, 0.6);
`;

const DIVTHREE = styled.div`
  position: absolute;
  width: 232px;
  height: 225px;
  left: 20%;
  top: 30px;
  right: 0;
  bottom: -400px;

  background: #1d2067;
  box-shadow: -16.0895px 24.1342px 36.6483px rgba(0, 175, 250, 0.6);

  border-radius: 8.93861px;
`;

const DIVFOUR = styled.div`
  position: absolute;
  height: 220px;
  width: 220px;
  right: 160px;
  bottom: -10px;

  background: #13c296;
  //box-shadow: -16.0895px 24.1342px 36.6483px rgba(19, 194, 150, 0.6);
  border-radius: 10px;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
`;

const CardOnCard = () => {
  return (
    <Container>
      <DIVONE>
        <DIVTWO />
        <DIVTHREE />
        <DIVFOUR />
      </DIVONE>
    </Container>
  );
};

export default CardOnCard;
