import { API_URL } from 'src/config'

export const NetworkEndpoints = Object.freeze({
  user: {
    token: `${API_URL}/user/token/`,
    login: `${API_URL}/user/token/`,
    info: `${API_URL}/user/me/`,
  },
})
