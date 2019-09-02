import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Hyperlink, Paragraph } from '../Common';

import image01 from '../../../static/01.jpg';
import image02 from '../../../static/02.jpeg';
import image03 from '../../../static/03.png';

const Card = styled.div`
  background-color: var(--sidebar-background);
  border-radius: ${({ theme }) => theme.radius['radius-200']};
  box-shadow: ${({ theme }) => theme.shadow['shadow-300']};
  color: var(--text);
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow['shadow-400']};
    transform: translate(0, -2px);
  }
`;

const CardCover = styled.div`
  background: url(${image01}) no-repeat center center;
  background-size: cover;
  height: 192px;
  position: relative;
`;

const CardTag = styled.span`
  background: var(--yellow);
  bottom: 0;
  color: var(--sidebar-background);
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  left: 0;
  letter-spacing: 0.05rem;
  padding: 0.5rem 1rem;
  position: absolute;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 0;
`;

const CardTitle = styled.h2`
  border: 0;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
`;

const CardDescription = styled(Paragraph)`
  color: var(--text-light);
  margin-top: 0.5rem;
`;

const CardFooter = styled.div`
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
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

const PostItem = ({ post, slug, timeToRead }) => (
  <Hyperlink to={slug}>
    <Card>
      <CardCover>
        <CardTag>{post.category}</CardTag>
      </CardCover>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <CardDate>{post.date}</CardDate>
        <CardTime>
          <FontAwesomeIcon icon={['far', 'clock']} />
          <CardTimeText>{`${timeToRead} min de leitura`}</CardTimeText>
        </CardTime>
      </CardFooter>
    </Card>
  </Hyperlink>
);

PostItem.propTypes = {
  post: t.shape({
    category: t.string,
    date: t.string,
    title: t.string,
    description: t.string
  }).isRequired,
  timeToRead: t.number.isRequired,
  slug: t.string.isRequired
};

export default PostItem;
