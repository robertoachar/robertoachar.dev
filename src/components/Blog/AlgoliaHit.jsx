import React from 'react';
import t from 'prop-types';

import PostItem from './PostItem';

const AlgoliaHit = ({ hit }) => {
  return <PostItem post={hit} />;
};

AlgoliaHit.propTypes = {
  hit: t.shape({
    category: t.string,
    date: t.string,
    title: t.string,
    description: t.string
  }).isRequired
};

export default AlgoliaHit;
