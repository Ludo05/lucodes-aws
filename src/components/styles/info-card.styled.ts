import styled from 'styled-components';
import { ACCENT } from '../../theme';

const CardContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: all ease-in 100ms;

  &:hover,
  &:focus {
    box-shadow: 0 8px 8px -4px ${(props: any) => (props.hover ? ACCENT : 'transparent')};
  }

  p {
    margin: 0.5rem auto;
    font-size: 1rem;
    font-weight: 300;
  }
  h3 {
    text-decoration: none;
    margin: 0 auto;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: 13rem;
  }
`;

const CardImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%;
`;

export { CardContainer, CardImgContainer, CardImage };
