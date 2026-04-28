import { NavLink, Outlet } from 'react-router-dom'
import { company, contactInfo, footerLinks, mainNav } from '../data/siteData'

function navClassName({ isActive }) {
  return isActive
    ? 'text-cyan-400 border-cyan-400'
    : 'text-slate-200 border-transparent hover:text-cyan-300'
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <header className="border-b border-slate-800 bg-slate-950 text-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-bold tracking-wide">{company.name}</p>
            <p className="text-xs text-slate-300">Industrial Instrumentation & Automation</p>
          </div>
          <nav className="flex w-full items-center gap-2 overflow-x-auto text-sm font-medium sm:w-auto">
            {mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={(props) =>
                  `${navClassName(props)} whitespace-nowrap border-b-2 px-3 py-2 transition-colors`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-auto bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-100">{company.name}</p>
            <p className="mt-3 text-sm text-slate-300">
              Process instrumentation and automation solutions for industrial applications.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Product images and detailed catalogs will be added in upcoming iterations.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Quick Links</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {footerLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="text-slate-300 hover:text-cyan-300">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Contact</p>
            <p className="mt-3 text-sm text-slate-300">{contactInfo.email}</p>
            <p className="mt-1 text-sm text-slate-300">{contactInfo.phone}</p>
            <p className="mt-1 text-sm text-slate-400">{contactInfo.officeHours}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
