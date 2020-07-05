import { GET_ALL_TODOS } from './queries';

//Not using resolvers for now
const resolvers = {

  Mutation: {
    addTodo: async (root, todo, { cache }) => {
      const { getAllTodos:todos } = cache.readQuery({ query: GET_ALL_TODOS });
      let new_todo = {
        id: Math.random(0,10000000),
        title: todo.todo.title,
        completed: false,
      };
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          getAllTodos: [...todos, new_todo]
        }
      });
      console.log("TODOS: ", cache.readQuery({ query: GET_ALL_TODOS }));
      return new_todo;
    },
    removeTodo: function (root, { data: { removeTodo } }, { cache }) {
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          getAllTodos: removeTodo
        }
      });
      return removeTodo;
    },
    UPDATE_TODO: function (cache, { data: {updateTodo} }) {
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          getAllTodos: updateTodo
        }
      });
      return updateTodo;
    },
  },
}

export default resolvers;