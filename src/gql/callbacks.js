import { orderBy } from 'lodash';
import { GET_ALL_TODOS } from './queries';

const callbacks = {
  ADD_TODO: function (cache, { data: {addTodo} }) {
    const { getAllTodos:todos } = cache.readQuery({ query: GET_ALL_TODOS });
    cache.writeQuery({
      query: GET_ALL_TODOS,
      data: {
        getAllTodos: orderBy([...todos, addTodo], 'title')
      }
    });
    return addTodo;
  },
  REMOVE_TODO: function (cache, { data: {removeTodo} }) {
    cache.writeQuery({
      query: GET_ALL_TODOS,
      data: {
        getAllTodos: orderBy(removeTodo, 'title')
      }
    });
    return removeTodo;
  },
  UPDATE_TODO: function (cache, { data: {updateTodo} }) {
    cache.writeQuery({
      query: GET_ALL_TODOS,
      data: {
        getAllTodos: orderBy(updateTodo, 'title')
      }
    });
    return updateTodo;
  },
}

export default callbacks;