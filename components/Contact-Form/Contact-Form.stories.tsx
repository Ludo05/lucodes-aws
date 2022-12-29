import React from 'react';
import ContactForm  from './Contact-Form';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { ContactFormProps } from '../../types';

export default {
    title: "ContactForm",
    component: ContactForm
} as ComponentMeta< typeof ContactForm>;

export const Template: ComponentStory<typeof ContactForm> = (props: ContactFormProps) => <ContactForm {...props} />;

Template.bind({})
