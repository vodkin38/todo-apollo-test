import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../gql/mutations';
import requestCallbacks from '../../gql/callbacks';
import './index.scss';

function TodoListControls() {

  let input = useRef(); //Our input ref
  const [addTodo, {loading}] = useMutation(ADD_TODO, {update: requestCallbacks.ADD_TODO});

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo({ variables:
      {todo: {title: input.value}}
    });
    input.value = "";
  }

  return (
    <div className="todo-list-controls">
      <form onSubmit={handleAddTodo}>
        {/* No need to make a controllable input, instead I'm using ref */}
        <input ref={ref => input = ref} className="add-todo-input"/> 
        <button className="add-todo-button">{loading ? 'Adding...' : "Add Todo"}</button>
      </form>
    </div>
  );
}

export default TodoListControls;
