import styled from 'styled-components';
import { MOBILE } from '../../styles/theme';

export const FooterStyled = styled.footer`
  background-color: #2581c1;
  color: #fff;
  padding: 20px 20px 20px 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }

  img {
    width: 6%;
    margin-left: 60px;
  }
  @media (max-width: ${MOBILE}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
