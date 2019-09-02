import React from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import AlgoliaHit from './AlgoliaHit';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
};

const searchClient = algoliasearch(algolia.appId, algolia.searchKey);

const SearchWrapper = styled.section`
  background: #16202c;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;
  }
  .ais-Stats {
    color: #8899a6;
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid #38444d;
    color: #8899a6;
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #8899a6;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;

const Search = () => (
  <SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
          }
        }}
      />
      <Hits hitComponent={AlgoliaHit} />
    </InstantSearch>
  </SearchWrapper>
);

export default Search;
