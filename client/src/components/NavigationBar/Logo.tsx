import { Link } from 'react-router-dom'
import './logo.css'

export const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <h1 className="logo-text">StormShield</h1>
    </Link>
  )
}
