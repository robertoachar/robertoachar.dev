import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

export const Header = styled.header``;

const Date = styled.time`
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.small};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.huge};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: ${({ theme }) => theme.space.normal};
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin-top: ${({ theme }) => theme.space.small};
`;

const PostHeader = ({ post, timeToRead }) => {
  const { title, description, date } = post;
  return (
    <Header>
      <Date>
        <span>{date}</span>
        <span>{timeToRead}</span>
      </Date>
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
