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
  font-weight: 500;
  margin-top: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
`;

export const Category = styled.h2`
  font-size: 2rem;
  font-weight: 200;
`;

export const Tags = styled.h2`
  font-size: 2rem;
  font-weight: 200;
`;

const PostHeader = ({ post, timeToRead }) => {
  const { title, description, date, category, tags } = post;
  return (
    <Header>
      <Date>
        <span>{date}</span>
        <span>{timeToRead}</span>
      </Date>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <Category>{category}</Category>
      <Tags>{tags}</Tags>
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
