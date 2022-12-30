import { useState } from 'react'
import { Button } from '@ustrs/react-components'
import { useAuth0 } from '@auth0/auth0-react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const logoutWithRedirect = () =>
    logout({
      returnTo: window?.location?.origin,
    })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {isAuthenticated ? (
        <div>
          <p className="read-the-docs">Hello {user?.nickname}</p>
          <Button onClick={() => logoutWithRedirect()}>Log out</Button>
        </div>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log in</Button>
      )}
    </div>
  )
}

export default App
