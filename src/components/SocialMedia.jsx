import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalLink from './ExternalLink';

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
  color: #cbd5e0;
`;

const IconContainer = styled.div`
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
