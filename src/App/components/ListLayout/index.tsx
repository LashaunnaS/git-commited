import React from 'react';
import AutoCompleteForm from '../AutoCompleteForm';
import ListLayoutStyles from './ListLayoutStyles';

const ListLayout = (): JSX.Element => {
  return (
    <ListLayoutStyles>
      <AutoCompleteForm />
    </ListLayoutStyles>
  );
};

export default ListLayout;
