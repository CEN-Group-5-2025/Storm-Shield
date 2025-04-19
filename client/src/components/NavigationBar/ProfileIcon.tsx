import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'src/context'
import './profile-icon.css'

export const ProfileIcon = () => {
  // In a real app, you would check if the user is logged in
  // For now, we'll assume the user is not logged in
  // const isLoggedIn = false
  const { isAuthenticated: isLoggedIn } = useContext(AuthContext)

  return (
    <div className="profile-icon-wrapper">
      {isLoggedIn ? (
        <Link to="/dashboard/profile">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="profile-icon"
          >
            <circle cx="20" cy="20" r="20" fill="#011F27" />
            <path
              d="M20 20C23.3137 20 26 17.3137 26 14C26 10.6863 23.3137 8 20 8C16.6863 8 14 10.6863 14 14C14 17.3137 16.6863 20 20 20Z"
              fill="#71C2CC"
            />
            <path
              d="M20 22C14.477 22 10 26.477 10 32H30C30 26.477 25.523 22 20 22Z"
              fill="#71C2CC"
            />
          </svg>
        </Link>
      ) : (
        <Link to="/signup">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="profile-icon"
          >
            <circle cx="20" cy="20" r="20" fill="#011F27" />
            <path
              d="M20 20C23.3137 20 26 17.3137 26 14C26 10.6863 23.3137 8 20 8C16.6863 8 14 10.6863 14 14C14 17.3137 16.6863 20 20 20Z"
              fill="#71C2CC"
            />
            <path
              d="M20 22C14.477 22 10 26.477 10 32H30C30 26.477 25.523 22 20 22Z"
              fill="#71C2CC"
            />
          </svg>
        </Link>
      )}
    </div>
  )
}
