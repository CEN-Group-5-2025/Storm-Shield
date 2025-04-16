import { Logo } from './Logo'
import { NavLinks } from './NavLinks.tsx'
import { ProfileIcon } from './ProfileIcon.tsx'
import './navigation-bar.css'

export const NavigationBar = () => {
  return (
    <header className="navigation-bar">
      <Logo />
      <NavLinks />
      <ProfileIcon />
    </header>
  )
}
