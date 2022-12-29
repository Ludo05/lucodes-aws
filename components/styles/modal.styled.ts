import styled from 'styled-components';
import { GREEN } from '../../theme';

const ModalBackground = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ButtonHolder = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  position: relative;
  height: 75vh;
  width: 50vw;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 5px 10px 8px #888888;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 7px;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: ${GREEN};
  }

  h1 {
    margin: 0;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  text-align: center;
  border: black solid 2px;

  p {
    color: black;
    flex-direction: row;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  @media (max-width: 800px) {
    p {
      font-size: 0.6rem;
    }
  }
`;

const ModalFooter = styled.div`
  display: flex;
`;

export { ModalBackground, ModalContainer, ModalBody, ModalFooter, ModalHeader, ButtonHolder };
