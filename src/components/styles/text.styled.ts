import styled from 'styled-components';
import { H3_PURPLE_TEXT_COLOUR, H3_LIGHT_BLUE_TEXT_COLOUR, MOBILE, WHITE } from '../../theme';

type textProps = {
  dark: boolean;
};

const COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  BLUE: '#1ea7fd',
};

export const StyledInput = styled.input<textProps>`
  border: none;
  background-color: transparent;
  color: ${(props: textProps) => (props.dark ? COLORS.BLACK : COLORS.WHITE)};
  border-bottom: ${(props: textProps) => (!props.dark ? COLORS.BLUE : COLORS.BLUE)} 2px solid;
  box-shadow: 0 1px 0 0;
  width: 15rem;
  padding-bottom: 1rem;
  margin: 5px 0;
`;

export const StyledTextArea = styled.textarea<textProps>`
  border: none;
  background-color: transparent;
  color: ${(props: textProps) => (props.dark ? COLORS.BLACK : COLORS.WHITE)};
  border-bottom: ${(props: textProps) => (!props.dark ? COLORS.BLUE : COLORS.BLUE)} 2px solid;
  box-shadow: 0 1px 0 0;
  width: 15rem;
  padding-bottom: 1rem;
  margin: 5px 0;
  resize: vertical;
`;

type ITextArea = {
  marginBottom?: string;
};
export const TextArea = styled.div<ITextArea>`
  padding: 0 2rem;
  max-width: 40ch;
  margin-bottom: ${({ marginBottom }: ITextArea) => (marginBottom ? marginBottom : '0')};

  p {
    font-weight: 500;
    font-size: 1.2rem;
    color: ${WHITE};
  }

  h3 {
    text-align: start;
    margin: 1rem 0;
    font-weight: 900;
    color: ${H3_LIGHT_BLUE_TEXT_COLOUR};
  }

  @media (max-width: ${MOBILE}) {
    max-width: 80ch;
    font-size: 2rem;

    p {
      font-weight: 100;
      text-align: center;
      font-size: 1.2rem;
    }

    h3 {
      text-align: center;
      font-weight: 200;
    }

    h5 {
      font-weight: 600;
    }
  }
`;
