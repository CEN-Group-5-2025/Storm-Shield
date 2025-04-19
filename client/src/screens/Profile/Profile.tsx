import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'src/context'

export const Profile = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <div>Current user: {user!.email}</div>
      <Link to="/logout">Logout</Link>
    </div>
  )
}
