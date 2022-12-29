import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';
import { paths } from '../../constants/paths';

type IMenu = {
  update: number | null;
};
const Menu = styled.div<IMenu>`
  height: 100vh;
  display: flex;
  align-items: center;
  transition: all ease-in-out 500ms;

  #menu-background-image {
    height: 100%;
    width: 100%;

    background-image: url('https://raw.githubusercontent.com/ludo05/photos/main/backie.jpeg');

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-position: ${({ update }: IMenu) => {
      if (update === 0) return 'center 45%;';
      if (update === 1) return 'center 50%;';
      if (update === 2) return 'center 75%;';
      if (update === 3) return 'center 100%;';
      return 'center 40%';
    }};
    background-size: 110vmax;
    opacity: 0.15;

    transition: background-size 800ms ease, background-position 800ms ease, opacity 800ms ease;
  }

  .menu-items:hover ~ #menu-background-image {
    background-size: 100vmax;
    opacity: 0.1;
  }

  #menu-item-background-pattern {
    height: 100vh;
    width: 100vw;

    background-image: radial-gradient(rgba(205, 255, 255, 0.1) 9%, transparent 9%);
    background-position: ${({ update }: IMenu) => {
      if (update === 0) return '0% 25%;';
      if (update === 1) return '0% 50%;';
      if (update === 2) return '0% 75%;';
      if (update === 3) return '0% 100%;';
      return '0 0';
    }};
    background-size: 12vmin 12vmin;
    transition: background-size 800ms ease, opacity 800ms ease, background-position 800ms ease;

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .menu-items:hover ~ #menu-item-background-pattern {
    background-size: 11vmin 11vmin;

    opacity: 0.5;
  }

  .menu-item {
    color: white;
    font-size: clamp(3rem, 8vw, 8rem);
    font-family: 'Oswald', sans-serif;
    cursor: pointer;

    display: block;
    text-decoration: none;
    padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
    transition: opacity ease 400ms;
  }

  .menu-items {
    margin-left: clamp(4rem, 20vw, 48rem);
    position: relative;
    z-index: 2;
  }

  .menu-items:hover > .menu-item {
    opacity: 0.3;
  }
  .menu-items:hover > .menu-item:hover {
    opacity: 1;
  }

  .icon {
    position: absolute;
    top: 50px;
    left: -430px;
    color: #fff;
    cursor: pointer;
    z-index: 10;
  }
`;

export type NewnavProps = {
  show: boolean;
  setNavOpen: (prevState: any) => void;
};

// @ts-ignore
export const NewNav: FC<NewnavProps> = ({ show, setNavOpen }) => {
  let menu: HTMLElement | null;
  const [update, setUpdate] = useState<number | null>(null);

  const preventScroll = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    return false;
  };

  React.useEffect(() => {
    menu = document.getElementById('menu');
    Array.from(document.getElementsByClassName('menu-item')).forEach((item: Element, index: number) => {
      item.addEventListener('mouseover', () => {
        if (menu) {
          setUpdate(index);
        }
      });
    });

    if (menu) {
      menu.addEventListener('wheel', preventScroll);
    }
  }, [update, show]);

  const toggleMenu = () => setNavOpen!((prevState: boolean) => !prevState);

  if (show) {
    return (
      <>
        <Menu id="menu" update={update}>
          <VscChromeClose onClick={toggleMenu} className={'icon'} size={50} />
          <div className="menu-items">
            <a className={'menu-item'} href={paths.HOME}>
              Home
            </a>
            <a className={'menu-item'} href={paths.CASE_STUDIES}>
              Studies
            </a>
            <a className={'menu-item'} href={paths.SERVICE}>
              Service
            </a>
            <a className={'menu-item'} href={paths.BLOG}>
              Blog
            </a>
            <a className={'menu-item'} href={paths.CONTACT}>
              Contact
            </a>
          </div>
          <div id="menu-item-background-pattern" />
          <div id="menu-background-image" />
        </Menu>
      </>
    );
  }
};
