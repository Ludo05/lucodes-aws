import styled from 'styled-components';

type IDiv = {
  justifyContent?: string;
  flexDirection?: string;
  margin?: string;
  display?: string;
  alignItems?: string;
  padding?: string
}


export const Div = styled.div<IDiv>`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;
