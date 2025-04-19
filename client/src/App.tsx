import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { DashboardOutlet } from './components/DashboardOutlet'
import { AuthProvider } from './context'
import { Community } from './screens/Community/Community'
import { Dashboard } from './screens/Dashboard'
import { LandingPage } from './screens/LandingPage'
import { Login } from './screens/Login/Login'
import { Logout } from './screens/Logout/Logout'
import { ShelterLocatorPage } from './screens/ShelterLocator/ShelterLocator'
import { SignUp } from './screens/SignUp'
import { VolunteerForm } from './screens/VolunteerForm'
import { VolunteerMatching } from './screens/VolunteerMatching'
import { VolunteerRequest } from './screens/VolunteerRequest'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <DashboardOutlet />
            </AuthProvider>
          }
        >
          <Route index={true} element={<Dashboard />} />
          <Route path="community" element={<Community />} />
          <Route path="shelter-locator" element={<ShelterLocatorPage />} />
          <Route path="volunteer" element={<VolunteerMatching />} />
          <Route path="volunteer-form" element={<VolunteerForm />} />
          <Route path="volunteer-request" element={<VolunteerRequest />} />
        </Route>
        {/* <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <Dashboard />
            </AuthProvider>
          }
        /> */}
      </Routes>
    </Router>
  )
}
