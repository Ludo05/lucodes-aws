import styled from 'styled-components';
import { MOBILE, HEADER, ACCENT } from '../../theme';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-items: center;
  color: blue;

  p {
    color: #000000;
  }
  img {
    width: 100%;
    z-index: 9999;
  }

  & > *:nth-child(1) {
    flex: 4 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > *:nth-child(2) {
    flex: 0 0 50%;
    display: flex;
  }

  @media (max-width: ${MOBILE}) {
    width: 100%;
    flex-direction: column;
  }
`;

const CardSection = styled.section`
  padding: 40px 10px;
  display: flex;
  margin: 0 0 7rem 0;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

export const SectionArea = styled(Section)<TestColors>`
  h2 {
    color: ${HEADER};
  }

  p {
    color: ${ACCENT};
  }
  margin: 1rem 0 1rem 0;
  height: ${({ height }: TestColors) => height};
  background-color: ${({ color }: TestColors) => (color ? color : '#fff')};
`;
export { Section, CardSection };
