import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  color: var(--secondary);
  display: flex;
  justify-content: space-between;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Time = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const TimeText = styled.span`
  margin-left: ${({ theme }) => theme.space.tiny};
`;

const PostDate = ({ date, timeToRead }) => (
  <Container>
    <Date>{date}</Date>
    <Time>
      <FontAwesomeIcon icon={['far', 'clock']} />
      <TimeText>{`${timeToRead} min de leitura`}</TimeText>
    </Time>
  </Container>
);

PostDate.propTypes = {
  date: t.string.isRequired,
  timeToRead: t.number.isRequired
};

export default PostDate;
