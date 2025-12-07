import { NavLink } from 'react-router-dom'

function Sidebar() {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/projects', label: 'Projects', icon: '📋' },
    { path: '/resources', label: 'Resources', icon: '👥' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/analytics', label: 'Analytics', icon: '🔍' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="sidebar min-h-screen p-6 bg-gray-900 text-white">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-1">ENGINEERING</h2>
        <h1 className="text-2xl font-bold text-blue-400">DASHBOARD</h1>
        <p className="text-gray-400 text-sm mt-2">Technology Division</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-12 p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm font-medium">System Status</p>
        </div>
        <p className="text-xs text-gray-400">All systems operational</p>
      </div>
      
      <div className="mt-6 text-center">
        <div className="text-xs text-gray-500">v2.1.0 • © 2024</div>
      </div>
    </div>
  )
}

export default Sidebar