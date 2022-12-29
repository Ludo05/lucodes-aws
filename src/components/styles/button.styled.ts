import styled, { css } from 'styled-components';
import { ACCENT, MOBILE, TEXT } from '../../theme';

type IButton = {
  primary?: boolean;
  shine?: boolean;
};

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  border-radius: 2px;
  font-weight: 900;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem 0.5rem 0;
  width: 11rem;
  background: none;
  color: ${ACCENT};
  border: 2px solid #f2994a;
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: #f2994a;
    color: white;
  }

  ${({ primary }: IButton) =>
    primary &&
    css`
      background: ${ACCENT};
      color: ${TEXT};

      &:hover {
        background: transparent;
        color: ${ACCENT};
      }
    `}

  ${({ shine }: IButton) =>
    shine &&
    css`
      box-shadow: -16.0895px 24.1342px 36.6483px rgba(242, 153, 74, 0.2);

      &:hover {
        transition: all 300ms;
        box-shadow: none;
      }
    `}
}
  
    @media (max-width: ${MOBILE}) {
      margin:  1rem 0 0.2rem 0;
    }
`;

const SmallIconButton = styled.button`
  display: inline-block;
  border-radius: 7px;
  font-weight: 900;
  padding: 0.5rem 0;
  color: black;
  width: 1.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
`;

export { Button, SmallIconButton };
