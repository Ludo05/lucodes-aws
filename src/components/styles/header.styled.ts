import styled, { css } from 'styled-components';
import { MOBILE } from '../../theme';

type IHeader = {
  headerColour?: boolean;
};

// #ABD2DD

export const Header = styled.header`
  background: ${(color: IHeader) => (color.headerColour ? 'black' : 'black')};
  padding: 0 3rem;
  h1 {
    color: #99efd0;
  }

  p {
    font-family: 'Raleway', sans-serif;
    color: white;
    font-weight: 400;
  }
`;

type ISHeader = {
  triangle?: boolean;
  addPadding?: boolean;
};

export const SHeader = styled.header`
  background-color: transparent;
  padding: ${(header: ISHeader) => (header.addPadding ? '40px 0 ' : '5px 0')};
  position: relative;

  ${(header: ISHeader) =>
    header.triangle &&
    css`
      ::after {
        content: '';
        position: absolute;
        left: 40%;
        top: 100%;
        width: 0;
        height: 0;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 40px solid rgba(104, 151, 187, 0.4);
        clear: both;
      }
    `}
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  padding: 3rem 0;
`;
