import styled, { css } from 'styled-components';
import { GREEN, WHITE } from '../../theme';

const Input = styled.input<any>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 3px;
  line-height: 20px;
  width: 90%;
  ::placeholder {
    color: grey;
  }
`;

const TextArea = styled.textarea<any>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 3px;
  resize: none;
  width: 90%;
  ::placeholder {
    color: grey;
  }
`;

const InputContainer = styled.div``;

const InputButton = styled.a<any>`
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  background: ${GREEN};
  color: ${WHITE};
  ${(props: any) =>
    props.primary &&
    css`
      border: 2px solid ${GREEN};
      background: ${WHITE};
      color: ${GREEN};
    `}
`;

export { Input, InputButton, InputContainer, TextArea };
