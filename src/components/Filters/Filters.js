import React from 'react';
import NameFilter from './NameFilter';
import NumberFilter from './NumberFilter';
import SpecieFilter from './SpecieFilter';

const Filters = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler} className='form'>
        <NameFilter
          handleFilter={props.handleFilter}
          value={props.filterName}
        />
        <NumberFilter
          handleFilter={props.handleFilter}
          valueNumber={props.filterNumber}
        />
        <SpecieFilter handleFilter={props.handleFilter} />
      </form>
    </>
  );
};

export default Filters;
