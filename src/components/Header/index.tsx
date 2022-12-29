import React, { useState } from 'react';
import { Container } from '../styles/container.styled';
import Nav from '../Nav/Nav';
import Link from 'next/link'

import { BannerImage, Header, Image, SHeader } from '../styles/header.styled';
import { Flex } from '../styles/flex.styled';
import { Button } from '../styles/button.styled';
import { IMG_URI } from '../../constants/config';
import { NewNav } from '../NewNav/NewNav';
import useWidth from '../../hooks/useWidth';
import { Hamburger, HamburgerTwo } from '../styles/nav.styled';

type IHeaderSection = {
  summary?: string;
  title: string;
};

export const HeaderSection = ({ summary, title }: IHeaderSection) => {
  return (
    <SHeader>
      <Container>
        <Flex>
          <div style={{ padding: '0', margin: 'auto', textAlign: 'center' }}>
            <h1 style={{ margin: '0 auto', width: '30ch' }}>{title}</h1>
            <p style={{ textAlign: 'start' }}>{summary}</p>
          </div>
        </Flex>
      </Container>
    </SHeader>
  );
};

export const HomePageHeaderSection = () => {
  return (
    <Flex>
      <div>
        <h2>We supply the building blocks to shape the product you envision.</h2>
        <p>
          We help clients on a global scale to develop products seamlessly enabling their customers to feel comfortable
          using their services.
        </p>
          <Link href={'/contact'}><Button primary>Contact us</Button></Link>
        <Button>Explore</Button>
      </div>
      <Image src={IMG_URI + 'running_man.png'} />
    </Flex>
  );
};

type IHeaderToggle = {
  header?: boolean;
};

export const TopHeader: React.FC<IHeaderToggle> = ({ header }) => {
  const [isSpread, setIsSpread] = useState<boolean>(false);

    // const isHome = pathname.length === 1;
    const isHome = true
    const toggleMenu = () => setIsSpread!((prevState: boolean) => !prevState);

  return (
    <Header headerColour={header} style={{ background: 'linear-gradient(180deg, #0b8ab8 30%, #2581c1)' }}>
      <NewNav show={isSpread} setNavOpen={setIsSpread} />
      <Container>
        <Nav {...{ isSpread, toggleMenu }} />
        {isHome ? <HomePageHeaderSection /> : null}
      </Container>
      {isHome ? <BannerImage src={IMG_URI + 'language-banner.png'} /> : null}
    </Header>
  );
};
