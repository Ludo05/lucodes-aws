import React from 'react';

export type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  status: 'waiting' | 'success' | 'pending' | 'deleted';
  obj: object;
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  dict2: Record<string, any>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  // onChange: (id: number) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  // optional?: OptionalType;
  children: React.ReactNode; // best, accepts everything (see edge case below)
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
};

export type INews = {
  readonly title: string;
  url: string;
  imageurl: string;
  snippet: string;
  keywords: string;
  sources: string;
  publishedat: string;
  description: string;
};

export type ISlider = {
  url: string;
  border?: boolean;
};

export type IQueryData = {
  data: any;
};

export type IArrows = {
  $direction: string;
};

export type IIdeas = {
  summary: string;
  title: string;
  picture: any;
};

export type IInfoCard = {
  content: {
    img: string;
    contact: string;
    title?: string;
  };
};

