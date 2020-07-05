import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Todo({
  item,
  onToggle,
  onRemove
}) {

  function handleToggle() {
    onToggle && onToggle(item);
  }

  function handleRemove() {
    onRemove && onRemove(item);
  }

  return (
    <div className={`todo ${item.completed && 'completed'}`}>
      <div className="todo-text-container" onClick={handleToggle}>
        <span className="todo-text">{item.title}</span>
        <span className="todo-completed-stroke"></span>
      </div>
      <div className="todo-buttons">
        {/* This one is not necessary anymore, as out server cannot edit todo */}
        {/* <button className="todo-button edit"></button>  */}
        <button className="todo-button remove" onClick={handleRemove}></button>
      </div>    
    </div>
  );
}

Todo.propTypes = {
  item:  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,

};

export default Todo;
