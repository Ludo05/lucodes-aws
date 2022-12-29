import styled from 'styled-components';
import { ACCENT, MOBILE, WHITE } from '../../styles/theme';

type IContainer = {
  ibackground?: string;
  backgroundColor?: string;
  height?: string;
  center?: boolean;
};
export const Container = styled.div`
  min-width: 100%;
  padding: 50px 3rem;
  margin: 0;
  background: ${({ ibackground }: IContainer) => (ibackground ? ibackground : '')};
  justify-content: ${({ center }: IContainer) => (center ? 'center' : 'flex-start')};
  height: ${({ height }: IContainer) => (height ? height : '')};
  background-color: ${({ backgroundColor }: IContainer) => (backgroundColor ? backgroundColor : '')};
  scroll-snap-align: center;

  p {
    color: ${WHITE};
  }
  h3 {
    width: 100%;
    text-decoration: none;
    text-align: center;
  }

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    margin: 0 auto;
    display: flex;
  }
`;
export const Span = styled.span`
  color: ${ACCENT};
`;
