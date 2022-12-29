import React from 'react';
import { FooterStyled } from '../styles/footer.styled';
import { Flex } from '../styles/flex.styled';
import { SocialIcon } from 'react-social-icons';
import { Logo } from '../styles/nav.styled';
const IconStyle = { width: '35px', height: '35px' };

const Footer = () => {
  return (
    <FooterStyled data-testid={'footer'}>
      <Flex primary>
        <ul>
          <li>
            <Logo href={'/contact'}>
              Lu<span> | </span>
              <span>Codes</span>
            </Logo>
          </li>
          <li>+1-543-123-4567</li>
          <li>contact@lucodes.co.uk</li>
        </ul>
        <ul>
          <li className={'footer-link'}>About Us</li>
          <li className={'footer-link'}>What We Do</li>
          <li className={'footer-link'}>FAQ</li>
        </ul>

        <ul>
          <li className={'footer-link'}>Career</li>
          <li className={'footer-link'}>Blog</li>
          <li className={'footer-link'}>Contact Us</li>
        </ul>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li>&copy; Lucodes</li>
          <li>
            <SocialIcon
              bgColor="rgba(200, 200, 200, 0.5)"
              fgColor={'black'}
              style={IconStyle}
              url="https://www.linkedin.com"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="rgba(200, 200, 200, 0.5)"
              fgColor={'black'}
              style={IconStyle}
              url="https://github.com"
            />
          </li>
          <li>
            <SocialIcon
              bgColor="rgba(200, 200, 200, 0.5)"
              fgColor={'black'}
              style={IconStyle}
              url="https://www.instagram.com"
            />
          </li>
        </ul>
      </Flex>
    </FooterStyled>
  );
};

export { Footer };
