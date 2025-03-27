import type { FormEvent } from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Network } from 'src/network'

export const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)
  const network = Network.getInstance()

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    network.loginWithEmail(email, password).then((res) => {
      if (!res.success) {
        setError(res.data.error ?? 'Unknown error')
      } else {
        setError(null)
        navigate('/dashboard')
      }
    })
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
