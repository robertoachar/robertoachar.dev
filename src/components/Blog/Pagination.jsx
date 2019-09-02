import React, { useEffect, useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import { Hyperlink } from '../Common';

const PaginationContainer = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
`;

const Pagination = ({ currentPage, numPages }) => {
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);
  const [previous, setPrevious] = useState('');
  const [next, setNext] = useState('');

  useEffect(() => {
    const isFirst = currentPage === 1;
    setFirst(isFirst);

    const isLast = currentPage === numPages;
    setLast(isLast);

    const previousPage =
      currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
    setPrevious(previousPage);

    const nextPage = `/blog/page/${currentPage + 1}`;
    setNext(nextPage);
  }, [currentPage, numPages]);

  return (
    <PaginationContainer>
      {!first && <Hyperlink to={previous}>Página anterior</Hyperlink>}
      <p>{`${currentPage} de ${numPages}`}</p>
      {!last && <Hyperlink to={next}>Próxima página</Hyperlink>}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: t.number.isRequired,
  numPages: t.number.isRequired
};

export default Pagination;
