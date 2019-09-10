import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import PostDate from './PostDate';

const Header = styled.header``;

const Title = styled.h1`
  color: var(--primary);
  font-size: ${({ theme }) => theme.font.size.wide};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1;
  margin-top: ${({ theme }) => theme.space.normal};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.font.size.huge};
  }
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-top: ${({ theme }) => theme.space.normal};
`;

const PostHeader = ({ post, timeToRead }) => {
  const { title, description, date } = post;
  return (
    <Header>
      <PostDate date={date} timeToRead={timeToRead} />
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Header>
  );
};

PostHeader.propTypes = {
  post: t.shape({
    title: t.string.isRequired,
    description: t.string.isRequired,
    date: t.string.isRequired,
    category: t.string.isRequired,
    tags: t.arrayOf(t.string).isRequired
  }).isRequired,
  timeToRead: t.number.isRequired
};

export default PostHeader;
