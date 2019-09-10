import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import PostDate from './PostDate';

const Card = styled.div`
  background-color: var(--background-dark);
  border-radius: ${({ theme }) => theme.radius['radius-200']};
  box-shadow: ${({ theme }) => theme.shadow['shadow-300']};
  color: var(--primary);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow['shadow-400']};
    transform: translate(0, -2px);
  }
`;

const CardPhoto = styled.div`
  position: relative;
`;

const CardCategory = styled.span`
  background: ${({ theme }) => theme.colors.yellow};
  bottom: 0;
  color: ${({ theme }) => theme.colors['blue-grey-800']};
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  left: 0;
  padding: 0.25rem 0.5rem;
  position: absolute;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.normal};
`;

const CardData = styled.div``;

const CardTags = styled.div`
  display: flex;
`;

const CardTag = styled.span`
  background: var(--background);
  border-radius: ${({ theme }) => theme.radius['radius-200']};
  color: var(--secondary);
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 0.125rem 0.5rem;

  &:not(:first-child) {
    margin-left: ${({ theme }) => theme.space.small};
  }
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: ${({ theme }) => theme.space.normal};
`;

const CardDescription = styled.p`
  color: var(--primary);
  line-height: 1.4;
  margin-top: ${({ theme }) => theme.space.small};
`;

const CardFooter = styled.div`
  margin-top: ${({ theme }) => theme.space.normal};
`;

const PostItem = ({ post, timeToRead }) => (
  <Link to={`blog/${post.slug}`}>
    <Card>
      <CardPhoto>
        {post.photo && <Img fluid={post.photo.childImageSharp.fluid} />}
        <CardCategory>{post.category}</CardCategory>
      </CardPhoto>
      <CardBody>
        <CardData>
          <CardTags>
            {post.tags.map((tag) => (
              <CardTag key={tag}>{tag}</CardTag>
            ))}
          </CardTags>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardData>
        <CardFooter>
          <PostDate date={post.date} timeToRead={timeToRead} />
        </CardFooter>
      </CardBody>
    </Card>
  </Link>
);

PostItem.propTypes = {
  post: t.shape({
    slug: t.string,
    title: t.string,
    description: t.string,
    date: t.string,
    category: t.string,
    tags: t.arrayOf(t.string),
    photo: t.shape({
      childImageSharp: t.shape({
        fluid: t.object
      })
    })
  }).isRequired,
  timeToRead: t.number.isRequired
};

export default PostItem;
