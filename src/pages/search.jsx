import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Search from '../components/Search';

const SearchPage = () => (
  <Layout>
    <SEO title="Search Page" />
    <Search />
  </Layout>
);

export default SearchPage;
