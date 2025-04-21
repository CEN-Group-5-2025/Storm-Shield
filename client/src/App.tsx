import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { DashboardOutlet } from './components/DashboardOutlet'
import { AuthProvider } from './context'

import * as screens from 'src/screens'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<screens.LandingPage />} />
        <Route path="/login" element={<screens.Login />} />
        <Route path="/signup" element={<screens.SignUp />} />
        <Route path="/logout" element={<screens.Logout />} />
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <DashboardOutlet />
            </AuthProvider>
          }
        >
          <Route index={true} element={<screens.Dashboard />} />
          <Route path="profile" element={<screens.Profile />} />
          <Route path="community" element={<screens.Community />} />
          <Route
            path="shelter-locator"
            element={<screens.ShelterLocatorPage />}
          />
          <Route path="volunteer" element={<screens.VolunteerMatching />} />
          <Route path="volunteer-form" element={<screens.VolunteerForm />} />
          <Route
            path="volunteer-request"
            element={<screens.VolunteerRequest />}
          />
        </Route>
      </Routes>
    </Router>
  )
}
