import React, { useEffect, useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PaginationContainer = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  padding: 2rem 0 0;
`;

const Previous = styled.div`
  text-align: left;
`;

const Pages = styled.div`
  text-align: center;
`;

const Next = styled.div`
  text-align: right;
`;

const Pagination = ({ currentPage, totalPages }) => {
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [previous, setPrevious] = useState('');
  const [next, setNext] = useState('');

  useEffect(() => {
    const isFirst = currentPage === 1;
    setFirst(isFirst);

    const isLast = currentPage === totalPages;
    setLast(isLast);

    const previousPage =
      currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
    setPrevious(previousPage);

    const nextPage = `/blog/page/${currentPage + 1}`;
    setNext(nextPage);
  }, [currentPage, totalPages]);

  return (
    <PaginationContainer>
      <Previous>{!first && <Link to={previous}>Anterior</Link>}</Previous>
      <Pages>{`${currentPage} de ${totalPages}`}</Pages>
      <Next>{!last && <Link to={next}>Próxima</Link>}</Next>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: t.number.isRequired,
  totalPages: t.number.isRequired
};

export default Pagination;
