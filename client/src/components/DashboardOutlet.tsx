import { Outlet } from 'react-router-dom'

/**
 * Common component for all dashboard pages.
 */
export const DashboardOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
