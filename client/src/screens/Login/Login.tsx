import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Network } from 'src/network'
import Footer from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar'
import './login.css'

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const networkRef = useRef(Network.getInstance())
  const navigate = useNavigate()

  useEffect(() => {
    networkRef.current = Network.getInstance()
  }, [])

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true)
    }, 300)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    const res = await networkRef.current.loginWithEmail(
      formData.email,
      formData.password,
    )
    setIsLoading(false)

    // TODO: Handle auth errors
    if (res.success) {
      navigate('/dashboard')
    } else {
      console.warn('Unable to log in:', res.data)
    }
  }

  return (
    <div className="login-page">
      <div className="login-content">
        <NavigationBar />

        <main className="login-main">
          <div className={`login-header ${animateHeader ? 'animate' : ''}`}>
            <h1 className="login-title">Welcome Back to StormShield</h1>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging In...' : 'Log In'}
            </button>

            <div className="signup-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Login
