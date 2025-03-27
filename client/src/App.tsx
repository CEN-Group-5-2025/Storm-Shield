import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context'
import { Community } from './screens/Community/Community'
import { Dashboard } from './screens/Dashboard'
import { LandingPage } from './screens/LandingPage'
import { Login } from './screens/Login'
import { Logout } from './screens/Logout'
import { ShelterLocatorPage } from './screens/ShelterLocator/ShelterLocator'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <Dashboard />
            </AuthProvider>
          }
        />
        <Route path="/community" element={<Community />} />
        <Route path="/shelter-locator" element={<ShelterLocatorPage />} />
      </Routes>
    </Router>
  )
}
