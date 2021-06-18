import React from 'react';

const NumberFilter = (props) => {
  const handleChange = (ev) => {
    // ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'episodes',
    });
  };

  return (
    <>
      <input
        className='form_input'
        type='number'
        name='episodes'
        id='episodes'
        placeholder='episodes...'
        value={props.valueNumber}
        onChange={handleChange}
      />
    </>
  );
};

export default NumberFilter;
