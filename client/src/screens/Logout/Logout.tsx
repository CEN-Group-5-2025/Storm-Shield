import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Network } from 'src/network'
import Footer from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar'
import './logout.css'

export const Logout = () => {
  const networkRef = useRef(Network.getInstance())
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(true)

  useEffect(() => {
    // User is explicitly logged out
    networkRef.current.logout().then(() => {
      setIsLoggingOut(false)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    })
  }, [navigate])

  return (
    <div className="logout-page">
      <div className="logout-content">
        <NavigationBar />

        <main className="logout-main">
          <div className="logout-message">
            <h1 className="logout-title">Logging Out</h1>
            <p className="logout-text">
              {isLoggingOut
                ? "You are being logged out of your account..."
                : "You have been successfully logged out. Redirecting to home page..."}
            </p>
            <div className="logout-spinner"></div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
} 