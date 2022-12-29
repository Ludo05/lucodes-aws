import React, { useState } from 'react';
import { Button } from '../styles/button.styled';
import { ContactContainer, FormInputs, SuccessBanner } from '../styles/contact-form.styled';
import { Input, TextArea } from '../styles/input.styled';
// import sendEmail from '../../utilities/requests/contacts/index';
// import { ContactFormProps } from '../../types';

export default function ContactForm({ onChange, state }: any) {
  const [success, setSuccess] = useState<number>(0);

  const onClick = async () => {
    // const response = await sendEmail(state);
    // if (response === 200) {
    //   setSuccess(1);
    //   return;
    // } else {
    //   setSuccess(-1);
    //   return;
    // }
  };

  // const text = success === 1 ? 'sent' : success === -1 ? 'error' : '';

  return (
    <ContactContainer>
      <FormInputs>
        <SuccessBanner success={success}>
          {/*<p>{text}</p>*/}
        </SuccessBanner>
        <p className={'.light-blue'}>We would love to hear from you</p>
        <Input name={'name'} placeholder="Name..." value={state.name} onChange={onChange} />
        <Input
          data-testid={'email'}
          name={'email'}
          type={'email'}
          placeholder={'Email...'}
          value={state.email}
          onChange={onChange}
        />
        <TextArea rows={10} placeholder={'Message...'} name={'message'} value={state.message} onChange={onChange} />
        <Button primary={false} onClick={() => onClick}>
          Submit
        </Button>
      </FormInputs>
    </ContactContainer>
  );
}
