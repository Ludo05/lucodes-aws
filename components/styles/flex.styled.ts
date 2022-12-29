import styled from 'styled-components';
import { MOBILE } from '../../styles/theme';

type IPrime = {
  primary?: boolean;
  content?: string;
  margin?: string;
};

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ content }: IPrime) => (content ? content : 'flex-start')};
  align-items: center;
  color: ${({ primary }: IPrime) => (primary ? 'black' : 'white')};
  margin: ${({ margin }: IPrime) => (margin ? margin : null)};
  gap: 2rem;
  & > div,
  & > ul,
  & > section {
    flex: 1;
  }

  & > img {
    width: 50%;
  }

  li {
    color: white;
  }
  @media (max-width: ${MOBILE}) {
    display: flex;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
  }
`;
