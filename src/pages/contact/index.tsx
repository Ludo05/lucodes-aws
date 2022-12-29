import React, { useState } from 'react';
import Template from '../../components/Template';
import { card_content } from '../../data';
import Card from '../../components/Info-Card';
import { Container } from '../../components/styles/container.styled';
import { CardSection } from '../../components/styles/section.styled';
import { TextArea } from '../../components/styles/text.styled';
import { Flex } from '../../components/styles/flex.styled';
import ContactForm from '../../components/Contact-Form/Contact-Form';
import { IMG_URI } from '../../constants/config';
import { IInfoCard } from '../../types';
import { IContactForm } from '../../types/declarations';


const Cards = () => (
    <>
        {card_content.map(({ content: { contact, title, img } }: IInfoCard, index: number) => {
            return <Card key={index} content={{ contact, img, title }} />;
        })}
    </>
);

export default function Contact() {
    const [contactForm, setContactForm] = useState<IContactForm>({
        name: '',
        email: '',
        message: '',
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Template>
            <Container>
                <h3>Looking for work</h3>

                <h3>Get in touch</h3>
            </Container>
            <Flex primary content={'center'}>
                <img src={IMG_URI + 'illustration-flowing-conversation.svg'} alt={'message'} />
                <TextArea marginBottom={'4rem'}>
                    <h2>Hire us</h2>
                    <h5>We nurture digital transformations for next-stage brands.</h5>
                    <p>
                        Where would we be without our valued customers, we would love to hear from you. If you have any enquiries
                        about our services drop us an email below.
                    </p>
                </TextArea>
            </Flex>
            <CardSection>
                <Cards />
            </CardSection>
            <Container>
                <p style={{ maxWidth: '700px', margin: 'auto' }}>
                    Our team is highly responsive. We answer your every query and do our best to take care of all your problems.
                    We would love to chat with you, listen to your issues and answer all the questions that you have.{' '}
                </p>
            </Container>
            <ContactForm onChange={onChange} state={contactForm} />
        </Template>
    );
};

