import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  ChartBar,
  Bell,
  ChevronDown,
  FileText,
  ChartLine,
  Menu,
  ChartPie,
  Search,
  Users,
  X
} from 'lucide-react';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 z-50 w-64 bg-white border-r border-gray-200 p-4 transition-transform md:static md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 border-b border-gray-200 px-4">
          <h1 className="text-xl font-bold text-green-600">BankESG Tracker</h1>
          <button
            className="md:hidden p-1"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-4 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive
                  ? 'bg-gray-200 font-semibold'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <ChartBar size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/emissions"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive
                  ? 'bg-gray-200 font-semibold'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <ChartLine size={18} />
            Emissions Tracker
          </NavLink>

          <NavLink
            to="/investments"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive
                  ? 'bg-gray-200 font-semibold'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <ChartPie size={18} />
            Investment Analysis
          </NavLink>

          <NavLink
            to="/frameworks"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive
                  ? 'bg-gray-200 font-semibold'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <FileText size={18} />
            Framework Compliance
          </NavLink>

          <NavLink
            to="/comparison"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded ${
                isActive
                  ? 'bg-gray-200 font-semibold'
                  : 'hover:bg-gray-100'
              }`
            }
          >
            <Users size={18} />
            Bank Comparison
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-1"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-2 top-2.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-1.5">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                ES
              </div>
              <span className="text-sm font-medium">ESG Analyst</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
