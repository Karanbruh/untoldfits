import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import SearchModal from '@/components/ui/SearchModal'

export default function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <SiteHeader onOpenSearch={() => setSearchOpen(true)} />
      <SearchModal show={searchOpen} onHide={() => setSearchOpen(false)} />
      <div className={isHome ? '' : 'untold-main-offset'}>
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
