import {
  createContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { Network } from 'src/network'

export const AuthContext = createContext({
  user: null as IUser | null,
  isAuthenticated: null as boolean | null,
})

export const AuthProvider = (props: { children?: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<IUser | null>(null)
  const networkRef = useRef(Network.getInstance())
  const navigate = useNavigate()

  useEffect(() => {
    networkRef.current = Network.getInstance()
  }, [])

  /**
   * Called when user is logged in,
   * this is the initialization point for
   * all of the redux stores - except the
   * user store.
   */
  const initializeStores = async () => {
    const res = await networkRef.current.getCurrentUser()
    if (res.success) {
      setUser(res.data)
    }
  }

  useEffect(() => {
    setIsAuthenticated(networkRef.current.isAuthenticated)
  }, [networkRef.current.isAuthenticated])

  // Triggers when login status changes
  useEffect(() => {
    if (isAuthenticated === false) {
      // User is explicitly logged out
      networkRef.current.logout().then(() => {
        setIsAuthenticated(false)
        navigate('/login')
      })
    } else if (isAuthenticated === true) {
      // User is explicitly logged in
      initializeStores().then()
    } else {
      // Unknown, skip
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (user) {
      console.log('Current user:', user)
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  )
}
