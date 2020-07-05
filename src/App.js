import React from 'react';
import { orderBy } from 'lodash';
import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner'
import { GET_ALL_TODOS } from './gql/queries';
import TodoList from './containers/TodoList';
import TodoListControls from './containers/TodoListControls';

import './App.scss';

function App() {
  const {data, loading, error} = useQuery(GET_ALL_TODOS);
  
  return (
    <div className="App">
      <h2>TODOS</h2>
      {error && <div className="error">Something went wrong ...</div>}
      {loading && 
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      }
      {data && 
        <div className="todo-list-container">
          <TodoList items={orderBy(data.getAllTodos, 'title')}></TodoList>
          <TodoListControls></TodoListControls>
        </div>  
      }

    </div>
  );
}

export default App;
