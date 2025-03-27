export const REACT_ENV: nodenv = (import.meta.env?.MODE ?? 'test') as nodenv
// export const API_URL = import.meta.env?.VITE_NETWORK_URL ?? location.origin
export const API_URL =
  import.meta.env?.VITE_NETWORK_URL ?? 'http://localhost:8000/api'
export const LOG_LEVEL: loglevel = import.meta.env.LOG_LEVEL ?? 'debug'

export const TEST_ENV = false

export const CSRF_COOKIE_NAME = 'csrftoken'
export const SESSION_COOKIE_NAME = 'sessionid'

export const CURRENT_URL = `${window.location.protocol}//${window.location.host}`
