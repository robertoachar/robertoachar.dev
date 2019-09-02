import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Search from '../components/Blog/Search';

const SearchPage = () => (
  <Layout>
    <SEO title="Encontrar artigo" />
    <Search />
  </Layout>
);

export default SearchPage;
