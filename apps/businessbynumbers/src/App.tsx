import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

import { Button } from '@ustrs/utils';

import { ListTodosQuery } from './API';

const initialState = { name: '', description: '' };

const App = (): JSX.Element => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = (await API.graphql(graphqlOperation(listTodos))) as { data: ListTodosQuery };

      const todos = todoData.data.listTodos.items;

      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div>
      <h2>Amplify Todos</h2>
      <input onChange={(event) => setInput('name', event.target.value)} value={formState.name} placeholder="Name" />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <Button onClick={addTodo}>Create Todo</Button>

      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index}>
          <p>{todo.name}</p>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
