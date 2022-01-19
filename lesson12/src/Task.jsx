import React from 'react';
import classNames from 'classnames';

const Task = ({ id, done, text, onChange, onDelete }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        className="list-item__checkbox"
        onChange={() => onChange(id)}
        type="checkbox"
        defaultChecked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

export default Task;
