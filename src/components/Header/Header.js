import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Logo, Menu, Social, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
  <Logo>
    <Link href="/">
      <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20px" }}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </a>
    </Link>
  </Logo>
  <Menu>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Menu>
    <Social>
        <SocialIcons href="https://github.com/eddymandran">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/eddymandran/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Social>
  </Container>
);

export default Header;
