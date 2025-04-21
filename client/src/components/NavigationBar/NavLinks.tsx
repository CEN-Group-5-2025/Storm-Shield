import { Link } from 'react-router-dom'
import './nav-links.css'

export const NavLinks = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Shelter Locator', path: '/dashboard/shelter-locator' },
    { name: 'Community', path: '/dashboard/community' },
    { name: 'Volunteer Matching', path: '/dashboard/volunteer' },
  ]

  return (
    <nav className="nav-links">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="nav-link"
          aria-label={item.name}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
