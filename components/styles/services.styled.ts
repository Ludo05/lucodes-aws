import styled from 'styled-components';
import { ACCENT, MOBILE } from '../../theme';

type IRight = {
  right?: boolean;
};

const Services = styled.div<IRight>`
  display: flex;
  justify-content: ${({ right }: IRight) => (right ? 'end' : 'start')};
  padding-top: 2rem;

  h1 {
    font-weight: 300;
    font-size: clamp(3rem, 10vw, 7rem);
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  p {
    margin: 2rem;
    color: white;
    font-size: 1.3rem;
    max-width: 75ch;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    display: flex;
  }
`;

const H3 = styled.h3`
  display: flex;
  justify-content: start;
  margin-top: 0;
  line-height: 2;
  text-transform: uppercase;
`;

const SecondaryImages = styled.div`
  max-width: 48.9%;
  display: flex;
  gap: 0.5em;

  @media (min-width: ${MOBILE}) {
  }
`;

const OrangeButton = styled.button`
  display: inline-block;
  border: 0;
  background: transparent;
  color: black;
  padding: 0.5em;
  font-size: 1.25em;
  cursor: pointer;
  border: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    background: ${ACCENT};
    height: 0.85em;
    width: 75%;
    left: 0;
    top: 50%;
    z-index: -1;
    transition: transform 175ms cubic-bezier(0.91, 0, 0.55, 1.64);
    transform-origin: bottom left;
  }

  &:hover:after,
  &:focus:after {
    transform: scale(1.4, 1.9);
  }
`;
export { Services, H3, SecondaryImages, OrangeButton };
