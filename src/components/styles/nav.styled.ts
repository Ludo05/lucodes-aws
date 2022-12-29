import styled from 'styled-components';
import { ACCENT, WHITE } from '../../theme';
import Link from 'next/link'

type IMenu = {
  open: boolean;
};

export const NavContainer = styled.header`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  padding: ${({ open }: IMenu) => (open ? '4px 1px 1px 1px;' : '0')};
  background-color: transparent;
  transition: all 0.9ms step-start;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .button-one .line {
    animation: to-open-icon 1s forwards;
  }

  .button-one:hover .line {
    animation: to-close-icon 1s forwards;
  }

  .button-one .line.top {
    transform-origin: 30px 53px;
    --rotation: 45deg;
  }

  .button-one .line.bottom {
    transform-origin: 50px 55px;
    --rotation: -45deg;
  }

  @keyframes to-close-icon {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 79.9;
    }
    60% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    100% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
  }

  @keyframes to-open-icon {
    0% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
    40% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    60% {
      stroke-dashoffset: 79.9;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  span {
    height: 2px;
    width: 25px;
    background-color: ${WHITE};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const HamburgerTwo = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: ${({ open }: IMenu) => (open ? '4px 1px 1px 1px;' : '0')};
  border: ${({ open }: IMenu) => (open ? '0.5px solid black' : 'none')};
  border-radius: ${({ open }: IMenu) => (open ? '5px' : 'none')};
  background-color: transparent;
  transition: all 0.9ms step-start;

  button {
    background: transparent;
    border: none;
  }

  .button-one .line {
    animation: to-open-icon 1s forwards;
  }

  .button-one .hamburger .line {
    fill: white;
  }
  .button-one:hover .line {
    animation: to-close-icon 1s forwards;
  }

  .button-one .line.top {
    transform-origin: 30px 53px;
    --rotation: 45deg;
  }

  .button-one .line.bottom {
    transform-origin: 50px 55px;
    --rotation: -45deg;
  }

  @keyframes to-close-icon {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 79.9;
    }
    60% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    100% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
  }

  @keyframes to-open-icon {
    0% {
      stroke-dashoffset: 0;
      rotate: var(--rotation);
    }
    40% {
      stroke-dashoffset: 79.9;
      rotate: var(--rotation);
    }
    60% {
      stroke-dashoffset: 79.9;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  span {
    height: 2px;
    width: 25px;
    background-color: ${WHITE};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (min-width: 760px) {
    display: flex;
  }
`;

export const MenuLinks = styled(Link)`
  padding: 1rem 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none !important;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  &:hover {
    color: white;
  }
`;

export const Menu = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 760px) {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }: IMenu) => (open ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled.a`
  padding: 1rem 0;
  color: ${ACCENT};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.8rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  span:nth-child(2) {
    font-weight: 300;
    font-size: 1.3rem;
    color: white;
  }
}
`;
