import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Network } from 'src/network'
import './App.css'
import { Community } from './screens/Community/Community'
import { Dashboard } from './screens/Dashboard'
import { LandingPage } from './screens/LandingPage'
import { ShelterLocatorPage } from './screens/ShelterLocator/ShelterLocator'

export const App = () => {
  const network = Network.getInstance()

  useEffect(() => {
    console.log('authenticated:', network.isAuthenticated)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/shelter-locator" element={<ShelterLocatorPage />} />
      </Routes>
    </Router>
  )
}
