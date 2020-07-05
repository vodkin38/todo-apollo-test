import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import Todo from '../../components/Todo';
import { UPDATE_TODO, REMOVE_TODO } from '../../gql/mutations';
import requestCallbacks from '../../gql/callbacks';
import './index.scss';

function TodoList({items = []}) {
  //Since resolvers don't work for http-requests
  const [toggleTodo] = useMutation(UPDATE_TODO, {update: requestCallbacks.UPDATE_TODO});
  const [removeTodo] = useMutation(REMOVE_TODO, {update: requestCallbacks.REMOVE_TODO});

  function onItemToggle(item) {
    toggleTodo({variables: {id: item.id}})
  }

  function onItemRemove(item) {
    if (window.confirm(`Are you sure you want to remove item ${item.title}?`)) { 
      removeTodo({variables: {id: item.id}})
    }
    
  }

  return (
    <div className="todo-list">
      {items.map(item =>
        <Todo
          item={item}
          onToggle={onItemToggle}
          onRemove={onItemRemove}
          key={item.id}
        ></Todo>
      )}
    </div>
  );
}

TodoList.propTypes = {
  items:  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  )
};

export default TodoList;
