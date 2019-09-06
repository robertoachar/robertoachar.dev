import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading2, Hyperlink, Image, Paragraph } from '../Common';

const Card = styled.div`
  background-color: var(--background-dark);
  border-radius: ${({ theme }) => theme.radius['radius-200']};
  box-shadow: ${({ theme }) => theme.shadow['shadow-300']};
  color: var(--text);
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

const CardCover = styled.div`
  position: relative;
`;

const CardCategory = styled.span`
  background: ${({ theme }) => theme.colors.yellow};
  bottom: 0;
  color: ${({ theme }) => theme.colors['blue-grey-900']};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  left: 0;
  letter-spacing: 0.05rem;
  padding: 0.5rem 1rem;
  position: absolute;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
`;

const CardData = styled.div``;

const CardTags = styled.div`
  display: flex;
`;

const CardTag = styled.span`
  background: var(--background);
  border-radius: ${({ theme }) => theme.radius['radius-200']};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 0.125rem 0.5rem;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

const CardTitle = styled(Heading2)`
  margin-top: 1rem;
`;

const CardDescription = styled(Paragraph)`
  color: var(--text-light);
  margin-top: 0.5rem;
`;

const CardFooter = styled.div`
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CardDate = styled.span`
  font-size: ${({ theme }) => theme.font.size.small};
`;

const CardTime = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const CardTimeText = styled.span`
  margin-left: 0.5rem;
`;

const PostItem = ({ post, timeToRead }) => (
  <Hyperlink to={`blog/${post.slug}`}>
    <Card>
      <CardCover>
        {post.cover && <Image fluid={post.cover.childImageSharp.fluid} />}
        <CardCategory>{post.category}</CardCategory>
      </CardCover>
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
          <CardDate>{post.date}</CardDate>
          <CardTime>
            <FontAwesomeIcon icon={['far', 'clock']} />
            <CardTimeText>{`${timeToRead} min de leitura`}</CardTimeText>
          </CardTime>
        </CardFooter>
      </CardBody>
    </Card>
  </Hyperlink>
);

PostItem.propTypes = {
  post: t.shape({
    title: t.string,
    description: t.string,
    date: t.string,
    category: t.string,
    tags: t.arrayOf(t.string),
    slug: t.string,
    cover: t.shape({
      childImageSharp: t.shape({
        fluid: t.object
      })
    })
  }).isRequired,
  timeToRead: t.number.isRequired
};

export default PostItem;
