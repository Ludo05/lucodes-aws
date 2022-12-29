import React from 'react';
import { Span } from '../styles/container.styled';
import { Button } from '../styles/button.styled';
import styled from 'styled-components';
import { MOBILE } from '../../theme';
import { IMG_URI } from '../../constants/config';
import Link from 'next/link';

const UpdateContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  flex: 1 1 auto;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  padding: 40px;
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.15);

  
  
  @media (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 20;
  overflow: hidden;
  border-radius: 10px;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
export const Update = () => {
  return (
    <UpdateContainer>
      <img
        style={{ position: 'absolute', width: '100%' }}
        src={IMG_URI + 'background_support_image.png'}
        alt={'contact us background'}
      />
      <h1 style={{ marginBottom: '2rem' }}>
        <Span>Stay updated</Span>
      </h1>
      <p style={{ padding: '0 3rem', marginBottom: '2rem', width: '40ch', textAlign: 'center' }}>
        Stay tuned for the latest development updates. Sign up to our newsletter.
      </p>
      <form method={'post'} action={'/email'}>
        <InputContainer>
          <input
            style={{
              height: '50px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: 'none',
              padding: '0 1rem 0 1rem',
              margin: '0',
              fontSize: '15pt',
            }}
            placeholder={'your@email.com'}
          />
          <Button primary style={{ padding: '0', margin: '0' }}>
            <Link href='/mlm' />
            send
          </Button>
        </InputContainer>
      </form>
      <p style={{ textAlign: 'center' }}>No spam. Only releases, updates and discounts</p>
    </UpdateContainer>
  );
};
