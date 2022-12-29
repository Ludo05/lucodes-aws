import styled from 'styled-components';
import { MOBILE } from '../../theme';

//Add interfaces

export const StyledLongCard = styled.div<any>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }: any) => layout || 'row'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

export const IdeasGrid = styled.div<any>`
  display: grid;
  justify-content: center;
  padding: 4rem 0;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1079px) {
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    margin: auto;
    gap: 3rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
