import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import Heading1 from '../MDX/Heading1';
import PostDate from './PostDate';

const Header = styled.header``;

const Title = styled(Heading1)`
  margin-top: ${({ theme }) => theme.space.normal};
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
