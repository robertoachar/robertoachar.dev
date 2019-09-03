import React, { useEffect, useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';

import { Hyperlink, Span } from '../Common';

const PaginationContainer = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  padding: 2rem 0 0;
`;

const PreviousNavigation = styled.div``;

const Pages = styled.div`
  text-align: center;
`;

const NextNavigation = styled.div`
  text-align: right;
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
      <PreviousNavigation>
        {!first && <Hyperlink to={previous}>Anterior</Hyperlink>}
      </PreviousNavigation>
      <Pages>
        <Span>{`${currentPage} de ${numPages}`}</Span>
      </Pages>
      <NextNavigation>
        {!last && <Hyperlink to={next}>Próxima</Hyperlink>}
      </NextNavigation>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: t.number.isRequired,
  numPages: t.number.isRequired
};

export default Pagination;
