import { FormEvent, useState } from 'react'
import { useSignInEmailPassword } from '@nhost/react'
import { useLocation, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const { signInEmailPassword, needsEmailVerification, isLoading, isError, error } =
    useSignInEmailPassword()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const from = location.state?.from?.pathname || '/'

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()

    await signInEmailPassword(email, password)

    navigate(from, { replace: true })
  }

  return (
    <div>
      <h1>Grain by Grain Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button disabled={isLoading}>
            {isLoading ? <span>Loading</span> : <span>Log in</span>}
          </button>
        </div>
      </form>

      {isError && <span>Error signing in: {error?.message}</span>}
      {needsEmailVerification && <span>Email varification is needed</span>}
    </div>
  )
}

export default SignIn
