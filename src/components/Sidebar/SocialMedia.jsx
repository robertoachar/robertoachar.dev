import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ExternalLink } from '../Common';

const SocialMediaContainer = styled.nav`
  margin-top: 1.5rem;
`;

const SocialMediaList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const SocialMediaItem = styled.li``;

const SocialMediaLink = styled(ExternalLink)`
  color: ${({ theme }) => theme.colors['blue-grey-400']};

  &:hover {
    color: ${({ theme }) => theme.colors['blue-500']};
  }
`;

const IconContainer = styled.div`
  height: 2rem;
  width: 2rem;
`;

const links = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/robertoachar',
    icon: ['fab', 'twitter']
  },
  {
    label: 'GitHub',
    href: 'https://github.com/robertoachar',
    icon: ['fab', 'github']
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/robertoachar',
    icon: ['fab', 'youtube']
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roberto-achar',
    icon: ['fab', 'linkedin']
  }
  // {
  //   label: 'Facebook',
  //   href: 'https://facebook.com/robertoachar',
  //   icon: ['fab', 'facebook']
  // }
];

const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialMediaList>
      {links.map((link) => {
        return (
          <SocialMediaItem key={link.label}>
            <SocialMediaLink href={link.href} title={link.label}>
              <IconContainer>
                <FontAwesomeIcon icon={link.icon} fixedWidth size="lg" />
              </IconContainer>
            </SocialMediaLink>
          </SocialMediaItem>
        );
      })}
    </SocialMediaList>
  </SocialMediaContainer>
);

export default SocialMedia;
