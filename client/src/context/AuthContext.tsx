import {
  createContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { Network } from 'src/network'
import type { IAlert, IPost, IPostCreate, IShelter } from 'src/schemas'

export const AuthContext = createContext({
  user: null as IUser | null,
  userError: null as string | null,
  isAuthenticated: null as boolean | null,
  alerts: [] as IAlert[],
  shelters: [] as IShelter[],
  posts: [] as IPost[],
  postsError: null as string | null,
  updatePost: async (id: number, payload: Partial<IPost>) => {},
  createPost: async (payload: IPostCreate): Promise<any> => {},
})

export const AuthProvider = (props: { children?: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  const [user, setUser] = useState<IUser | null>(null)
  const [alerts, setAlerts] = useState<IAlert[]>([])
  const [shelters, setShelters] = useState<IShelter[]>([])
  const [posts, setPosts] = useState<IPost[]>([])

  const [userError, setUserError] = useState<string | null>(null)
  const [postsError, setPostsError] = useState<string | null>(null)

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
    /* Get current user */
    const userRes = await networkRef.current.getCurrentUser()
    if (userRes.success) {
      setUser(userRes.data)
      setUserError(null)
    } else {
      console.log('user errors:', userRes.data)
      setUserError(JSON.stringify(userRes.data))
    }

    /* Get alerts */
    const alertsRes = await networkRef.current.getAlerts()
    if (alertsRes.success) setAlerts(alertsRes.data)

    /* Get Shelters */
    const sheltersRes = await networkRef.current.getShelters()
    if (sheltersRes.success) setShelters(sheltersRes.data)

    /* Get posts */
    const postsRes = await networkRef.current.getPosts()
    if (postsRes.success) setPosts(postsRes.data)
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

  const updatePost = async (id: number, payload: Partial<IPost>) => {}
  const createPost = async (payload: IPostCreate) => {
    const res = await networkRef.current.createPost(payload)
    if (res.success) {
      setPosts((prev) => [res.data, ...prev])
      setPostsError(null)
    } else {
      setPostsError(JSON.stringify(res.data))
    }
    return res
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userError,
        isAuthenticated,
        alerts,
        shelters,
        posts,
        postsError,
        updatePost,
        createPost,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
