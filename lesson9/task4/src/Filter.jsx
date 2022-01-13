import React from 'react';

const Filter = props => {
  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input
        type="text"
        className="filter__input"
        onChange={props.onChange}
        value={props.filterText}
      />
    </div>
  );
};

export default Filter;
