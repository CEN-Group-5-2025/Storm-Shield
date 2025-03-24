import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Community } from './screens/Community/Community'
import { Dashboard } from './screens/Dashboard'
import { LandingPage } from './screens/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App
