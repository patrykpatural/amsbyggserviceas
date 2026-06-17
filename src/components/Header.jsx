'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Strona główna' },
  { href: '/konfigurator-domu', label: 'Konfigurator domu' },
  { href: '/o-nas', label: 'O nas' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="topbar">
      <div className="container nav">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="/img/logo.png"
            alt="AMS BYGGSERVICE AS logo"
            width={48}
            height={48}
            priority
          />
          <span>AMS BYGGSERVICE AS</span>
        </Link>

        <nav className="nav-links" aria-label="Główna nawigacja">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-phone" href="tel:+47 925 36 941">
          📞 +47 925 36 941
        </a>

        <Link className="btn btn-primary" href="/kontakt">
          Indywidualna wycena
        </Link>
      </div>
    </header>
  )
}