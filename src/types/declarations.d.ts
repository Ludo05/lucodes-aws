declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module 'express-cors-anywhere';

interface ILongCard {
  item: {
    id: any;
    title: any;
    body: any;
    image: any;
  };
  animation?: string;
}

interface IColors {
  header: string;
  body: string;
  footer: string;
}

interface ITheme {
  colors: IColors;
  mobile: string;
}

type IForm = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
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

type IContactNames = 'name' | 'email' | 'message';

type IContactForm = Record<IContactNames, string>;

type TestColors = {
  height?: string;
  color?: string;
};
