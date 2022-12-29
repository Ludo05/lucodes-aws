declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module 'express-cors-anywhere';

export interface ILongCard {
  item: {
    id: any;
    title: any;
    body: any;
    image: any;
  };
  animation?: string;
}

export interface IColors {
  header: string;
  body: string;
  footer: string;
}

export interface ITheme {
  colors: IColors;
  mobile: string;
}

export type IForm = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  onChange: (event: any) => void;
  state: IForm;
};

export type BlogCardProps = {
  img?: string;
  title?: string;
  body?: string;
  url: string;
  publish_date: string;
};

export type IContactNames = 'name' | 'email' | 'message';

export type IContactForm = Record<IContactNames, string>;

export type TestColors = {
  height?: string;
  color?: string;
};
