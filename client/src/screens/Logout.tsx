import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Network } from 'src/network'

export const Logout = () => {
  const networkRef = useRef(Network.getInstance())
  const navigate = useNavigate()

  useEffect(() => {
    // User is explicitly logged out
    networkRef.current.logout().then(() => {
      navigate('/')
    })
  }, [])
  return <div>Logout</div>
}
