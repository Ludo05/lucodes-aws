import { IMG_URI } from './constants/config';
import {IIdeas, IInfoCard } from './types';

export const card_content: IInfoCard[] = [
  {
    content: {
      contact: 'contact@lucodes.co.uk',
      title: 'Email',
      img: IMG_URI + 'message.svg',
    },
  },
  {
    content: {
      contact: 'Hire me',
      title: 'Jobs',
      img: IMG_URI + 'arrow.svg',
    },
  },
  {
    content: {
      contact: 'Call us',
      title: 'Call',
      img: IMG_URI + 'connect.svg',
    },
  },
];

export const service_types: IIdeas[] = [
  {
    summary: 'You have the vision, we can bring it to life',
    title: 'Frontend Development',
    picture: IMG_URI + 'small_6.svg',
  },

  {
    summary: 'Put something here at some point',
    title: 'Backend Development',
    picture: IMG_URI + 'small_2.svg',
  },

  {
    summary: 'With continuous integration and development pushing prodution code will become much easier',
    title: 'DevOps',
    picture: IMG_URI + 'small_3.svg',
  },

  {
    summary: 'Ensure all edge cases are looked after so code is more robust in production',
    title: 'Testing',
    picture: IMG_URI + 'small_4.svg',
  },
  {
    summary: 'Automate your manual process for improved work rate',
    title: 'Automation',
    picture: IMG_URI + 'small_8.svg',
  },
];
