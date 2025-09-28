'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { key: '/', label: 'Gallery' },
    { key: '/biography', label: 'Biography' },
    { key: '/statement', label: 'Artist Statement' },
    { key: '/publications', label: 'Publications' },
    { key: '/cv', label: 'CV' },
    { key: '/contact', label: 'Contact' }
  ]

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <h1 className="text-2xl font-light text-gray-900">
            Manolo Estavillo
          </h1>
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-8">
              {navItems.map(({ key, label }) => (
                <li key={key}>
                  <Link
                    href={key}
                    className={`text-sm uppercase tracking-wide transition-colors ${
                      pathname === key
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}