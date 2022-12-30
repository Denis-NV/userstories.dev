import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { listTodos } from './graphql/queries'
import { ListTodosQuery, ListTodosQueryVariables } from './API'

const initialState = { name: '', description: '' }

function App() {
  const { data, loading } = useQuery<ListTodosQuery, ListTodosQueryVariables>(gql(listTodos))
  const [formState, setFormState] = useState(initialState)

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value })
  }

  const todos = data?.listTodos?.items

  console.log(data, loading)

  return (
    <div>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      {/* <Button onClick={addTodo}>Create Todo</Button> */}

      {todos?.map((todo, index) => (
        <div key={todo?.id ? todo.id : index}>
          <p>{todo?.name}</p>
          <p>{todo?.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
