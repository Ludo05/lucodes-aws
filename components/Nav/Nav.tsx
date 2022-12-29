import React from 'react';
import { useState } from 'react';
import { NavContainer, Logo, Hamburger, Menu, MenuLinks, HamburgerTwo } from '../styles/nav.styled';
import { NewNav } from '../NewNav/NewNav';
import Link from 'next/link'
import useWidth from '../../hooks/useWidth';
import useHeight from '../../hooks/useHeight';
import { paths } from '../../constants/paths';

const Nav = ({ isSpread, toggleMenu }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useWidth();

  const toggle = () => setIsOpen((prevState) => !prevState);

  const Hammy = () => (
    <HamburgerTwo open={isSpread} onClick={toggleMenu}>
      <button className={'button-one'} aria-controls="primary-navigation" aria-expanded="false">
        <svg className="hamburger" viewBox={'0 0 100 100'} width={'30'}>
          <line
            className={'line top'}
            stroke={'black'}
            strokeWidth={'10'}
            strokeLinecap={'round'}
            strokeDasharray={'80'}
            strokeDashoffset={'0'}
            x1={'90'}
            x2={'10'}
            y1={'40'}
            y2={'40'}
          />
          <line
            className={'line bottom'}
            stroke={'black'}
            strokeWidth={'10'}
            strokeLinecap={'round'}
            strokeDasharray={'80'}
            strokeDashoffset={'0'}
            x1={'10'}
            x2={'90'}
            y1={'60'}
            y2={'60'}
          />
        </svg>
      </button>
    </HamburgerTwo>
  );

  return (
    <NavContainer>
      <Logo href={'/'}>
        Lu<span> | </span>
        <span>Codes</span>
      </Logo>
      <Hammy />
      <Hamburger open={isOpen} onClick={toggle} data-testid="text">
        <button className={'button-one'} aria-controls="primary-navigation" aria-expanded="false">
          <svg className="hamburger" viewBox={'0 0 100 100'} width={'30'}>
            <line
              className={'line top'}
              stroke={'black'}
              strokeWidth={'10'}
              strokeLinecap={'round'}
              strokeDasharray={'80'}
              strokeDashoffset={'0'}
              x1={'90'}
              x2={'10'}
              y1={'40'}
              y2={'40'}
            />
            <line
              className={'line bottom'}
              stroke={'black'}
              strokeWidth={'10'}
              strokeLinecap={'round'}
              strokeDasharray={'80'}
              strokeDashoffset={'0'}
              x1={'10'}
              x2={'90'}
              y1={'60'}
              y2={'60'}
            />
          </svg>
        </button>
      </Hamburger>
      <Menu open={isOpen}>
        <MenuLinks href={paths.HOME}>Home</MenuLinks>
        <MenuLinks href={paths.SERVICE}>Service</MenuLinks>
        <MenuLinks href={paths.CASE_STUDIES}>Case Studies</MenuLinks>
        <MenuLinks href={paths.BLOG}>Blog</MenuLinks>
        <MenuLinks href={paths.CONTACT}>Contact</MenuLinks>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
