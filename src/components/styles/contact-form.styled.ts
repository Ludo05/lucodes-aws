import styled from 'styled-components';
import { Button } from './button.styled';
import { MOBILE } from '../../theme';

type ISuccess = {
  success: number;
};

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  background-size: cover;
  padding: 9rem 0;

  img {
    display: none;
  }

  @media (max-width: ${MOBILE}) {
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: flex-end;

    img {
      display: block;
      margin-right: auto;
      width: 50%;
    }
  }
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(164, 214, 237, 0.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  padding: 2rem 1rem;
  width: 50%;
  max-width: 700px;
  min-width: 440px;

  border-radius: 8px;
  margin: auto;

  p {
    margin: auto;
  }

  @media (max-width: 700px) {
    margin: 1rem;
    max-width: 550px;
  }
`;
const SubmitButton = styled(Button)``;

const SuccessBanner = styled.div<ISuccess>`
  width: 40%;
  border-radius: 8px;
  padding: 0.3rem 0;
  color: white;
  background-color: ${(props: ISuccess) =>
    props.success === 1 ? 'green' : props.success === -1 ? 'red' : 'transparent'};

  p {
    text-align: center;
    color: ${(props: ISuccess) => (props.success === 0 ? 'transparent' : 'white')};
  }
`;

export { FormInputs, ContactContainer, SubmitButton, SuccessBanner };
