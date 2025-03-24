import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './screens/Dashboard'
import { LandingPage } from './screens/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
