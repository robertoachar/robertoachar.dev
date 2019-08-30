import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

const SocialMediaList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SocialMediaItem = styled.li``;

const SocialMediaLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`;

const IconWrapper = styled.div`
  fill: #bbb;
  height: 2rem;
  width: 2rem;
`;

const links = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/robertoachar',
    icon: ['fab', 'facebook']
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/robertoachar',
    icon: ['fab', 'twitter']
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/roberto.achar',
    icon: ['fab', 'linkedin']
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/robertoachar',
    icon: ['fab', 'youtube']
  },
  {
    label: 'GitHub',
    href: 'https://github.com/robertoachar',
    icon: ['fab', 'github']
  }
];

const SocialMedia = () => (
  <SocialMediaWrapper>
    <SocialMediaList>
      {links.map((link) => {
        return (
          <SocialMediaItem key={link.label}>
            <SocialMediaLink href={link.href} title={link.label}>
              <IconWrapper>
                <FontAwesomeIcon icon={link.icon} fixedWidth />
              </IconWrapper>
            </SocialMediaLink>
          </SocialMediaItem>
        );
      })}
    </SocialMediaList>
  </SocialMediaWrapper>
);

export default SocialMedia;
